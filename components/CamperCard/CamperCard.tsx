"use client";

import Image from "next/image";
import Link from "next/link";
import CamperBadges from "../CamperBadges/CamperBadges";
import css from "./CamperCard.module.css";
import { CamperCardProps } from "@/types/props";
import {
  useFavoritesStore,
  useIsFavorite,
} from "@/lib/store/useFavoritesStore";

const formatPrice = (value: number) => {
  return `€${value.toFixed(2)}`;
};

const SPRITE_PATH = "/icons/sprite.svg";

const CamperCard = ({ camper }: CamperCardProps) => {
  const reviewsCount = camper.reviews?.length ?? 0;
  const fav = useIsFavorite(camper.id);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  const img = camper.gallery?.[0]?.thumb || camper.gallery?.[0]?.original || "";

  return (
    <div className={css.card}>
      <div className={css.imageWrap}>
        {img ? (
          <Image
            src={img}
            alt={camper.name}
            fill
            className={css.image}
            sizes="(min-width: 1440px) 290px, 100vw"
          />
        ) : (
          <div className={css.imageFallback} />
        )}
      </div>

      <div className={css.content}>
        <div className={css.headerRow}>
          <h2 className={css.title}>{camper.name}</h2>

          <div className={css.priceAndFav}>
            <p className={css.price}>{formatPrice(camper.price)}</p>

            <button
              type="button"
              className={css.favBtn}
              onClick={() => toggleFavorite(camper.id)}
              aria-label={fav ? "Remove from favorites" : "Add to favorites"}
            >
              <svg className={css.favIcon} aria-hidden="true">
                <use
                  href={`${SPRITE_PATH}#${
                    fav ? "icon-heart-pressed" : "icon-heart-default"
                  }`}
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={css.metaRow}>
          <div className={css.rating}>
            <svg className={css.star} aria-hidden="true">
              <use href={`${SPRITE_PATH}#icon-star-pressed`} />
            </svg>
            <span>
              {camper.rating.toFixed(1)} ({reviewsCount} Reviews)
            </span>
          </div>

          <div className={css.location}>
            <svg className={css.pin} aria-hidden="true">
              <use href={`${SPRITE_PATH}#icon-Map`} />
            </svg>
            <span>{camper.location}</span>
          </div>
        </div>

        <p className={css.desc}>{camper.description}</p>

        <div className={css.bageWrap}>
          <CamperBadges camper={camper} />
        </div>

        <Link className={css.moreBtn} href={`/catalog/${camper.id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
