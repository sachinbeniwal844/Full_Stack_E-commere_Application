import React from "react";
import banner from "../../public/Banner2.jpg"

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-10 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>{" "}
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>

            <label className="input validator w-full border-gray-200 outline-none dark:bg-slate-900 dark:text-white">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" className="dark:bg-slate-900 dark:text-white  dark:placeholder:text-gray-300" required />
            </label>
          </div>
          <button className="btn btn-secondary my-6 ">Get Started</button>
        </div>

        <div className="w-full md:w-1/2 order-1">
        <img src={banner} className="md:w-[550px] md:h-[460px] md:ml-12" alt="book image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
