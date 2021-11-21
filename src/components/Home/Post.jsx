import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import capitalize from "../utils/capitalize";
import { useDeletePostMutation } from "../../services/postsApi";
import toast from "react-hot-toast";

export default function Post({ post }) {
  const [deletePost, { isSuccess, isLoading }] = useDeletePostMutation();
  const { title, id } = post;

  const handleDeletePost = () => {
    window.confirm("Are you sure you want to delete this post?") &&
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
    <tr>
      <th>{capitalize(title.slice(0, 20))}...</th>
      <td className="align-middle">{id}</td>
      <td className="align-middle">
        <div className="btn-group align-center">
          <Link to={`/details/${id}`} className="btn btn-success btn-sm">
            More
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
      </td>
    </tr>
  );
}
