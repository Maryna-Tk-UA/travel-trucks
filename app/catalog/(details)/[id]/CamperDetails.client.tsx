"use client";

import { getSingleCamper } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import css from "./Camper.module.css";

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

  if (isLoading) return <p>Loading...</p>;
  if (error || !camper) return <p>Some error...</p>;

  const images = camper.gallery ?? [];
  const main = images[0]?.original || images[0]?.thumb;
  return (
    <div className={css.top}>
      <div className={css.topHead}>
        <h1 className={css.title}>{camper.name}</h1>

        <div className={css.metaRow}>
          <div className={css.metaItem}>
            <svg className={css.star} aria-hidden="true">
              <use href={"/icons/sprite.svg#icon-star-pressed"} />
            </svg>
            <span className={css.metaText}>
              {camper.rating.toFixed(1)} ({camper.reviews?.length ?? 0} Reviews)
            </span>
          </div>

          <div className={css.metaItem}>
            <svg className={css.pin} aria-hidden="true">
              <use href={"/icons/sprite.svg#icon-Map"} />
            </svg>
            <span className={css.metaText}>{camper.location}</span>
          </div>
        </div>

        <p className={css.price}>€{camper.price.toFixed(2)}</p>
      </div>

      <div className={css.gallery}>
        {main ? (
          <Image
            src={main}
            alt={`${camper.name} photo 1`}
            width={292}
            height={312}
            className={css.galleryImg}
            priority
          />
        ) : null}

        {images.slice(1, 4).map((img, idx) => (
          <Image
            key={img.original || img.thumb || idx}
            src={img.original || img.thumb}
            alt={`${camper.name} photo ${idx + 2}`}
            width={292}
            height={312}
            className={css.galleryImg}
          />
        ))}
      </div>

      <p className={css.desc}>{camper.description}</p>
    </div>
  );
};

export default CamperDetailsClient;
