"use client";

import { getCampers } from "@/lib/api";
import { Camper } from "@/types/camper";

import { useState } from "react";
import CamperList from "../CamperList/CamperList";
import { CatalogLoadMoreProps } from "@/types/props";

const CatalogLoadMore = ({ initialItems, total }: CatalogLoadMoreProps) => {
  const [items, setItems] = useState<Camper[]>(initialItems);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasMore = items.length < total;

  const loadMore = async () => {
    if (isLoading || !hasMore) return;

    const nextPage = page + 1;
    setIsLoading(true);
    setError(null);

    try {
      const res = await getCampers({ page: nextPage });
      setItems((prev) => [...prev, ...res.items]);
      setPage(nextPage);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <CamperList campers={items} />
      {error && <p>{error}</p>}
      {hasMore && (
        <button type="button" onClick={loadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default CatalogLoadMore;
