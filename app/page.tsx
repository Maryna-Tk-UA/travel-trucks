import Link from "next/link";
import Image from "next/image";
import css from "./page.module.css";

export default function Hero() {
  return (
    <section className={css.hero} aria-labelledby="hero-title">
      <Image
        className={css.heroImg}
        src="/heroBackground/Hero-1x.webp"
        alt=""
        fill
        priority
        sizes="100vw"
      />

      <div className={css.container}>
        <div className={css.content}>
          <h1 id="hero-title" className={css.title}>
            Campers of your dreams
          </h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>

          <Link href="/catalog" className={css.btn}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}
