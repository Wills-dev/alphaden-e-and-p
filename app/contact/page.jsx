import Contact from "@components/Contact";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {" "}
      <section className="main-title-ctn">
        <div className="container">
          <div className="main-title">
            <h1>Contact</h1>
            <h5>
              <Link href="/">Home</Link>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>{" "}
              Contact
            </h5>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default page;
