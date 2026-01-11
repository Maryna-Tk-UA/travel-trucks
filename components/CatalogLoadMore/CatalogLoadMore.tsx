"use client";

import { useEffect } from "react";
import CamperList from "../CamperList/CamperList";
import { CatalogLoadMoreProps } from "@/types/props";
import { useCampersStore } from "@/lib/store/useCampersStore";
import css from "./CatalogLoadMore.module.css";

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
    <div className={css.wrap}>
      {!isLoading && !error && campers.length === 0 ? (
        <p className={css.empty}>
          Nothing found with these filters. Try changing your search criteria.
        </p>
      ) : (
        <CamperList campers={campers} />
      )}

      {error && <p className={css.error}>{error}</p>}

      {hasMore && (
        <div className={css.bottom}>
          <button
            type="button"
            onClick={loadMore}
            disabled={isLoading}
            className={css.loadMoreBtn}
          >
            {isLoading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CatalogLoadMore;
