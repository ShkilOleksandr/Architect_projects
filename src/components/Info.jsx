import React from "react";
import { MailIcon } from "@heroicons/react/solid";


import MailTo from "./MailTo";

export default function Info() {
  return (
    <>

      <section className="section-info">

        <button
          className="btn"
          onClick={() => window.open("https://iamteri.tech/")}
        >
          Know more
        </button>
        <div className="contact">
          <MailTo
            email="teyenike1@gmail.com"
            subject="Let's Talk"
            body="Hey, teri!"
            className="mailto"
          >
            <MailIcon className="icon" />
            <span>Email</span>
          </MailTo>
          <a
            href="https://linkedin.com/in/terieyenike"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-[#0077b5] hover:brightness-110"
          >
            <svg
              className="icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5714 2H3.42411C2.63839 2 2 2.64732 2 3.44196V20.558C2 21.3527 2.63839 22 3.42411 22H20.5714C21.3571 22 22 21.3527 22 20.558V3.44196C22 2.64732 21.3571 2 20.5714 2ZM8.04464 19.1429H5.08036V9.59821H8.04911V19.1429H8.04464ZM6.5625 8.29464C5.61161 8.29464 4.84375 7.52232 4.84375 6.57589C4.84375 5.62946 5.61161 4.85714 6.5625 4.85714C7.50893 4.85714 8.28125 5.62946 8.28125 6.57589C8.28125 7.52679 7.51339 8.29464 6.5625 8.29464ZM19.1562 19.1429H16.192V14.5C16.192 13.3929 16.1696 11.9688 14.6518 11.9688C13.1071 11.9688 12.8705 13.1741 12.8705 14.4196V19.1429H9.90625V9.59821H12.75V10.9018H12.7902C13.1875 10.1518 14.1563 9.36161 15.5982 9.36161C18.5982 9.36161 19.1562 11.3393 19.1562 13.9107V19.1429Z"
                fill="white"
              />
            </svg>

            <span>Linkedin</span>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-instagram hover:brightness-110"
          >
            <svg
              className="icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM18 5.5C18.55 5.5 19 5.95 19 6.5C19 7.05 18.55 7.5 18 7.5C17.45 7.5 17 7.05 17 6.5C17 5.95 17.45 5.5 18 5.5Z"
                fill="white"
              />
            </svg>
            <span>Instagram</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-[#3b5999] hover:brightness-110"
          >
            <svg
              className="icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.022 5.657 21.128 10.438 21.878V14.89H7.898V12H10.438V9.797C10.438 7.29 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.19C13.946 8.562 13.562 9.323 13.562 10.108V12H16.344L15.902 14.89H13.562V21.878C18.343 21.128 22 17.022 22 12Z"
                fill="white"
              />
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </section>
    </>
  );
}
