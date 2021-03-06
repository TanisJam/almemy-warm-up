import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import Spinner from "../utils/Spinner";
import ErrorMsg from "../utils/ErrorMsg";

export default function EditForm({ previousPost, handleSubmit, isLoading }) {
  const { title, body, userId, id } = previousPost;
  const history = useHistory();
  const post = {
    title,
    body,
    userId,
    id,
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

  const handleDiscard = () => {
    history.push("/");
  };

  return (
    <Formik initialValues={post} onSubmit={handleSubmit} validate={validate}>
      {({ errors, touched }) => (
        <Form
          className="card bg-light text-center px-0 col-sm-8"
          style={{ maxWidth: "40rem" }}
        >
          <div className="form-group card-header pt-3 pb-4">
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
          <div className="form-group card-body py-3">
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
          <div className="btn-group d-flex mx-auto py-3">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDiscard}
            >
              Discard
            </button>
            <button
              type="submit"
              className={`btn btn-info ${isLoading && "disabled"}`}
            >
              {isLoading ? <Spinner /> : "Save"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
