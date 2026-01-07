import type { Camper } from "@/types/camper";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

type CamperListProps = {
  campers: Camper[];
};

const CamperList = ({ campers }: CamperListProps) => {
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.item}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
