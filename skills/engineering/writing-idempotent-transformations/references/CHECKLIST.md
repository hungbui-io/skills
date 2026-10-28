<!-- Local adaptation: prose dashes rewritten. See CREDITS.md. -->

# Idempotency & backfill-safe checklist

## Contents
- Pre-merge checklist
- Anti-patterns
- Verifying idempotency

## Pre-merge checklist
- [ ] Every output row has a deterministic key (business key or hash of identifying cols).
- [ ] Writes are MERGE/upsert or full partition overwrite: never blind append.
- [ ] The processing window is a parameter (e.g. `run_date`), not `now()`.
- [ ] Timestamps come from event/data columns, not from execution time.
- [ ] Delete+insert pairs are wrapped in a single transaction or atomic overwrite.
- [ ] Deduplication uses a stable ORDER BY tiebreaker.
- [ ] Re-running the same window twice yields identical row counts and checksums.

## Anti-patterns
- `INSERT INTO target SELECT ...` inside a task that has retries enabled.
- Sequence/identity columns used as the dedup or join key across runs.
- `WHERE created_at > (SELECT max(created_at) FROM target)` as the only
  incremental filter: misses late-arriving rows and breaks on re-run gaps.
- Truncate-then-load without a transaction: a failure mid-load empties the table.
- Random or hash-partition assignment that changes between runs.

## Verifying idempotency
Run the transform for a fixed window twice, then compare:

```sql
-- Same window, run twice; both must match.
SELECT COUNT(*) AS rows,
       SUM(FARM_FINGERPRINT(TO_JSON_STRING(t))) AS checksum  -- BigQuery example
FROM fct_orders t
WHERE order_date = DATE '2026-01-15';
```

Equal `rows` and `checksum` across the two runs confirms idempotency for that
window. Engine equivalents: Snowflake `HASH_AGG`, Spark `hash()` + `sum`,
Postgres `md5(string_agg(...))`.
