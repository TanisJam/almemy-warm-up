import React from "react";

export default function Spinner({ size = false }) {
  const styles = {
    width: size ? `${size}rem` : "",
    height: size ? `${size}rem` : "",
  };
  return (
    <div
      className="spinner-border spinner-border-sm text-danger mx-auto"
      role="status"
      style={styles}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
