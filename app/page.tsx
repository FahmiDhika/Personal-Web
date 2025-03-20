"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gua from "@/public/assets/gua.jpg";
import { TypeAnimation } from "react-type-animation";
import Project from "@/components/project/index";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Home() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <motion.div layout className="w-full lg:py-12 flex items-center lg:px-52">
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
                i&apos;sam{" "}
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
              className="w-full gap-7 flex flex-wrap justify-center lg:w-2/3 mb-14"
            >
              <div className="w-full flex gap-7 lg:gap-10 text-lg font-semibold tracking-widest justify-center items-center">
                {["Profile", "Project", "Contact"].map((tab) => (
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
              <div className="w-5/6 p-4 max-h-[500px]">
                <AnimatePresence mode="wait">
                  {activeTab === "Profile" && (
                    <motion.div
                      key="profile"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-6xl font-bold mb-2 border-b-4 border-white">
                        About Me
                      </h2>
                      <div className="h-[400px] lg:h-[300px] overflow-y-auto">
                        <p className="mt-2 text-justify">
                          Hello, my name is Fahmi Ahmadhika Ramadhan, you can
                          call me Fahmi. I am a vocational high school student
                          in one of the schools in Indonesia, with a passion for
                          coding. I love playing with computers, from editing
                          videos, photos, creating programs, to playing games. I
                          spend almost a quarter of my day in front of the
                          computer.
                        </p>
                        <p className="mt-4 text-justify">
                          Besides my love for computers, I also love learning
                          new things in the world of technology. I often try
                          different programming languages, from Python to
                          JavaScript with modern frameworks. The challenge of
                          coding and finding solutions makes me more interested
                          in developing. Outside of coding, I also enjoy playing
                          games and editing videos or photos as a form of
                          creativity. I believe that technology and creativity
                          can go hand in hand, helping me to understand logic,
                          strategy, and design in creating applications or
                          programs.
                        </p>
                        <p className="mt-4 text-justify">
                          In the future, I aspire to be a reliable developer who
                          can create useful digital products. I want to continue
                          honing my coding skills and understand more about how
                          technology can help our daily lives. With
                          determination and hard work, I believe I can realize
                          my dream. May my journey in the world of technology
                          continue to grow and bring benefits, not only for
                          myself but also for others.
                        </p>
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
                      <h2 className="text-6xl font-bold mb-2 pb-3 border-b-4 border-white">
                        Project Saya
                      </h2>
                      <div className="h-[400px] lg:h-[300px] overflow-y-auto">
                        <Project />
                      </div>
                    </motion.div>
                  )}
                  {activeTab === "Contact" && (
                    <motion.div
                      key="Contact"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-6xl font-bold mb-6 border-b-4 border-white">
                        Contact
                      </h2>
                      <div className="h-[400px] lg:h-[300px] overflow-y-auto">
                        <div className="w-full mb-8">
                          <h1 className="text-4xl uppercase tracking-widest flex items-center gap-3 mb-2">
                            <MdEmail size={50} />
                            Email
                          </h1>
                          <p>- example@gmail.com</p>
                          <p>- business@gmail.com</p>
                        </div>
                        <div className="w-full mb-8">
                          <h1 className="text-4xl uppercase tracking-widest flex items-center gap-3 mb-2">
                            <FaPhone size={40} />
                            Phone
                          </h1>
                          <p>+62 82746182758</p>
                          <p>+62 87283756381</p>
                        </div>
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
