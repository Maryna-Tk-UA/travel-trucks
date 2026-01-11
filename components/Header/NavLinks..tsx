"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

type Item = { href: string; label: string };

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/catalog") return pathname === "/catalog";
  return pathname === href;
}

export default function NavLinks({ items }: { items: Item[] }) {
  const pathname = usePathname();

  return (
    <ul className={css.navList}>
      {items.map((item) => {
        const active = isActive(pathname, item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${css.navLink} ${active ? css.active : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
