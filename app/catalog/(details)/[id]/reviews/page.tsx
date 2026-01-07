import { CamperPageProps } from "@/types/props";
import css from "../Camper.module.css";
import { getSingleCamper } from "@/lib/api";

const Star = ({ filled }: { filled: boolean }) => (
  <svg className={css.starSvg} aria-hidden="true">
    <use
      href={`/icons/sprite.svg#${filled ? "icon-star-pressed" : "icon-star-default"}`}
    />
  </svg>
);

const renderStars = (value: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    stars.push(<Star key={i} filled={value >= i} />);
  }
  return stars;
};

const ReviewsPage = async ({ params }: CamperPageProps) => {
  const { id } = await params;
  const camper = await getSingleCamper(id);
  console.log(camper);

  const reviews = camper.reviews ?? [];

  if (reviews.length === 0) {
    return <p className={css.emptyReviews}>No reviews yet.</p>;
  }

  return (
    <ul className={css.reviewsList}>
      {reviews.map((r, idx) => {
        const letter = (r.reviewer_name?.trim()?.[0] ?? "?").toUpperCase();

        return (
          <li key={`${r.reviewer_name}-${idx}`} className={css.reviewItem}>
            <div className={css.avatar} aria-hidden="true">
              {letter}
            </div>

            <div className={css.reviewBody}>
              <div className={css.reviewHead}>
                <p className={css.reviewerName}>{r.reviewer_name}</p>
                <div
                  className={css.stars}
                  aria-label={`Rating: ${r.reviewer_rating} out of 5`}
                >
                  {renderStars(r.reviewer_rating)}
                </div>
              </div>

              <p className={css.reviewText}>{r.comment}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsPage;
