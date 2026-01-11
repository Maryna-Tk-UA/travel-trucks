"use client";

import css from "./OverlayLoader.module.css";

type OverlayLoaderProps = { label?: string };

export default function OverlayLoader({
  label = "Loading...",
}: OverlayLoaderProps) {
  return (
    <div
      className={css.backdrop}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className={css.box}>
        <div className={css.spinner} aria-hidden="true" />
        <span className={css.text}>{label}</span>
      </div>
    </div>
  );
}
