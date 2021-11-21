import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router";
import toast from "react-hot-toast";
import Spinner from "../utils/Spinner";
import ErrorMsg from "../utils/ErrorMsg";
import { useCheckPostIdMutation } from "./../../services/postsApi";

export default function EditById() {
  const history = useHistory();
  const [checkPostId, { isLoading, isSuccess, data, error }] =
    useCheckPostIdMutation();

  const validate = (values) => {
    const errors = {};
    if (!values.id) {
      errors.id = "Please provide the ID";
    }
    return errors;
  };

  useEffect(() => {
    if (isSuccess && data) {
      toast.success("Post found!");
      history.push(`/edit/${data.id}`);
    }
  }, [isSuccess, data, history]);

  useEffect(() => {
    if (error) {
      toast.error("Post not found");
      console.log("error");
    }
  }, [error]);

  const handleSubmit = (values, { resetForm }) => {
    checkPostId(values.id);
    resetForm();
  };
  return (
    <div className="container d-flex justify-content-center row mx-auto mt-5">
      <Formik
        initialValues={{ id: "" }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ errors, touched }) => (
          <Form
            className="card bg-light text-center px-0 col-sm-4"
            style={{ maxWidth: "40rem" }}
          >
            <div className="form-group card-header pt-3 pb-4">
              <label htmlFor="title">Find by ID</label>
              <Field
                name="id"
                type="number"
                className={`form-control ${
                  errors.id && touched.id && "is-invalid"
                }`}
              />
              <ErrorMessage name="id" component={ErrorMsg} />
            </div>

            <div className="btn-group d-flex mx-auto py-3">
              <button
                type="submit"
                className={`btn btn-info ${isLoading && "disabled"}`}
              >
                {isLoading ? <Spinner /> : "Search end edit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
