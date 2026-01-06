import type { Camper } from "@/types/camper";
import Link from "next/link";

type CamperListProps = {
  campers: Camper[];
};

const CamperList = ({ campers }: CamperListProps) => {
  return (
    <ul>
      {campers.map((item) => (
        <li key={item.id}>
          <Link href={`/catalog/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
