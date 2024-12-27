// src/components/Navbar/Navbar.js
import React from "react";
import DarkMode from "./Darkmode"; // Pastikan komponen DarkMode sudah dibuat atau diimpor dengan benar

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#Hero",  // Menggunakan anchor link untuk navigasi dalam halaman
  },
  {
    id: 2,
    name: "ABOUT CARS",
    link: "/#Mobil",  //  link untuk section Mobil
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",  //  link untuk section About
  },
  {
    id: 4,
    name: "CONTACT",
    link: "/#contact",  //  link untuk section Contact
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md w-full dark:bg-black dark:text-white">
      <div className="container py-2 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold">AutoNation</span>
          </div>
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block text-lg font-medium py-3 hover:text-primary duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
