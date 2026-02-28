import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllStats } from "../lib/supabase";

const StatsContext = createContext(null);

export function FeedbackStatsProvider({ children }) {
  const [stats, setStats] = useState(new Map());

  useEffect(() => {
    fetchAllStats().then((rows) => {
      const map = new Map();
      for (const row of rows) {
        map.set(row.item_id, {
          avgRating: Number(row.avg_rating),
          ratingCount: Number(row.rating_count),
        });
      }
      setStats(map);
    }).catch(() => {});
  }, []);

  return (
    <StatsContext.Provider value={stats}>{children}</StatsContext.Provider>
  );
}

export function useFeedbackStats(itemId) {
  const stats = useContext(StatsContext);
  if (!stats) return null;
  return stats.get(String(itemId)) || null;
}
