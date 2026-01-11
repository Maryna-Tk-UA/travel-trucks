import CamperTabs from "@/components/CamperTabs/CamperTabs";
import CamperDetailsClient from "./CamperDetails.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { prefetchCamper } from "./prefetch";
import { getSingleCamper } from "@/lib/api";
import css from "./Camper.module.css";
import { CamperLayoutProps, CamperPageProps } from "@/types/props";
import "react-datepicker/dist/react-datepicker.css";
import ScrollToTopOnPathname from "@/components/ScrollToTopOnPathname/ScrollToTopOnPathname";

export async function generateMetadata({ params }: CamperPageProps) {
  const { id } = await params;
  const camper = await getSingleCamper(id);

  const description =
    camper.description?.replace(/\s+/g, " ").trim().slice(0, 160) ||
    "View camper details, features, and reviews on TravelTrucks.";

  return {
    title: `${camper.name} | TravelTrucks`,
    description,
    openGraph: {
      title: `${camper.name} | TravelTrucks`,
      description,
      images: camper.gallery?.[0]?.original ? [camper.gallery[0].original] : [],
    },
  };
}

const CamperLayout = async ({
  params,
  children,
  booking,
}: CamperLayoutProps) => {
  const { id } = await params;

  const queryClient = new QueryClient();
  await prefetchCamper(queryClient, id);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ScrollToTopOnPathname />
      <section
        className={css.sectionCamper}
        aria-labelledby="camper-details-title"
      >
        <h2 id="camper-details-title" className="visuallyhidden">
          Camper details
        </h2>
        <CamperDetailsClient id={id} />

        <CamperTabs id={id} />

        <div className={css.shell}>
          <div className={css.content}>{children}</div>
          <aside className={css.aside}>{booking}</aside>
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default CamperLayout;
