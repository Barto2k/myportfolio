import { useEffect } from "react";
import Logo from "../images/Icono Portfolio.png";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-event-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>
      <a>
        <div className=" md:flex items-center space-x-8 p-4">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                    ${
                                      menuOpen
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-5"
                                    }`}
          >
            {" "}
            Home
          </a>
        </div>

        <div className=" md:flex items-center space-x-8 p-4">
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                    ${
                                      menuOpen
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-5"
                                    }`}
          >
            {" "}
            Projects{" "}
          </a>
        </div>

        <div className=" md:flex items-center space-x-8 p-4">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                    ${
                                      menuOpen
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-5"
                                    }`}
          >
            {" "}
            About{" "}
          </a>
        </div>

        <div className=" md:flex items-center space-x-8 p-4">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                    ${
                                      menuOpen
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-5"
                                    }`}
          >
            {" "}
            Contact{" "}
          </a>
        </div>
      </a>
    </div>
  );
};
