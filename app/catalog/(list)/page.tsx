import CatalogLoadMore from "@/components/CatalogLoadMore/CatalogLoadMore";
import { getCampers } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog | TravelTrucks",
  description:
    "Browse campers for rent and filter by location, vehicle type, and amenities like AC, kitchen, and more.",
};

const Catalog = async () => {
  const response = await getCampers();

  return (
    <section>
      <CatalogLoadMore initialItems={response.items} total={response.total} />
    </section>
  );
};

export default Catalog;
