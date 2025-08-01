import { useNavigate } from "react-router-dom";

const blogs = [

  {
    id: 1,
    title: "Understanding React Lifecycle",
    category: "React",
    date: "2025-08-01",
    summary:
      "An in-depth guide to React component lifecycle methods and hooks.",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    category: "CSS",
    date: "2025-07-28",
    summary: "Best practices and tips for using Tailwind in large-scale apps.",
  },
];
export default function RecentBlogs() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black max-w-5xl mx-auto px-6 py-6">
      <h2 className="font-bold text-4xl mb-10">Recent Blogs</h2>

      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 p-8 rounded-md shadow-sm cursor-pointer">
              <p className="text-lg font-semibold text-gray-900">
                {blog.title}
              </p>
              {/* <span className="text-gray-500 text-sm">{blog.date}</span> */}
              <p className="text-sm text-gray-500 mb-2">
                {blog.category} • {blog.date}
              </p>
              <p className="text-gray-700 text-sm">{blog.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/blogpage")}
          className="text-base font-semibold text-gray-700 hover:text-black transition-all flex items-center gap-2 mx-auto cursor-pointer"
        >
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
