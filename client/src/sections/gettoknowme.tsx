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
        <a href="#contact">
          {" "}
          <button className="py-3.5 px-12 bg-[#7742e7] text-[#fbfaf9] tracking-wider font-bold rounded-md mt-10 max-md:px-8 max-md:py-2.5">
            CONTACT
          </button>
        </a>
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
