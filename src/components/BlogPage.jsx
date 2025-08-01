import React, { useState } from "react";
import { blogs as blogData } from "../data/data";
import BlogList from "./BlogList";

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-white text-black max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8">
        I've been programming for almost 4 years now. Throughout this journey,
        I’ve explored a variety of technologies. Here, I share my learnings,
        thoughts, and tips. Use the search box below to filter by category.
      </p>

      {/* Search Bar */}
      <div className="relative w-full mb-10">
        <input
          aria-label="Search articles"
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-3 border text-base border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Blog List */}
      <h2 className="text-4xl font-bold mb-6">All Posts</h2>
      <BlogList blogs={filteredBlogs} />
    </section>
  );
}
