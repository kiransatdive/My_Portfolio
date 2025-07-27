import React from "react";

const blogs = [
  {
    title:
      "Ace the Javascript Interview - Practical questions to help you clear your next interview",
    views: "17,756 views",
  },
  {
    title: "Free portfolio website template that gets you hired in 2021",
    views: "6,039 views",
  },
];

export default function RecentBlogs() {
  return (
    <div className="bg-white text-black max-w-5xl mx-auto px-6 py-6">
      <h2 className="font-bold text-4xl mb-10">Recent Blogs</h2>

      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 p-6 rounded-md shadow-sm cursor-pointer">
              <p className="text-lg font-semibold text-gray-900">
                {blog.title}
              </p>
              <span className="text-gray-500 text-sm">{blog.views}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="text-base font-semibold text-gray-700 hover:text-black transition-all flex items-center gap-2 mx-auto cursor-pointer">
          See All Blogs
          <img
            src="/arrow.png"
            alt="Arrow"
            className="w-4 h-4 transform rotate-90"
          />
        </button>
      </div>
    </div>
  );
}
