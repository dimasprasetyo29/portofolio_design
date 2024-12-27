// src/components/Hero/Hero.js
import React from "react";
import PersonImg from "../../assets/image/person.png"; // Pastikan path gambar benar

const Hero = () => {
  return (
    <div id="Hero" className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="">
            <img src={PersonImg} alt="Clara" className="w-full" />
          </div>
          <div className="space-y-3">
            <p className="text-primary">Hello I'm Clara</p>
            <h1 className="text-5xl font-semibold">CAR SALESMAN</h1>
            <p>
              Saya adalah seorang sales di AutoNation. 
              AutoNation adalah dealer mobil terbesar di dunia,
              yang berpusat di Amerika Serikat dengan lebih dari 300 dealer di seluruh negeri.
              AutoNation menawarkan berbagai macam kendaraan baru dan bekas dari hampir semua produsen mobil terkemuka.
              ♡( ◡‿◡ )
            </p>
            <button className="uppercase bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white">
              About me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
