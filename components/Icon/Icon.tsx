import type { ComponentPropsWithoutRef } from "react";

type IconProps = {
  name: string;
  size?: number;
} & Omit<ComponentPropsWithoutRef<"svg">, "children">;

export default function Icon({ name, size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
