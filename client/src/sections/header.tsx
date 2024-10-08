import { useState } from "react";
import Resume from "../../public/Vanamuthu V Resume.pdf";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-50 flex flex-row items-center justify-between w-full h-20 px-20 bg-white ralative max-md:px-8">
      <p className="text-lg font-bold tracking-widest">VANAMUTHU V</p>

      <ul className="flex flex-row items-center gap-5 max-md:hidden">
        <a className="hover:text-[#7742e7]" href="#home">
          <li className="text-base tracking-wider font-base">HOME</li>
        </a>
        <a className="hover:text-[#7742e7]" href="/#about">
          {" "}
          <li className="text-base tracking-wider font-base">ABOUT</li>
        </a>
        <a className="hover:text-[#7742e7]" href="#project">
          <li className="text-base tracking-wider font-base">PROJECT</li>
        </a>
        <a className="hover:text-[#7742e7]" href="#contact">
          <li className="text-base tracking-wider font-base">CONTACT</li>
        </a>
      </ul>

      <button className="md:hidden">
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            onClick={() => setOpen(false)}
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            onClick={() => setOpen(true)}
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute right-0 z-50 w-full p-10 bg-white -bottom-[280px]">
          <ul className="flex flex-col items-center justify-center gap-5">
            <a
              className="hover:text-[#7742e7]"
              href="#home"
              onClick={() => setOpen(false)}
            >
              <li className="text-base tracking-wider font-base">HOME</li>
            </a>
            <a
              className="hover:text-[#7742e7]"
              href="/#about"
              onClick={() => setOpen(false)}
            >
              {" "}
              <li
                className="text-base tracking-wider font-base"
                onClick={() => setOpen(false)}
              >
                ABOUT
              </li>
            </a>
            <a
              className="hover:text-[#7742e7]"
              href="#project"
              onClick={() => setOpen(false)}
            >
              <li className="text-base tracking-wider font-base">PROJECT</li>
            </a>
            <a
              className="hover:text-[#7742e7]"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              <li className="text-base tracking-wider font-base">CONTACT</li>
            </a>
            <a
              className="hover:text-[#7742e7]"
              href={Resume}
              download={"Vanamuthu V.pdf"}
              onClick={() => {
                setOpen(false);
              }}
            >
              <li className="flex flex-row items-center text-base tracking-wider font-base hover:text-[#7742e7]">
                RESUME{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#000000"
                  className="w-5 h-5 ml-1 hover:fill-[#7742e7]"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};
