import { getSingleCamper } from "@/lib/api";
import { CamperPageProps } from "@/types/props";
import css from "../Camper.module.css";
import CamperBadges from "@/components/CamperBadges/CamperBadges";

const formatForm = (form: string) => {
  const map: Record<string, string> = {
    panelTruck: "Panel truck",
    fullyIntegrated: "Fully integrated",
    alcove: "Alcove",
  };

  return map[form];
};

const FeaturesPage = async ({ params }: CamperPageProps) => {
  const { id } = await params;
  const camper = await getSingleCamper(id);

  return (
    <div className={css.featuresCard}>
      <CamperBadges camper={camper} />

      <h3 className={css.blockTitle}>Vehicle details</h3>

      <dl className={css.details}>
        <div className={css.detailRow}>
          <dt>Form</dt>
          <dd>{formatForm(camper.form)}</dd>
        </div>

        <div className={css.detailRow}>
          <dt>Length</dt>
          <dd>{camper.length}</dd>
        </div>

        <div className={css.detailRow}>
          <dt>Width</dt>
          <dd>{camper.width}</dd>
        </div>

        <div className={css.detailRow}>
          <dt>Height</dt>
          <dd>{camper.height}</dd>
        </div>

        <div className={css.detailRow}>
          <dt>Tank</dt>
          <dd>{camper.tank}</dd>
        </div>

        <div className={css.detailRow}>
          <dt>Consumption</dt>
          <dd>{camper.consumption}</dd>
        </div>
      </dl>
    </div>
  );
};

export default FeaturesPage;
