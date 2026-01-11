import Link from "next/link";
import Image from "next/image";
import css from "./Header.module.css";
import MobileMenu from "./MobileMenu.client";
import NavLinks from "./NavLinks.";

const nav = [
  { href: "/", label: "Home", exact: true },
  { href: "/catalog", label: "Catalog", exact: true },
];

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.inner}>
        <Link href="/" className={css.logo} aria-label="TravelTrucks home">
          <Image
            src="/images/TravelTrucks.svg"
            alt="TravelTrucks"
            width={136}
            height={16}
            priority
          />
        </Link>

        <nav className={css.navigationDesktop} aria-label="Primary navigation">
          <NavLinks items={nav} />
        </nav>

        <MobileMenu items={nav} />
      </div>
    </header>
  );
};

export default Header;
