import Resume from "../../public/Vanamuthu V Resume.pdf"

export const GetToKnowMe = () => {
  const Skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Redux",
    "NodeJS",
    "ExpressJS",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "MUI",
    "GIT",
    "Github",
    "POSTMAN",
    "Responsive Design",
  ];

  return (
    <div className="p-10 pt-5 flex flex-row max-md:flex-wrap items-start justify-between bg-[#eaecec]">
      <div className="w-2/4 max-md:w-full">
        <h1 className="mb-10 text-2xl font-bold text-center max-md:text-start">
          Get to know me!
        </h1>
        <p className="text-lg text-[#5c5a5a] text-justify max-md:text-base">
          I am a{" "}
          <span className="font-bold text-[#4c4a4a]">
            Full Stack Web Developer
          </span>{" "}
          skilled in building scalable, efficient web applications. With
          expertise in both front-end and back-end development, I focus on
          delivering high-quality, maintainable code that enhances user
          experiences and drives business success.
        </p>
        <p className="text-lg text-[#5c5a5a] text-justify mt-5 max-md:text-base">
          Check out my
          <span className="font-bold text-[#4c4a4a] cursor-pointer">
            <a href="#project"> Projects </a>
          </span>{" "}
          to see how I've used various technologies to build dynamic, responsive
          web solutions.
        </p>
        <p className="text-lg text-[#5c5a5a] text-justify  mt-5 max-md:text-base">
          I am open to <span className="font-bold text-[#4c4a4a]">job</span> job
          opportunities where I can contribute, learn, and grow. If you have a
          role that matches my skills, please reach out. Connect with me on
          <a
            className="font-bold text-[#7843e9] underline"
            href="https://www.linkedin.com/in/vanamuthuv"
          >
            {" "}
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            className="font-bold text-[#7843e9] underline"
            href="https://www.instagram.com/vanamuthu_v/"
          >
            Instagram
          </a>{" "}
          for programming insights and industry trends. Let’s create something
          impactful together!
        </p>
        <div className="flex flex-row items-center justify-start mt-10">
          <a href="#contact">
            {" "}
            <button className="py-3.5 px-12 text-sm bg-[#7742e7] text-[#fbfaf9] tracking-wider font-bold rounded-md max-md:px-8 max-md:py-2.5">
              CONTACT
            </button>
          </a>
          <a href={Resume} download={"Vanamuthu V.pdf"}>
            <button className="py-3.5 px-9 max-md:px-5 max-md:py-2.5 text-[#7843e9] bg-[#f5f5f5] border border-[#7843e9] rounded-md focus:outline-none flex flex-row items-center  justify-around text-sm font-bold tracking-wider ml-5">
              Resume{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#7843e9"
                className="w-5 h-5 ml-2"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start w-2/4 mx-10 max-md:w-full max-md:mx-0 max-md:mt-10">
        <h1 className="w-full mb-10 text-2xl font-bold text-center max-md:text-start">
          My Skills
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {Skills.map((skill) => {
            return (
              <div className="bg-[#dcdada] py-2.5 px-5 text-[#666666] font-semibold rounded-md mr-[15px] mb-[15px] max-md:py-2 max-md:px-3">
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
