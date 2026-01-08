"use client";

import { useEffect, useRef } from "react";
import { useFormikContext } from "formik";

type Props<T extends Record<string, unknown>> = {
  onChange: (values: T) => void;
  delay?: number;
};

const FormDraftSync = <T extends Record<string, unknown>>({
  onChange,
  delay = 250,
}: Props<T>) => {
  const { values } = useFormikContext<T>();
  const timerId = useRef<number | null>(null);

  useEffect(() => {
    if (timerId.current !== null) window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(() => {
      onChange(values);
    }, delay);

    return () => {
      if (timerId.current !== null) window.clearTimeout(timerId.current);
    };
  }, [values, onChange, delay]);

  return null;
};

export default FormDraftSync;
