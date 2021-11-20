import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import EditForm from "./EditForm";
import Spinner from "../utils/Spinner";

import {
  useGetPostQuery,
  useEditPostMutation,
} from "./../../services/postsApi";

export default function Edit() {
  const history = useHistory();
  const { id } = useParams();
  const { data, isLoading } = useGetPostQuery(id);
  const [updatePost, { isLoading: isSaving, isSuccess }] =
    useEditPostMutation();

  const handleSave = (_post) => {
    updatePost(_post);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Post edited successfully");
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
    <div className="container d-flex justify-content-center row mx-auto mt-5">
      <EditForm
        previousPost={data}
        handleSubmit={handleSave}
        isLoading={isSaving}
      />
    </div>
  );
}
