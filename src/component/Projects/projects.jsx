import React from "react";
import web1 from "../../assets/image/bmw.jpg";
import web2 from "../../assets/image/corvette.jpg";
import web3 from "../../assets/image/koenigseeg.jpg";
import web4 from "../../assets/image/pagani.jpg";

const ProjectsData = [
  {
    id: 1,
    name: "BMW M4 COMPETITION",
    image: web3,
    link: "#",
  },
  {
    id: 2,
    name: "CHEVROLET CORVETTE",
    image: web2,
    link: "#",
  },
  {
    id: 3,
    name: "FERRARI F8 SPIDER",
    image: web4,
    link: "#",
  },
  {
    id: 4,
    name: "KOENIGSEEG",
    image: web1,
    link: "#",
  },
];

const Projects = () => {
  return (
    <>
      <span id="projects"></span>
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="uppercase text-3xl font-bold">
                Projects Terbaru 🦄
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <button className="bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white">
                View All
              </button>
            </div>
          </header>
          {/* card section */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* card */}
              {ProjectsData.map(({ id, name, image, link }) => (
                <div key={id} className="overflow-hidden rounded-lg">
                  <div className="h-[340px] sm:h-[420px] w-full bg-dark/80">
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="pt-4 space-y-3">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <div>
                      <a href={link} className="text-primary uppercase">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
