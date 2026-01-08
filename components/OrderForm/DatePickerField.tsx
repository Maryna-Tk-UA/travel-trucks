"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField } from "formik";
import { format, parseISO, startOfDay } from "date-fns";

type Props = {
  name: string;
  placeholder?: string;
  inputClassName?: string;
  calendarClassName?: string;
  popperClassName?: string;
  dateFormat?: string;
  minDate?: Date;
};

const DatePickerField = ({
  name,
  placeholder = "Select date",
  inputClassName,
  calendarClassName,
  popperClassName,
  dateFormat = "dd.MM.yyyy",
  minDate,
}: Props) => {
  const [field, meta, helpers] = useField<string>(name);

  const selected = field.value ? parseISO(field.value) : null;

  const today = startOfDay(new Date());

  return (
    <div>
      <DatePicker
        selected={selected}
        onChange={(d: Date | null) => {
          const next = d ? format(d, "yyyy-MM-dd") : "";
          helpers.setValue(next);
        }}
        onBlur={() => helpers.setTouched(true)}
        placeholderText={placeholder}
        dateFormat={dateFormat}
        className={inputClassName}
        calendarClassName={calendarClassName}
        popperClassName={popperClassName}
        showPopperArrow={false}
        minDate={minDate ?? today}
      />

      {meta.touched && meta.error ? (
        <p className="formikError">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default DatePickerField;
