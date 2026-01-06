"use client";

import { useEffect } from "react";
import CamperList from "../CamperList/CamperList";
import { CatalogLoadMoreProps } from "@/types/props";
import { useCampersStore } from "@/lib/store/useCampersStore";

const CatalogLoadMore = ({ initialItems, total }: CatalogLoadMoreProps) => {
  const campers = useCampersStore((s) => s.campers);

  const isLoading = useCampersStore((s) => s.isLoading);
  const error = useCampersStore((s) => s.error);
  const initCampers = useCampersStore((s) => s.initCampers);
  const loadMore = useCampersStore((s) => s.loadMore);
  const hasMore = useCampersStore((s) => s.hasMore);

  useEffect(() => {
    initCampers(initialItems, total);
  }, [initialItems, total, initCampers]);

  return (
    <div>
      <CamperList campers={campers} />

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
