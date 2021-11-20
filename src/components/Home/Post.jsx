import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import capitalize from "../utils/capitalize";
import { useDeletePostMutation } from "../../services/postsApi";
import toast from "react-hot-toast";

export default function Post({ post }) {
  const [deletePost, { isSuccess, isLoading }] = useDeletePostMutation();
  const { title, body, id } = post;

  const handleDeletePost = () => {
    deletePost(id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Post deleted successfully");
    }
  }, [isSuccess]);

  if (isSuccess) {
    return <></>;
  }

  return (
    <div className="card bg-light mb-3 px-0 col-md-5 mx-auto">
      <div className="card-header d-flex justify-content-between">
        <strong>{capitalize(title)}</strong>
        <span className="badge bg-info mb-auto">#{id}</span>
      </div>
      <div className="card-body">
        <p className="card-text">{capitalize(body)}</p>
      </div>
      <div className="cad-footer btn-group">
        <Link to={`/details/${id}`} className="btn btn-success btn-sm">
          View more
        </Link>
        <Link to={`/edit/${id}`} className="btn btn-info btn-sm">
          Edit
        </Link>
        <button
          className={`btn btn-danger btn-sm ${isLoading && "disabled"}`}
          onClick={handleDeletePost}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
