'use client';
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useThemeContext } from '@/hooks/useThemeContext';

export const Contact = () => {
  const { bgColor, bgHover } = useThemeContext();
  const [state, handleSubmit] = useForm('xbjvjnkz');
  const [renderSucceded, setRenderSucceded] = useState(false);

  const displaySuccededMsg = () => {
    return (
      <p className="md:mr-5 flex items-center tracking-wider">
        Thank u, I'll be in touch ASAP!
      </p>
    );
  };

  useEffect(() => {
    if (state.succeeded) {
      setRenderSucceded(true);
      setTimeout(() => {
        setRenderSucceded(false);
      }, '5000');
    }
  }, [state]);

  return (
    <section className="py-52 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full md:w-1/2">
        <div className="mb-6">
          <label
            htmlFor="full_name"
            className="block mb-2 text-sm md:text-base font-medium text-white"
          >
            What's your name?
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            className="border md:text-lg rounded-lg block w-full p-2.5 bg-zinc-900 border-zinc-700 placeholder-zinc-500 text-white focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600"
            placeholder="Jason Response"
            required
          />
          <ValidationError
            prefix="Full Name"
            field="full_name"
            errors={state.errors}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white"
          >
            Type your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border md:text-lg rounded-lg block focus:outline-none w-full p-2.5 bg-zinc-900 border-zinc-700 placeholder-zinc-500 text-white focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600"
            placeholder="jason.res@company.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm md:text-base font-medium text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="resize-none md:text-lg p-2.5 text-white focus:outline-none rounded-lg w-full border bg-zinc-900 border-zinc-700 placeholder-zinc-500 focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600"
            placeholder="Write your thoughts here..."
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="w-full flex justify-end">
          {renderSucceded && displaySuccededMsg()}
          <button
            type="submit"
            className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-base w-full sm:w-auto py-3 md:px-3 md:py-1 text-center ${bgColor} ${bgHover} focus:ring-blue-800`}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
