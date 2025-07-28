import React, { useState } from "react";

const changelog = [
  {
    year: "2025",
    updates: [
      {
        title: "Building Infinity AI Product 🤖",
        description:
          "Started developing 'Infinity AI' — a smart assistant platform integrating AI agents for real-time automation and user support. Focused on n8n workflows, OpenAI APIs, and React for interactive UI components.",
      },
      {
        title: "Completed Internship as Java Full Stack Developer & Course",
        description:
          "Successfully completed an internship and training as a Java Full Stack Developer. Gained hands-on experience in building full-stack applications using Java, Spring Boot, Hibernate, SQL on the backend and Angular with Tailwind CSS on the frontend. This experience significantly boosted my technical and collaborative skills.",
      },
    ],
  },
  {
    year: "2024",
    updates: [
      {
        title: "Completed Graduation 2020-24 🎓",
        description:
          "Sinhgad Academy of Engineering, Pune. Bachelor of Engineering in Information Technology – GPA: 8.29.",
      },
    ],
  },
  {
    year: "2023",
    updates: [
      {
        title: "Started Preparing for Placement 🤩",
        description:
          "The journey started with LeetCode marathons, long nights debugging code, and balancing between academics and placement prep. It built my confidence and skills every single day.",
      },
      {
        title: "MERN Stack Learning 🚀",
        description:
          "Learned the MERN stack (MongoDB, Express.js, React.js, Node.js) to build full-stack apps. Gained hands-on experience with REST APIs, auth, and deployment.",
      },
      {
        title: "Interview Preparations 🌟",
        description:
          "Focused on solving DSA problems, system design, and resume building. Practiced mock interviews and reviewed company-specific questions.",
      },
    ],
  },
];

const extraContent = [
  {
    year: "2020",
    updates: [
      {
        title: "Completed 12th Grade 🎓",
        description:
          "Passed from Navjeevan Vidyalaya, Dahigaon-Ne (Tal: Shevgaon, Dist: Ahmednagar) with an overall score of 72.31%. Successfully completed coursework in the Science stream with a focus on Physics, Chemistry, and Biology.",
      },
      {
        title: "JEE Mains 2020 🚀",
        description:
          "Appeared for the Joint Entrance Examination (JEE) Mains 2020 and secured a percentile of 72.71. This experience sparked my interest in engineering and helped me understand the fundamentals of competitive exams.",
      },
      {
        title: "Top Scorer in Biology 🌿",
        description:
          "Achieved a remarkable score of 89/100 in Biology in the Higher Secondary Examination, reflecting my strong understanding of life sciences and consistent academic effort.",
      },
    ],
  },
  {
  year: "2018",
  updates: [
    {
      title: "Completed 10th Grade 📘",
      description:
        "Passed the SSC (10th) board examination with a score of 84.60%. This strong academic foundation built my confidence and laid the groundwork for choosing the Science stream in higher education.",
    },
   
  ],
}

];

export default function Changelog() {
  const [showMore, setShowMore] = useState(false);

  const renderUpdates = (data) =>
    data.map((entry, idx) => (
      <div key={idx} className="mb-10">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          {entry.year}
        </h2>
        <div className="space-y-6">
          {entry.updates.map((update, i) => (
            <div key={i} className="flex items-start gap-3">
              <img src="/tick.jpg" alt="tick" className="w-5 h-5 mt-1" />
              <div>
                <p className="font-bold text-lg text-black">{update.title}</p>
                <p className="text-gray-600 font-medium">
                  {update.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {idx !== data.length - 1 && <hr className="my-6 border-gray-200" />}
      </div>
    ));

  return (
    <div className="bg-white text-black max-w-5xl mx-auto px-6 py-6">
      <h1 className="text-4xl font-bold mb-10">Life Changelog and Updates</h1>

      {renderUpdates(changelog)}

      {showMore && renderUpdates(extraContent)}

      <div className="text-center mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-base font-semibold text-gray-700 hover:text-black transition-all flex items-center gap-2 mx-auto cursor-pointer"
        >
          {showMore ? "See Less" : "See More"}
          <img
            src="/arrow.png"
            alt="Arrow"
            className={`w-4 h-4 transform transition-transform duration-200 ${
              showMore ? "rotate-270" : "rotate-90"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
