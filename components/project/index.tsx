"use client";

import { useState } from "react";

const DisplayProject = ({ className }: any) => {
  const [projectData] = useState([
    {
      id: 1,
      title: "Report Penjualan",
      description:
        "Sebuah web app yang memungkinkan mengguna untuk berinteraksi dengan database malalui api yang telah di buat. Terdapat 2 role yang bisa digunakan, kasir dan admin",
      repository: "https://github.com/FahmiDhika/Report-Penjualan-Website",
      website: "-",
      language: "Typescript",
      color: "#5BCCEB",
      framework: ["NextJs", "NodeJs", "Express", "MySQL"],
      bgColor: "#BF3131",
    },
    {
      id: 2,
      title: "Food Ordering System",
      description:
        "Sistem untuk bertransaksi dalam pemesanan makanan dan minuman di bisnis FnB.",
      repository: "https://github.com/FahmiDhika/Food-Ordering-SystemFrontEnd",
      website: "-",
      language: "Typescript",
      color: "#5BCCEB",
      framework: ["NextJs", "NodeJs", "Express", "MySQL"],
      bgColor: "#57B4BA",
    },
    {
      id: 1,
      title: "KurbanQ",
      description: "Jual beli hewan kurban",
      repository: "https://github.com/FahmiDhika/KurbanQ-Website",
      website: "-",
      language: "Typescript",
      color: "#5BCCEB",
      framework: ["NextJs", "NodeJs", "Express", "MySQL"],
      bgColor: "#A0C878",
    },
  ]);

  return (
    <div>
      {projectData.map((i, no) => {
        return (
          <div
            className={`${className}`}
            style={{backgroundColor: i.bgColor}}
            key={no}
          >
            <h3 className="w-full text-3xl border-b-2 border-white pb-1">
              {i.title}
            </h3>
            <div className="w-full border-b-2 border-white">
              <a href={i.website} className="text-gray-400">
                <small className="hover:underline">{i.website}</small>
              </a>
              <br className="" />
              <a href={i.repository} className="text-gray-400">
                <small className="hover:underline">{i.repository}</small>
              </a>
            </div>
            <p className="w-full border-b-2 border-white py-2">
              {i.description}
            </p>
            <div className="w-fit flex items-center px-3 py-1 rounded-full gap-2 mt-2 bg-black">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: i.color }}
              ></div>
              <p className="text-sm font-medium" style={{ color: i.color }}>
                {i.language}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayProject;
