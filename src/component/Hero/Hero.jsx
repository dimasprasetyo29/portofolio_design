import React from "react";
import PersonImg from "../../assets/image/person.png";

const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="">
            <img src={PersonImg} alt="" className="" />
          </div>
          <div className="space-y-3 ">
            <p className="text-primary">Hello I'm Dimas prasetyo</p>
            <h1 className="text-5xl font-semibold">Visual Designer</h1>
            <p>
              Saya adalah seorang pelajar kelas 10 di smk bina nusantara.
              saya mengambil jurusan sebagai programmer ,
               ini adalah salah satu project saya.
               anda dapat melihat beberapa tampilan project sebelum nya,
                dan jika anda tertarik anda bisa menghubungi saya dan kolaborasi untuk project selanjutnya. 

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