-- Create email_verifications table
create table if not exists public.email_verifications (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references auth.users(id) on delete cascade not null,
    email text not null,
    status text not null,
    verified_at timestamp with time zone default timezone('utc'::text, now()) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.email_verifications enable row level security;

-- Create policy to allow users to read their own verifications
create policy "Users can view their own verifications"
    on public.email_verifications
    for select
    using (auth.uid() = user_id);

-- Create policy to allow users to insert their own verifications
create policy "Users can insert their own verifications"
    on public.email_verifications
    for insert
    with check (auth.uid() = user_id);

-- Create function to count monthly verifications
create or replace function public.get_monthly_verification_count(user_id uuid)
returns integer
language plpgsql
security definer
set search_path = public
as $$
begin
    return (
        select count(*)
        from public.email_verifications
        where user_id = $1
        and verified_at >= date_trunc('month', current_timestamp)
        and verified_at < date_trunc('month', current_timestamp) + interval '1 month'
    );
end;
$$;