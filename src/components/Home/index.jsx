import React, { useState } from "react";
import { useGetPostsQuery } from "./../../services/postsApi";
import Post from "./Post";
import Spinner from "./../utils/Spinner";
import Pagination from "./Pagination";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data = [], isLoading, isFetching } = useGetPostsQuery(page);
  const handlePagination = (_page) => {
    if (_page < 1 || _page > 10) return;
    setPage(_page);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center m-5">
        <Spinner size="5" />
      </div>
    );
  }

  if (data.length < 1) {
    return <div>No posts :(</div>;
  }

  return (
    <div className="container my-3">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination handlePagination={handlePagination} page={page} />
    </div>
  );
}
