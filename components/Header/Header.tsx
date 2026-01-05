import Link from "next/link";
import css from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo} aria-label="TravelTrucks home">
        <Image
          src="/images/TravelTrucks.svg"
          alt="TravelTrucks"
          width={136}
          height={16}
          priority
        />
      </Link>
      <nav className={css.navigation}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/catalog">Catalog</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
