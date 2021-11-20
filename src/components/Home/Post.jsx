import React from "react";

export default function Post({ post }) {
  const { title, body } = post;
  //capitalize first letter of title
  const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);
  //capitalize first letter of body
  const bodyCapitalized = body.charAt(0).toUpperCase() + body.slice(1);

  return (
    <div className="card bg-light mb-3">
      <div className="card-header">{titleCapitalized}</div>
      <div className="card-body">
        <p className="card-text">{bodyCapitalized}</p>
      </div>
    </div>
  );
}
