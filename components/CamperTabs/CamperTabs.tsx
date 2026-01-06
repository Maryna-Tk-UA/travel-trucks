import Link from "next/link";

type CamperTabsProps = {
  id: string;
};

const CamperTabs = ({ id }: CamperTabsProps) => {
  return (
    <nav>
      <Link href={`/catalog/${id}/features`}>Features</Link>
      <Link href={`/catalog/${id}/reviews`}>Reviews</Link>
    </nav>
  );
};

export default CamperTabs;
