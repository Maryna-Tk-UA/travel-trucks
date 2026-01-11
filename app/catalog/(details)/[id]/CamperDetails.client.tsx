"use client";

import { getSingleCamper } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import css from "./Camper.module.css";
import OverlayLoader from "@/components/OverlayLoader/OverlayLoader";

type CamperDetailsClientProps = {
  id: string;
};

const CamperDetailsClient = ({ id }: CamperDetailsClientProps) => {
  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => getSingleCamper(id),
    refetchOnMount: false,
  });

  if (isLoading) return <OverlayLoader label="Loading Page..." />;
  if (error || !camper) return <p>Some error...</p>;

  const images = camper.gallery ?? [];
  const main = images[0]?.original || images[0]?.thumb;
  return (
    <div className={css.top}>
      <div className={css.topHead}>
        <div className={css.topLeft}>
          <h1 className={css.title}>{camper.name}</h1>

          <div className={css.metaRow}>
            <div className={css.metaItem}>
              <svg className={css.star} aria-hidden="true">
                <use href={"/icons/sprite.svg#icon-star-pressed"} />
              </svg>
              <span className={css.metaStar}>
                {camper.rating.toFixed(1)} ({camper.reviews?.length ?? 0}{" "}
                Reviews)
              </span>
            </div>

            <div className={css.metaItem}>
              <svg className={css.pin} aria-hidden="true">
                <use href={"/icons/sprite.svg#icon-Map"} />
              </svg>
              <span className={css.metaText}>{camper.location}</span>
            </div>
          </div>
        </div>
        <p className={css.price}>€{camper.price.toFixed(2)}</p>
      </div>

      <div className={css.gallery}>
        {main ? (
          <div className={css.galleryItem}>
            <Image
              src={main}
              alt={`${camper.name} photo 1`}
              fill
              className={css.galleryImg}
              priority
            />
          </div>
        ) : null}

        {images.slice(1, 4).map((img, idx) => {
          const src = img.original || img.thumb;
          if (!src) return null;

          return (
            <div key={src + idx} className={css.galleryItem}>
              <Image
                src={src}
                alt={`${camper.name} photo ${idx + 2}`}
                fill
                className={css.galleryImg}
                sizes="(max-width: 375px) 100vw, 292px"
              />
            </div>
          );
        })}
      </div>

      <p className={css.desc}>{camper.description}</p>
    </div>
  );
};

export default CamperDetailsClient;
