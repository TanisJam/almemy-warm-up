import React from "react";

export default function Error({ children }) {
  console.log(children);
  return <div className="invalid-feedback position-absolute start-50 translate-middle-x">{children}</div>;
}
