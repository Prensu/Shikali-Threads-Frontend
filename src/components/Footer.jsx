import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="f">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <a
            className="logo text-decoration-none text-dark hover:text-pink-600 transition-colors duration-300"
            href="/"
          >
            <h3 className="fs-5 mb-0 text-2xl">
              {" "}
              {/* Increased font size */}
              Shikali &nbsp;
              <span className="fw-medium text-pink-500 hover:text-pink-700 transition-colors duration-300">
                Threads
              </span>
            </h3>
          </a>

          <p className="w-full sm:w-2/3 text-gray-600">
            Shop with Shikali Threads and experience the convenience of online
            shopping like never before.
          </p>
        </div>

        {/* COMPANY Section */}
        <div>
          <p className="text-xl font-medium mb-5 text-green-600">COMPANY</p>
          <ul className="flex flex-col flex-1 text-gray-600 cursor-pointer">
            <li
              onClick={scrollToTop}
              className="mb-2 transition-all transform hover:translate-x-4 hover:text-green-600"
            >
              Home
            </li>
            <li
              onClick={scrollToTop}
              className="mb-2 transition-all transform hover:translate-x-4 hover:text-green-600"
            >
              About Us
            </li>
            <li
              onClick={scrollToTop}
              className="mb-2 transition-all transform hover:translate-x-4 hover:text-green-600"
            >
              Delivery
            </li>
            <li
              onClick={scrollToTop}
              className="mb-2 transition-all transform hover:translate-x-4 hover:text-green-600"
            >
              Privacy policy
            </li>
          </ul>
        </div>

        {/* GET IN TOUCH Section */}
        <div>
          <p className="text-xl font-medium mb-5 text-purple-600">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col flex-1 text-gray-600">
            <li className="mb-2 hover:text-purple-600 transition-all">
              +977 9869221606
            </li>
            <li className="mb-2 hover:text-purple-600 transition-all">
              ShikaliThreads@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ShikaliThreads.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
