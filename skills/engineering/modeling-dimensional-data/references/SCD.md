# Slowly Changing Dimension (SCD) patterns

## Contents
- Type 2 with SQL MERGE
- Type 2 in dbt (snapshots)
- Choosing a type
- Late-arriving dimensions

## Type 2 with SQL MERGE
Close the current row and insert the new version in one idempotent operation.

```sql
MERGE INTO dim_customer AS tgt
USING staging_customer AS src
  ON tgt.customer_id = src.customer_id AND tgt.is_current
WHEN MATCHED AND (
       tgt.name <> src.name OR tgt.region <> src.region  -- attribute changed
     ) THEN UPDATE SET tgt.valid_to = src.effective_ts, tgt.is_current = FALSE
;
-- Then insert the new current version for changed + brand-new keys
INSERT INTO dim_customer (customer_id, name, region, valid_from, valid_to, is_current)
SELECT customer_id, name, region, effective_ts, TIMESTAMP '9999-12-31', TRUE
FROM staging_customer src
WHERE NOT EXISTS (
  SELECT 1 FROM dim_customer t
  WHERE t.customer_id = src.customer_id AND t.is_current
    AND t.name = src.name AND t.region = src.region
);
```

Run the surrogate key generation (identity/sequence/hash) as part of the insert.

## Type 2 in dbt (snapshots)
Let dbt manage `dbt_valid_from`/`dbt_valid_to` and change detection.

```sql
{% snapshot customer_snapshot %}
{{ config(
    target_schema='snapshots',
    unique_key='customer_id',
    strategy='check',
    check_cols=['name', 'region']
) }}
select * from {{ source('crm', 'customers') }}
{% endsnapshot %}
```

Use `strategy='timestamp'` with an `updated_at` column when the source has a
reliable modification timestamp; it is cheaper than `check`.

## Choosing a type
- Correction that should not preserve the wrong value -> Type 1.
- Business needs "what did this look like at the time" -> Type 2.
- Only need current vs immediately previous -> Type 3.
- Mixed: apply per attribute (name = Type 1, region = Type 2).

## Late-arriving dimensions
When a fact references a dimension key not yet loaded, insert a placeholder
dimension row (natural key known, attributes unknown) and backfill attributes
when they arrive. This keeps fact loads from failing on missing keys.
