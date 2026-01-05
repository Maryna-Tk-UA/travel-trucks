import CamperList from "@/components/CamperList/CamperList";
import { getCampers } from "@/lib/api";

const Catalog = async () => {
  const response = await getCampers();

  return (
    <section>
      {response?.items?.length > 0 && <CamperList campers={response.items} />}
    </section>
  );
};

export default Catalog;
