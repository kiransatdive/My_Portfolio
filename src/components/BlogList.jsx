import React from "react";
import BlogItem from "./BlogItem";

export default function BlogList({ blogs }) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
}
