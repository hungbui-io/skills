# Recommended dbt test coverage per layer

## Contents
- Staging
- Intermediate
- Marts
- Sources

## Staging
- `unique` + `not_null` on the source primary key.
- `not_null` on columns required downstream.
- `accepted_values` on status/type enums as they enter the warehouse.

## Intermediate
- Grain uniqueness after joins (the most common place duplicates appear).
- `not_null` on keys used by marts.

## Marts
- `unique` + `not_null` on the surrogate/primary key (grain guarantee).
- `relationships` from every fact foreign key to its dimension.
- Range/business-rule tests on measures (amount >= 0, valid date ranges).
- Row-count or freshness checks if the mart feeds SLAs.

## Sources
- `freshness` with warn/error thresholds on every ingested source.
- `unique`/`not_null` on the source natural key to catch upstream duplication early.

Set critical tests to `severity: error`; use `store_failures: true` on large or
noisy tests to inspect failing rows without failing the whole build.
