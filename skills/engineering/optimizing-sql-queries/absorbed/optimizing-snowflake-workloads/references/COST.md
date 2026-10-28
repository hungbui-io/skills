# Snowflake cost monitoring queries

## Contents
- Credits by warehouse
- Most expensive queries
- Spilling queries
- Idle warehouse detection

## Credits by warehouse (last 7 days)
```sql
select warehouse_name, sum(credits_used) credits
from snowflake.account_usage.warehouse_metering_history
where start_time >= dateadd('day', -7, current_timestamp())
group by 1 order by 2 desc;
```

## Most expensive queries
```sql
select query_id, warehouse_name, total_elapsed_time/1000 sec,
       bytes_scanned/pow(1024,3) gb_scanned, user_name, left(query_text, 120) qt
from snowflake.account_usage.query_history
where start_time >= dateadd('day', -1, current_timestamp())
order by total_elapsed_time desc
limit 50;
```

## Queries spilling to storage (warehouse too small)
```sql
select query_id, warehouse_name,
       bytes_spilled_to_local_storage/pow(1024,3) local_gb,
       bytes_spilled_to_remote_storage/pow(1024,3) remote_gb
from snowflake.account_usage.query_history
where start_time >= dateadd('day', -1, current_timestamp())
  and bytes_spilled_to_remote_storage > 0
order by remote_gb desc;
```

## Idle warehouse detection
Warehouses with long auto-suspend and low utilization are cost leaks. Review
`warehouse_events_history` for resume/suspend gaps and set auto-suspend to ~60s.
Set resource monitors to cap monthly credits and alert before overspend.
