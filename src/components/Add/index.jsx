import React from "react";
import { useAddNewPostMutation } from "../../services/postsApi";
import AddForm from "./AddForm";

export default function Add() {
  const [addNewPost, { isLoading, isSuccess, data }] = useAddNewPostMutation();

  const handleSubmit = (_post) => {
    addNewPost(_post);
  };

  return (
    <>
      <AddForm handleSubmit={handleSubmit} isLoading={isLoading} />
      {isSuccess && data && <div>{JSON.stringify(data)}</div>}
    </>
  );
}
