import React from "react";

export default function Spinner() {
  return (
    <div className="spinner-border spinner-border-sm text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
