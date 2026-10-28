<!-- Local adaptation: prose dashes rewritten. See CREDITS.md. -->

# Engine-specific query tuning

## Contents
- Postgres / OLTP
- Snowflake
- BigQuery
- Spark SQL / Databricks
- Redshift

## Postgres / OLTP
- Read `EXPLAIN (ANALYZE, BUFFERS)`; compare estimated vs actual rows. Large gaps
  mean stale stats: run `ANALYZE`.
- Add composite indexes matching the filter + sort order; put equality columns
  before range columns.
- Use partial indexes for selective predicates (`WHERE status = 'active'`).
- Watch for sequential scans on large tables and nested-loop joins over big inputs.
- `work_mem` too low causes on-disk sorts/hashes; raise per-session for heavy queries.

## Snowflake
- Use the Query Profile: look at "Bytes scanned", "Partitions scanned vs total",
  and spilling to local/remote storage.
- Define clustering keys on very large tables filtered by a high-cardinality column;
  check `SYSTEM$CLUSTERING_INFORMATION`.
- Right-size the warehouse: scale **up** for a single heavy query, scale **out**
  (multi-cluster) for concurrency. Spilling to remote storage means the warehouse
  is too small.
- Result cache and metadata cache are free: identical queries return instantly.
- Avoid `SELECT *`; micro-partition column pruning only helps referenced columns.

## BigQuery
- Cost = bytes processed. Always check the query validator estimate or `--dry_run`.
- Partition by date/timestamp and cluster by the most-filtered columns.
- Avoid `SELECT *`; select only needed columns.
- Prefer approximate functions (`APPROX_COUNT_DISTINCT`) for large cardinality.
- Materialize repeated subqueries; use materialized views for common aggregates.
- Watch for data skew in `JOIN`/`GROUP BY` causing one slot to dominate.

## Spark SQL / Databricks
- Read `df.explain("formatted")`; identify `Exchange` (shuffle) and `Sort` nodes.
- Enable Adaptive Query Execution (on by default in recent versions) to coalesce
  partitions, convert sort-merge to broadcast joins, and handle skew.
- Broadcast small dimensions (`spark.sql.autoBroadcastJoinThreshold` or hint).
- Handle skew with salting or AQE skew join optimization.
- Prune with partition columns and Delta data-skipping/Z-ORDER on filter columns.
- Avoid Python UDFs in hot paths; prefer built-in/SQL functions or pandas UDFs.

## Redshift
- Choose DIST keys to co-locate join keys; use SORT keys matching filter/sort.
- Check `SVL_QUERY_REPORT`/`STL_ALERT_EVENT_LOG` for nested loops and missing stats.
- Run `ANALYZE` and `VACUUM` (or rely on auto) to keep stats and sort order fresh.
