import React from "react";

export default function BlogItem({ blog }) {
  return (
    <>
    
    <div className="bg-gray-100 hover:bg-gray-200 rounded-md p-8 shadow-sm border border-gray-200  transition-all duration-300 cursor-pointer">
        
      <h2 className="text-lg font-semibold text-gray-900">{blog.title}</h2>
      <p className="text-sm text-gray-500 mb-3">
        {blog.category} • {blog.date}
      </p>
      <p className="text-gray-700 text-sm">{blog.summary}</p>
    </div>
    </>
  );
}
