"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <h2>Error while loading</h2>
      <p>{error.message}</p>
      <button onClick={reset} type="button">
        Try Again
      </button>
    </div>
  );
};

export default Error;
