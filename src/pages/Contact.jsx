import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [email, setEmail] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: "kiransatdive0076@gmail.com", // your email
      from_email: email,
    };

    emailjs
      .send(
        "service_3eb7z7b", // e.g., service_xxxx
        "template_rwbk6bl", // e.g., template_yyyy
        templateParams,
        "5aiSk_1sX1vMMMElt" // public key
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setEmail("");
        },
        (error) => {
          alert("Failed to send email. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-white text-black max-w-5xl mx-auto px-6 py-6">
      <div className="w-full p-10 sm:p-12 bg-blue-50 rounded-md shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Want to hire me as a freelancer? Let's discuss.
        </h2>
        <p className="text-gray-700 font-medium mb-4">
          Drop your message and let's talk about your project!
        </p>

        <a
          href="https://wa.me/7057882612"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-white font-semibold bg-green-500 hover:bg-green-600 rounded-md transition mb-6"
        >
          Chat on WhatsApp
        </a>

        <hr className="mb-6 border-gray-300" />

        <p className="text-gray-700 font-medium mb-2">
          Drop your email, and I’ll get back to you:
        </p>

        <div>
          <form
            onSubmit={handleSend}
            className="flex flex-col sm:flex-row  gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="kiransatdive0076@gmail.com"
              required
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gray-100 text-gray-800 font-semibold border border-gray-300 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-gray-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
