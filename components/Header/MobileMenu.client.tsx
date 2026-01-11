"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string };

type Props = {
  items: Item[];
};

export default function MobileMenu({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const iconId = isOpen ? "icon-close" : "icon-menu";
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const active = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/catalog") return pathname === "/catalog";
    return pathname === href;
  };

  return (
    <div className={css.mobileWrap}>
      <button
        type="button"
        className={css.burgerBtn}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <svg className={css.menuIcon} width="24" height="24" aria-hidden="true">
          <use href={`/icons/sprite.svg#${iconId}`} />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className={css.backdrop} onClick={closeMenu} />

          <nav className={css.mobilePanel} aria-label="Mobile navigation">
            <ul className={css.mobileList}>
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    className={`${css.mobileLink} ${active(item.href) ? css.active : ""}`}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
