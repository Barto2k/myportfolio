import { useEffect } from "react";
import Logo from "../images/LogoMF.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white flex items-center"
          >
            <img src={Logo} alt="Logo" className="h-8 mr-2" />
            marco<span className="text-blue-500">.figueroa</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Home{" "}
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="https://www.linkedin.com/in/marco-figueroa-533848314/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl text-white hover:text-blue-500 transition-colors"
              />
            </a>

            <a href="https://github.com/Barto2k/myportfolio">
                <FontAwesomeIcon icon={faGithub} className="text-2xl text-white hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
