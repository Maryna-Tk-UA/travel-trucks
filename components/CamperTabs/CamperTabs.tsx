"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./CamperTabs.module.css";

type CamperTabsProps = {
  id: string;
};

const CamperTabs = ({ id }: CamperTabsProps) => {
  const pathname = usePathname();

  const items = [
    { href: `/catalog/${id}/features`, label: "Features" },
    { href: `/catalog/${id}/reviews`, label: "Reviews" },
  ];

  return (
    <nav className={css.tabs} aria-label="Camper sections">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${css.tab} ${isActive ? css.active : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default CamperTabs;
