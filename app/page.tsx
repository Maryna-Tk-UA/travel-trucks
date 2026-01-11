import Link from "next/link";
import css from "./page.module.css";

export default function Hero() {
  return (
    <section className={css.hero} aria-label="Hero">
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
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
