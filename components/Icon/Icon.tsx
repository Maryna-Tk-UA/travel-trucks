import type { ComponentPropsWithoutRef } from "react";

type IconProps = {
  name: string;
  size?: number;
} & Omit<ComponentPropsWithoutRef<"svg">, "children">;

export default function Icon({
  name,
  size = 32,
  viewBox = "0 0 32 32",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
