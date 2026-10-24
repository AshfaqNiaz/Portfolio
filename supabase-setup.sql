-- Run this ONCE in Supabase: SQL Editor > New query > paste > Run
create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  type text not null check (type in ('book','mag','media','video','self','hist')),
  en text, ur text, d_en text, d_ur text, year text, cat int default 0, url text, img text
);
alter table public.items enable row level security;
create policy "anyone can read items" on public.items for select using (true);
create policy "admin can add items" on public.items for insert to authenticated with check (true);
create policy "admin can delete items" on public.items for delete to authenticated using (true);

insert into storage.buckets (id, name, public) values ('pictures','pictures',true) on conflict (id) do nothing;
create policy "admin can upload pictures" on storage.objects for insert to authenticated with check (bucket_id = 'pictures');
create policy "admin can delete pictures" on storage.objects for delete to authenticated using (bucket_id = 'pictures');
