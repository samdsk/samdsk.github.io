/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";

export default function HomeSection() {
  const [sam, setSamState] = useState(false);
  const [k, setKState] = useState(false);

  return (
    <>
      <section
        id="home"
        className="container-h mb-10 w-screen flex flex-row items-center"
      >
        <div className="flex flex-col justify-center mx-auto w-10/12 lg:w-2/3 xl:w-2/4">
          <div className="px-5">
            <div className="my-2 ">
              <h4 className="toUpAnimation anim-delay-200ms text-sm text-gray-200">
                Hello World 🖖, I am
              </h4>
              <h1 className="toUpAnimation anim-delay-500ms text-4xl sm:text-7xl font-sans font-bold w-full">
                <span
                  className="hover:text-accent-400 active"
                  onClick={() => setSamState(!sam)}
                >
                  {sam ? "Sameera" : "Sam."}{" "}
                </span>
                <span
                  className="hover:text-accent-400 active"
                  onClick={() => setKState(!k)}
                >
                  {k ? "Kaluwaduge" : "K."}
                </span>
              </h1>
              <h4 className="toUpAnimation anim-delay-700ms text-2xl md:text-4xl font-bold text-gray-200 w-auto ">
                I love exploring and learning new things.
              </h4>
            </div>
            <div className="toUpAnimation anim-delay-700ms mt-2">
              <p className="w-auto sm:w-3/4 ">
                I’m a software developer from Italy. I’m keen on back-end
                development.
              </p>
            </div>
            <div className="toUpAnimation anim-delay-700ms mt-2">
              <p className="w-auto sm:w-3/4 ">
                When I don’t code I like to hike, stargaze and play video games.
              </p>
            </div>
            <div className="mt-5 toUpAnimation anim-delay-1000ms">
              <h3>
                Here is a list of technologies that I've been working with
                recently:
              </h3>
              <div className="flex flex-row mt-2">
                <ul
                  role="list"
                  className="marker:text-indigo-400 list-outside list-disc ml-10 grid grid-cols-2 max-md:grid-cols-1 gap-x-10"
                >
                  <li className="hover:text-accent-400">Java | Spring<sup>*</sup></li>
                  <li className="hover:text-accent-400">JUnit | Mockito</li>
                  <li className="hover:text-accent-400">C | ASM x64</li>
                  <li className="hover:text-accent-400">
                    PostgresSQL | MongoDB
                  </li>
                  <li className="hover:text-accent-400">Erlang</li>
                  <li className="hover:text-accent-400">Python</li>
                  <li className="hover:text-accent-400">
                    Node JS | Express JS
                  </li>
                  <li className="hover:text-accent-400">
                    NextJS | React | Tailwind
                  </li>
                </ul>
              </div>
                <sub className="text-slate-700">* learning</sub>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
