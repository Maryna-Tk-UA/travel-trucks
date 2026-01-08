import OrderForm from "@/components/OrderForm/OrderForm";
import css from "../Camper.module.css";

const CamperBooking = async () => {
  return (
    <div className={css.bookingCard}>
      <h3 className={css.bookingTitle}>Book your campervan now</h3>
      <p className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </p>
      <OrderForm />
    </div>
  );
};

export default CamperBooking;
