import React from "react";

export default function ErrorMsg({ children }) {
  return (
    <div className="invalid-feedback position-absolute start-50 translate-middle-x">
      {children}
    </div>
  );
}
