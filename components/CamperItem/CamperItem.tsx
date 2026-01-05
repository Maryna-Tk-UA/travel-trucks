import { Camper } from "@/types/camper";
import Link from "next/link";

type CamperItemProps = {
  item: Camper;
};

const CamperItem = ({ item }: CamperItemProps) => {
  return (
    <li>
      <Link href={`/catalog/${item.id}`}>{item.name}</Link>
    </li>
  );
};

export default CamperItem;
