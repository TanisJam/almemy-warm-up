import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAddNewPostMutation } from "../../services/postsApi";
import AddForm from "./AddForm";
import toast from "react-hot-toast";

export default function Add() {
  const [addNewPost, { isLoading, isSuccess }] = useAddNewPostMutation();
  const history = useHistory();

  const handleSubmit = (_post) => {
    addNewPost(_post);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Post added successfully");
      history.push("/");
    }
  }, [isSuccess, history]);

  return (
    <>
      <AddForm handleSubmit={handleSubmit} isLoading={isLoading} />
    </>
  );
}
