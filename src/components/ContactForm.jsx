import React from "react";

const ContactForm = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:rounded-lg flex flex-col items-center text-center">
      {/* Contact Information */}
      <div className="mb-6">
        <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
          Get in touch
        </h1>
        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
          Fill in the form to start a conversation
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
        <div className="flex items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div className="ml-4 text-md tracking-wide font-semibold">
            +91 8384837327
          </div>
        </div>

        <div className="flex items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div className="ml-4 text-md tracking-wide font-semibold">
            arjunvats3042@gmail.com
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form
        method="post"
        className="p-6 flex flex-col justify-center w-full max-w-md"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="hidden">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="email" className="hidden">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="message" className="hidden">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-32 bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-400 transition ease-in-out duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
