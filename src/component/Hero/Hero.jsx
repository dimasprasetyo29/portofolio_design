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
            <p className="text-primary">Hello I'm clara </p>
            <h1 className="text-5xl font-semibold">CAR SALESMAN</h1>
            <p>
              Saya adalah seorang sales di AutoNatio.     
            
              AUTONATION dealer mobil terbesar di dunia.
               Dealer mobil ini berpusat di Amerika Serikat dan memiliki lebih dari 300 dealer di seluruh negeri.
                AutoNation menawarkan berbagai macam kendaraan baru dan bekas dari hampir semua produsen mobil terkemuka. 

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