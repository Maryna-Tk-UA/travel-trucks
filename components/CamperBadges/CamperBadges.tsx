import type { Camper } from "@/types/camper";
import css from "./CamperBadges.module.css";
import { CamperBadgesProps } from "@/types/props";

type Badge = {
  label: string;
  iconId?: string;
};

const SPRITE_PATH = "/icons/sprite.svg";

const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

const buildBadges = (camper: Camper): Badge[] => {
  const badges: Badge[] = [];

  if (camper.transmission) {
    badges.push({
      label: cap(camper.transmission),
      iconId: "icon-diagram",
    });
  }

  if (camper.engine) {
    badges.push({
      label: cap(camper.engine),
      iconId: "icon-fuel-pump",
    });
  }

  if (camper.AC) {
    badges.push({
      label: "AC",
      iconId: "icon-wind",
    });
  }

  if (camper.kitchen) {
    badges.push({
      label: "Kitchen",
      iconId: "icon-cup-hot",
    });
  }

  if (camper.bathroom) {
    badges.push({
      label: "Bathroom",
      iconId: "icon-ph_shower",
    });
  }

  if (camper.TV) {
    badges.push({
      label: "TV",
      iconId: "icon-tv",
    });
  }

  if (camper.refrigerator) {
    badges.push({
      label: "Refrigerator",
      iconId: "icon-solar_fridge-outline",
    });
  }

  if (camper.microwave) {
    badges.push({
      label: "Microwave",
      iconId: "icon-lucide_microwave",
    });
  }

  if (camper.gas) {
    badges.push({
      label: "Gas",
      iconId: "icon-hugeicons_gas-stove",
    });
  }

  if (camper.water) {
    badges.push({
      label: "Water",
      iconId: "icon-ion_water-outline",
    });
  }

  if (camper.radio) {
    badges.push({
      label: "Radio",
      iconId: "icon-ui-radios",
    });
  }

  return badges;
};

const CamperBadges = ({ camper }: CamperBadgesProps) => {
  const badges = buildBadges(camper).slice(0);

  return (
    <ul className={css.list}>
      {badges.map((b) => (
        <li key={b.label} className={css.item}>
          {b.iconId ? (
            <svg className={css.icon} aria-hidden="true">
              <use href={`${SPRITE_PATH}#${b.iconId}`} />
            </svg>
          ) : null}
          <span className={css.label}>{b.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default CamperBadges;
