export const AboutMe = () => {
    return (
      <div
        id="about"
        className="bg-[#eaecec] h-60 flex flex-col items-center justify-center"
      >
        <h1 className="text-[40px] font-bold tracking-wider max-md:text-[35px] max-md:pt-10"> ABOUT ME</h1>
        <div className="w-10 mt-4 h-1 rounded-full bg-[#7843e9]"></div>
        <div className="w-8/12 mt-4 max-md:w-11/12">
          <p className="text-xl font-medium text-center text-[#5c5a5a] max-md:text-base">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology{" "}
          </p>
        </div>
      </div>
    );
}