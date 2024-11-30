"use client";

export interface ErrorComponentsProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentsProps) {
  return (
    <div>
      <p>{`Someting went wrong. ${error.message}`}</p>
      <button onClick={() => reset()}>Try Gain</button>
    </div>
  );
}
