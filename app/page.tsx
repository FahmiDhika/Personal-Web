"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gua from "@/public/assets/gua.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <motion.div
      layout
      className="w-full h-fit lg:py-12 flex items-center lg:px-52"
    >
      <AnimatePresence mode="wait">
        {!isClicked ? (
          // Tampilan Awal
          <motion.div
            key="awal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center w-full pt-28"
          >
            <motion.div layout className="flex flex-col items-center">
              <Image
                src={gua}
                alt="Foto Profil"
                width={250}
                height={250}
                className="aspect-square rounded-full object-cover border-4 mb-4 border-white transition-transform duration-300 hover:scale-105"
                onClick={() => setIsClicked(true)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 18.75 7.5-7.5 7.5 7.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 7.5-7.5 7.5 7.5"
                />
              </svg>

              <p className="text-lg">Click Me</p>
            </motion.div>
          </motion.div>
        ) : (
          // Tampilan Setelah Klik
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            layout
            className="w-full justify-center lg:flex lg:justify-between"
          >
            <motion.div
              layout
              className="w-full h-fit lg:w-1/3 flex pt-16 flex-wrap justify-center items-center"
            >
              <Image
                src={gua}
                alt="Foto Profil"
                width={250}
                height={250}
                className="aspect-square rounded-full object-cover border-4 mb-4 border-white transition-transform duration-300"
              />
              <h1 className="w-full mb-2 text-center">
                i'am{" "}
                <span className="text-5xl font-bold text-[#FE4F2D]">
                  Fahmi Dhika
                </span>
              </h1>
              <TypeAnimation
                sequence={[
                  "Front-End Web Developer",
                  1000,
                  "Back-End Web Developer",
                  1000,
                  "Junior Machine Learning",
                  1000,
                  "Content Creator",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
                className="text-xl font-mono border-b-2 mb-14"
              />
            </motion.div>

            {/* Konten */}
            <motion.div
              layout
              className="w-full gap-7 flex flex-wrap justify-center lg:w-2/3 "
            >
              <div className="w-full flex gap-7 lg:gap-10 text-lg font-semibold tracking-widest justify-center items-center">
                {["Profile", "Project", "Blog"].map((tab) => (
                  <button
                    key={tab}
                    className={`${
                      activeTab === tab ? "border-b-4 border-[#57b4ba]" : ""
                    } px-4 py-2 transition-colors duration-300`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="w-5/6 bg-[#1E1E1E] p-4 h-fit">
                <AnimatePresence mode="wait">
                  {activeTab === "Profile" && (
                    <motion.div
                      key="profile"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold mb-2">About Me</h2>
                      <div className="h-[400px] lg:h-[300px] overflow-y-auto">
                        <p className="mt-2 text-gray-300">dwadwa</p>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === "Project" && (
                    <motion.div
                      key="project"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold mb-2">Project Saya</h2>
                      <div className="h-[400px] lg:h-[300px] overflow-y-auto">
                        <p className="mt-2 text-gray-300">dwadwa</p>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === "Blog" && (
                    <motion.div
                      key="blog"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold mb-2">Blog</h2>
                      <div className="h-[400px] lg:h-[300px] overflow-y-auto">
                        <p className="mt-2 text-gray-300">Cooming soon!!</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
