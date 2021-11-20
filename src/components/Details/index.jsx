import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import {
  useGetPostQuery,
  useDeletePostMutation,
} from "./../../services/postsApi";
import capitalize from "../utils/capitalize";
import Spinner from "./../utils/Spinner";

export default function Details() {
  const history = useHistory();
  const { id } = useParams();
  const { data, isLoading } = useGetPostQuery(id);
  const [deletePost, { isSuccess, isLoading: isDeleting }] =
    useDeletePostMutation();

  const handleDeletePost = () => {
    deletePost(data.id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Post deleted successfully");
      history.push("/");
    }
  }, [isSuccess, history]);

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
        <button
          className={`btn btn-danger btn-sm ${isDeleting && "disabled"}`}
          onClick={handleDeletePost}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
