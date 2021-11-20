import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetPostQuery } from "./../../services/postsApi";
import capitalize from "../utils/capitalize";
import Spinner from "./../utils/Spinner";

export default function Details() {
  const { id } = useParams();
  const { data, isLoading } = useGetPostQuery(id);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center m-5">
        <Spinner size="5" />
      </div>
    );
  }

  return (
    <div className="card bg-light my-5  px-0 col-md-5 mx-4 mx-sm-auto">
      <div className="card-header d-flex justify-content-between">
        <strong>{capitalize(data.title)}</strong>
        <span className="badge bg-info mb-auto">#{id}</span>
      </div>
      <div className="card-body">
        <p className="card-text">{capitalize(data.body)}</p>
      </div>
      <figcaption className="blockquote-footer text-end m-3">
        Created by <cite title="Source Title">User #{data.userId}</cite>
      </figcaption>
      <div className="cad-footer btn-group">
        <Link to={`/edit/${id}`} className="btn btn-info btn-sm">
          Edit
        </Link>
        <button className="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  );
}
