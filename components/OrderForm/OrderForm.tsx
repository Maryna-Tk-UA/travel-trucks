"use client";

import css from "./OrderForm.module.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import DatePickerField from "./DatePickerField";
import {
  initialData,
  NewBookingData,
  useBookingDraftStore,
} from "@/lib/store/useBookingDraftStore";
import FormDraftSync from "../FormDraftSync/FormDraftSync";

type Values = {
  name: string;
  email: string;
  date: string;
  comment: string;
};

const BookingSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Min 2 symbols")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.string().required("Booking date is required"),
  comment: Yup.string().max(300, "Max 300 symbols"),
});

const OrderForm = () => {
  const draft = useBookingDraftStore((s) => s.draft);
  const setDraft = useBookingDraftStore((s) => s.setDraft);
  const clearDraft = useBookingDraftStore((s) => s.clearDraft);
  const hasHydrated = useBookingDraftStore((s) => s.hasHydrated);

  const handleSubmit = async (
    values: NewBookingData,
    actions: FormikHelpers<Values>
  ) => {
    try {
      toast.success("Booking request sent successfully!");
      clearDraft();
      actions.resetForm({ values: initialData });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!hasHydrated) return null;

  return (
    <Formik
      initialValues={draft}
      validationSchema={BookingSchema}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.bookingForm} action="#" method="post">
          <FormDraftSync<NewBookingData>
            onChange={(values) => setDraft(values)}
            delay={250}
          />
          <div className={css.field}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name*"
              autoComplete="name"
            />
            <ErrorMessage name="name" component="p" className={css.error} />
          </div>

          <div className={css.field}>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email*"
              autoComplete="email"
            />
            <ErrorMessage name="email" component="p" className={css.error} />
          </div>

          <div className={`${css.field} ${css.dateWrap}`}>
            <DatePickerField
              name="date"
              placeholder="Booking date*"
              inputClassName={css.input}
              calendarClassName={css.dp}
              popperClassName={css.popper}
              minDate={new Date()}
            />
          </div>

          <div className={css.field}>
            <Field
              className={css.textarea}
              as="textarea"
              name="comment"
              placeholder="Comment"
              rows={4}
            />
            <ErrorMessage name="comment" component="p" className={css.error} />
          </div>

          <button className={css.sendBtn} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
