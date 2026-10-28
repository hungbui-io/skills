<!-- Local adaptation: prose dashes rewritten. See CREDITS.md. -->

# Airflow scheduling, catchup, and backfill

## Contents
- Data interval model
- Schedule options
- Catchup vs backfill
- Late data and sensors

## Data interval model
Airflow runs a DAG for a **data interval** (a window), not a point in time. A run
labeled `2026-01-15` typically processes 2026-01-15's data and starts after the
interval ends. Reference `data_interval_start` / `data_interval_end` in tasks so
logic is tied to the window, not execution time.

## Schedule options
- Cron string (`"0 6 * * *"`), preset (`"@daily"`), or `timedelta`.
- `schedule=None` for manually/externally triggered DAGs.
- Datasets/assets: `schedule=[Dataset("s3://bucket/orders")]` to run when an
  upstream dataset updates (event-driven instead of time-based).

## Catchup vs backfill
- `catchup=True` automatically creates a run for every interval between
  `start_date` and now on deploy/unpause: use only when you truly want history.
- Backfill on demand: `airflow dags backfill -s <start> -e <end> <dag_id>`.
- Both rely on tasks being idempotent; otherwise historical runs duplicate data.

## Late data and sensors
- Use sensors (`@task.sensor`, `ExternalTaskSensor`, file/S3 sensors) to wait for
  upstream readiness; prefer `mode="reschedule"` to free a worker slot while
  waiting.
- For late-arriving data, add a lookback window in the task query rather than
  relying only on the current interval.
