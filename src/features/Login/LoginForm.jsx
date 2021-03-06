import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "./userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Spinner from "../../components/utils/Spinner";

export default function Login({ onLogin }) {
  const status = useSelector(selectStatus);

  return (
    <div className="mx-auto container text-center mt-5">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onLogin(values);
          setSubmitting(false);
        }}
      >
        {({ values }) => (
          <div className="row mb-5 mx-auto" style={{ maxWidth: "20rem" }}>
            <Form className="form mx-auto form-group">
              <div className="form-group form-floating my-2">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email here..."
                />
                <label htmlFor="emailInput" className="">
                  Email
                </label>
                <ErrorMessage
                  name="email"
                  component="span"
                  className="position-absolute bottom-0 start-50  text-danger badge"
                />
              </div>

              <div className="form-group form-floating my-2">
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password here..."
                  value={values.password}
                />
                <label htmlFor="passwordInput" className="">
                  Password
                </label>
                <ErrorMessage
                  name="password"
                  component="span"
                  className="position-absolute bottom-0 start-50 text-danger badge"
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary p-3"
                  disabled={status !== "idle"}
                >
                  {status !== "idle" ? <Spinner /> : "Login"}
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
