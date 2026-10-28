# dbt project structure conventions

## Contents
- Directory layout
- Naming
- Materialization defaults by layer
- Config in dbt_project.yml

## Directory layout
```
models/
  staging/<source>/     stg_<source>__<entity>.sql  (views)
    _<source>__sources.yml
    _<source>__models.yml
  intermediate/         int_<entity>__<verb>.sql
  marts/<domain>/       dim_<entity>.sql, fct_<process>.sql  (tables/incremental)
```

## Naming
- `stg_` staging, `int_` intermediate, `dim_`/`fct_` marts.
- Double underscore separates concepts: `stg_stripe__payments`.
- One staging model per source table; do not join in staging.

## Materialization defaults by layer
- staging → `view` (always fresh, cheap).
- intermediate → `ephemeral` or `view` (not exposed to BI).
- marts → `table`, or `incremental` for large fact tables.

## Config in dbt_project.yml
Set layer defaults once instead of per model:

```yaml
models:
  my_project:
    staging:
      +materialized: view
    intermediate:
      +materialized: ephemeral
    marts:
      +materialized: table
```

Keep environment differences (schemas, warehouses) in `profiles.yml` targets and
`--target`, not in model code.
