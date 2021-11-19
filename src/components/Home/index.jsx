import React from "react";
import { useGetPostsQuery } from "./../../services/postsApi";

export default function Home() {
  const { data = [], isLoading, isSuccess } = useGetPostsQuery();
  console.log(data[0]);
  return (
    <>
      <div>Home</div>
      {isLoading && <div>Loading...</div>}
      {isSuccess && data && data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
}
