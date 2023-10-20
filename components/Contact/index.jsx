'use client';
import React from 'react';
import { useThemeContext } from '@/hooks/useThemeContext';

export const Contact = () => {
  const { bgColor, bgHover } = useThemeContext();
  return (
    <section className="py-52 flex justify-center">
      <form className="w-1/2">
        <div className="mb-6">
          <label
            htmlFor="full_name"
            className="block mb-2 text-base font-medium text-white"
          >
            What's your name?
          </label>
          <input
            type="text"
            id="full_name"
            className="border text-lg rounded-lg block w-full p-2.5 bg-zinc-900 border-zinc-700 placeholder-zinc-500 text-white focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600"
            placeholder="Jason Response"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Type your email
          </label>
          <input
            type="email"
            id="email"
            className="border text-lg rounded-lg block focus:outline-none w-full p-2.5 bg-zinc-900 border-zinc-700 placeholder-zinc-500 text-white focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600"
            placeholder="jason.res@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-base font-medium text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="resize-none p-2.5 text-white focus:outline-none rounded-lg text-lg w-full border bg-zinc-900 border-zinc-700 placeholder-zinc-500 focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-base w-full sm:w-auto px-3 py-1 text-center ${bgColor} ${bgHover} focus:ring-blue-800`}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
