import inkwellify from "../../public/Inkwellify.png";
import inkwellifyvideo from "../../public/inkwellify.mp4";
import aniwatch from "../../public/aniwatch.png";
import aniwatchvideo from "../..//public/aniwatchvideo.mp4";
import applearcade from "../../public/applearcade.png";
import applearcadevideo from "../../public/applearcadevideo.mp4";
import linkhub from "../../public/linkhub.png";
import attendance from "../../public/attendance.png";
import attendancevideo from "../../public/attendancevideo.mp4";

const Project = [
  {
    id: 1,
    name: "Inkwellify (FEB'24)",
    img: inkwellify,
    video: inkwellifyvideo,
    description: `Inkwellify is a versatile blogging platform that allows users to
            upload daily content and engage interactively. Users can like,
            comment on, and bookmark posts, as well as follow their favorite
            authors to stay updated with their latest contributions.`,
    textstack: ["REACT JS", "MUI", "NODE JS", "EXPRESS JS", "POSTGRESQL"],
    link: "https://inkwellify.vercel.app/",
    repo: "https://github.com/vanamuthuV/BlogSpot",
  },

  {
    id: 2,
    name: "AniWatch (NOV'23)",
    img: aniwatch,
    video: aniwatchvideo,
    description: `AniWatch is a dynamic platform dedicated to showcasing the latest anime releases in the industry. Built entirely with React and leveraging robust API integration, AniWatch offers users up-to-date information on new anime series and films, ensuring they stay informed about the latest trends and releases.`,
    textstack: ["NODE JS", "API INTEGRATION", "AXIOS"],
    link: "https://www-aniwatch-com.netlify.app/",
    repo: "https://github.com/vanamuthuV/aniwatch",
  },
  {
    id: 3,
    name: "Attendance Management (MAR'24)",
    img: attendance,
    video: attendancevideo,
    description: `An intuitive web-based Attendance Management System designed for seamless database integration, enabling basic CRUD operations. The application allows users to efficiently add, update, and delete student records, as well as take and view attendance.`,
    textstack: ["REACT", "NODE JS", "EXPRESS JS", "POSTGRESQL"],
    link: "https://my-attendence.vercel.app/",
    repo: "https://github.com/vanamuthuV/My-Attendence",
  },
  {
    id: 4,
    name: "Apple Arcade Clone (JAN'23)",
    img: applearcade,
    video: applearcadevideo,
    description: `Apple Arcade is a website featuring a custom-designed landing page, created using HTML and CSS. The landing page showcases a clean and modern design that captures the essence of the Apple Arcade experience, highlighting key features and engaging visitors effectively.`,
    textstack: ["HTML", "CSS", "RESPONSIVE"],
    link: "https://glittering-chaja-23943b.netlify.app/",
    repo: "https://github.com/vanamuthuV/AppleArcade",
  },

  {
    id: 5,
    name: "LinkHub (Ongoing)",
    img: linkhub,
    video: linkhub,
    description: `LinkHub is a web platform that allows users to centralize all their links in one place, providing a streamlined way to manage and share them. It features click analytics, enabling users to track link performance and gain insights into user engagement.`,
    textstack: ["REACT", "REDUX", "PRISMA", "NODE JS", "EXPRESS JS", "PGSQL"],
    link: " ",
    repo: "https://github.com/vanamuthuV/linkhub",
  },
];

export const Projects = () => {
  return (
    <div
      id="project"
      className="flex flex-col items-center justify-center my-20 bg-white"
    >
      <h1 className="text-[40px] font-bold tracking-wider max-md:text-[35px]">
        {" "}
        PROJECTS{" "}
      </h1>
      <div className="w-10 mt-4 h-1 rounded-full bg-[#7843e9]"></div>
      <div className="w-8/12 mt-4 max-md:w-11/12">
        <p className="text-xl font-medium text-center text-[#5c5a5a] max-md:text-base">
          Here are some of the personal projects I’ve developed.
        </p>
      </div>
      <div className="mt-10">
        {Project.map((project) => {
          return (
            <div className="flex flex-row items-center justify-between max-md:flex-wrap">
              <div className="flex flex-row items-center justify-center w-2/4 m-10 max-md:mt-5 max-md:mb-4 max-md:w-full max-md:flex-col">
                <div className="flex flex-row items-center justify-start w-full md:hidden">
                  <h1 className="mb-5 text-2xl font-bold tracking-wide max-md:text-xl">
                    {project.name}
                  </h1>
                </div>
                <div className="relative w-[500px] h-[281px] group max-md:w-5/6 max-md:h-[224px]">
                  <img
                    className={`absolute inset-0 object-contain w-full h-full transition-opacity duration-500 opacity-100 rounded-xl ${
                      project.id !== 5 && "group-hover:opacity-0"
                    }`}
                    src={project.img}
                    alt="Image"
                  />
                  {project.id !== 5 && (
                    <video
                      className="absolute inset-0 object-contain w-full h-full transition-opacity duration-500 opacity-0 rounded-xl group-hover:opacity-100"
                      autoPlay
                      loop
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  )}
                </div>
              </div>

              <div className="w-2/4 m-10 max-md:w-full max-md:mt-4">
                <h1 className="mb-5 text-2xl font-bold tracking-wide max-md:hidden">
                  {project.name}
                </h1>
                <p className="text-lg leading-8 text-stone-500 max-md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-row flex-wrap items-center mt-5">
                  {project.textstack.map((tech) => {
                    return (
                      <div className="bg-[#dcdada] py-1.5 px-4 text-[#666666] text-sm font-semibold rounded-md mr-[15px] mb-[15px] max-md:py-1 max-md:px-2 max-md:text-xs">
                        {tech}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-row items-center gap-5 max-md:gap-3">
                  <a href={project.link}>
                    <button
                      disabled={project.id == 5 ? true : false}
                      className={`flex flex-row items-center justify-center py-2 px-8 max-md:px-6 max-md:text-xs bg-[#7742e7] text-[#fbfaf9] tracking-wider font-bold rounded-md mt-5 ${
                        project.id == 5 && "cursor-not-allowed"
                      }`}
                    >
                      LIVE DEMO
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#e8eaed"
                        className="w-5 h-5 ml-2 max-md:w-4 max-md:h-4"
                      >
                        <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                      </svg>
                    </button>
                  </a>
                  <a href={project.repo}>
                    <button className="flex flex-row items-center justify-center py-2 px-8 max-md:px-6 max-md:text-xs bg-[#f6f8fa] text-[#24292e] border border-[#7742e7] tracking-wider font-bold rounded-md mt-5">
                      VIEW REPO
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#7742e7"
                        className="w-5 h-5 ml-2 max-md:w-4 max-md:h-4"
                      >
                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
