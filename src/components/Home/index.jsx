import React, { useState } from "react";
import { useGetPostsQuery } from "./../../services/postsApi";
import Post from "./Post";
import Spinner from "./../utils/Spinner";
import Pagination from "./Pagination";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data = [], isLoading } = useGetPostsQuery(page);
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
    <div className="container mt-1">
      <div className="row mx-2">
        <table
          className="table table-hover table-striped mx-auto"
          style={{ maxWidth: "540px" }}
        >
          <thead>
            <tr className="text-center">
              <th scope="col">Title</th>
              <th scope="col">ID</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination handlePagination={handlePagination} page={page} />
    </div>
  );
}
