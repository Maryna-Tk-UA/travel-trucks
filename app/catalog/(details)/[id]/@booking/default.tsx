import css from "../Camper.module.css";

const CamperBooking = async () => {
  return (
    <div className={css.bookingCard}>
      <h3 className={css.bookingTitle}>Book your campervan now</h3>
      <p className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.bookingForm} action="#" method="post">
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name*"
        />
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email*"
        />
        <input
          className={css.input}
          type="text"
          name="date"
          placeholder="Booking date*"
        />

        <textarea
          className={css.textarea}
          name="comment"
          placeholder="Comment"
          rows={4}
        />

        <button className={css.sendBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default CamperBooking;
