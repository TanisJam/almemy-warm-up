import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Spinner from "./../utils/Spinner";
import ErrorMsg from "./../utils/ErrorMsg";

export default function AddForm({ handleSubmit, isLoading }) {
  const post = {
    title: "",
    body: "",
    userId: 1,
  };
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Please add a title";
    }
    if (!values.body) {
      errors.body = "Please add content to your post";
    }
    return errors;
  };

  return (
    <Formik initialValues={post} onSubmit={handleSubmit} validate={validate}>
      {({ errors, touched }) => (
        <Form
          className="container text-center pt-3"
          style={{ maxWidth: "40rem" }}
        >
          <div className="form-group py-3">
            <label htmlFor="title">Title</label>
            <Field
              name="title"
              type="text"
              className={`form-control ${
                errors.title && touched.title && "is-invalid"
              }`}
            />
            <ErrorMessage name="title" component={ErrorMsg} />
          </div>
          <div className="form-group py-3">
            <label htmlFor="body">Post</label>
            <Field
              name="body"
              as="textarea"
              rows="8"
              className={`form-control ${
                errors.body && touched.body && "is-invalid"
              }`}
            />
            <ErrorMessage name="body" component={ErrorMsg} />
          </div>
          <div className="d-grid mx-auto py-3" style={{ maxWidth: "15rem" }}>
            <button
              type="submit"
              className={`btn btn-primary ${isLoading && "disabled"}`}
            >
              {isLoading ? <Spinner /> : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
