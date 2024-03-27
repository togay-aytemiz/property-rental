"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [inputfield, setInputfield] = useState("");

  return (
    <div>
      <section className="bg-blue-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Find The Perfect Rental
            </h1>
            <p className="my-4 text-xl text-white">
              Discover the perfect property that suits your needs.
            </p>
          </div>

          <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center gap-1">
            <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Search..."
                className="w-full px-4 py-3.5 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
                value={inputfield}
                onChange={(e) => setInputfield(e.target.value)}
              />
            </div>

            <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="startDate" className="sr-only">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="startDate" className="sr-only">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className=" mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Search
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Hero;
