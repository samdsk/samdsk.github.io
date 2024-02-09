/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FaRegPaperPlane , FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from 'next/link'

const Contact = () => {
  return (
    <section
      id="contact"
      className="container-h mb-10 w-screen flex flex-row items-center scroll-m-10"
    >
      <div className="flex flex-col justify-center mx-auto w-10/12 lg:w-2/3 xl:w-2/4 items-center">
        <h1 className="active mb-5 -mt-10 text-4xl font-sans font-bold sm:text-5xl md:text-6xl">
          Get In Touch
        </h1>
        <p className=" text-center block sm:w-3/5 w-4/5">Feel free to contact me whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <div className="flex flex-row space-x-5 mt-5">
          <Link href="https://twitter.com/samkds" className="hover:text-accent-400" target="_blank">
            <FaXTwitter size={30}></FaXTwitter>
          </Link>
          <Link href="https://github.com/samdsk" className="hover:text-accent-400" target="_blank">
            <FaGithub size={30}></FaGithub>
          </Link>
          <Link href="https://www.linkedin.com/in/sameera-k-35895041/" className="hover:text-accent-400" target="_blank">
            <FaLinkedin size={30}></FaLinkedin>
          </Link>
          <Link href="https://www.instagram.com/samdsk/" className="hover:text-accent-400" target="_blank">
            <FaInstagram  size={30}></FaInstagram >
          </Link>
          <Link href="mailto:samk.github@gmail.com" className="hover:text-accent-400" target="_blank">
            <FaRegPaperPlane  size={28}></FaRegPaperPlane   >
          </Link>
        </div>

      </div>

    </section>
  );
};

export default Contact;
