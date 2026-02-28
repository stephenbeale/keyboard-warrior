import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export function getUserId() {
  let id = localStorage.getItem("kw-user-id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("kw-user-id", id);
  }
  return id;
}

export async function submitFeedback(itemId, itemType, rating, suggestion) {
  if (!supabase) return;
  const userId = getUserId();
  const row = { item_id: itemId, item_type: itemType, user_id: userId, updated_at: new Date().toISOString() };
  if (rating != null) row.rating = rating;
  if (suggestion != null) row.suggestion = suggestion;
  await supabase
    .from("feedback")
    .upsert(row, { onConflict: "item_id,user_id" });
}

export async function fetchAllStats() {
  if (!supabase) return [];
  const { data } = await supabase.from("feedback_stats").select("*");
  return data || [];
}
