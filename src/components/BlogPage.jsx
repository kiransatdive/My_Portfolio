import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  { title: "Understanding React Hooks", slug: "blog1" },
  { title: "Mastering Async JavaScript", slug: "blog2" },
];

export default function BlogList() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link
              to={`/blog/${blog.slug}`}
              className="text-blue-600 hover:underline text-xl"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
