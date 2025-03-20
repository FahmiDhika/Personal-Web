"use client";

import { useState } from "react";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <nav className="bg-transparent w-screen lg:w-full h-fit flex justify-center py-6 lg:justify-between items-center lg:px-72">
      <div className="">
        <Link href={"/"} className="">
          <Image src={logo} alt="" width={150}></Image>
        </Link>
      </div>

      {/* Hamburger Button */}
      <div className="fixed top-8 left-6 lg:hidden">
        <button onClick={() => setIsShow(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`w-1/2 rounded-r-3xl lg:hidden z-10 top-4 left-0 fixed max-w-sm mx-auto bg-[#1E1E1E] shadow-black
            px-6 py-5 transition-transform duration-700 ${
              isShow ? "translate-x-0" : "-translate-x-full"
            }`}
      >
        <button onClick={() => setIsShow(false)} className="self-end mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <Link
          href={"https://instagram.com/fahmiidhika"}
          className="hover:text-purple-400 ease-in duration-300 flex items-center gap-2 mb-6 font-semibold tracking-widest"
        >
          <FaInstagram size={32} /> Instagram
        </Link>
        <Link
          href={"https://www.linkedin.com/in/fahmi-dhika-254086285/"}
          className="hover:text-blue-400 ease-in duration-300 flex items-center gap-2 mb-6 font-semibold tracking-widest"
        >
          <FaLinkedin size={32} />
          LinkedIn
        </Link>
        <Link
          href={"https://github.com/FahmiDhika"}
          className="hover:text-slate-800 ease-in duration-300 flex items-center gap-2 mb-6 font-semibold tracking-widest"
        >
          <FaGithub size={32} /> GitHub
        </Link>
      </div>

      {/* Dekstop Navbar */}
      <div className="hidden lg:flex gap-7">
        <Link
          href={"https://instagram.com/fahmiidhika"}
          className="hover:text-purple-400 ease-in duration-300"
        >
          <FaInstagram size={32} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/fahmi-dhika-254086285/"}
          className="hover:text-blue-400 ease-in duration-300"
        >
          <FaLinkedin size={32} />
        </Link>
        <Link
          href={"https://github.com/FahmiDhika"}
          className="hover:text-slate-800 ease-in duration-300"
        >
          <FaGithub size={32} />
        </Link>
      </div>
    </nav>
  );
}
