import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="lg:flex w-full lg:flex-col sticky lg:items-center lg:fixed top-0 lg:pt-5 rounded-[40px] z-10">
      <nav className="lg:bg-black/30 lg:backdrop-blur-sm md:bg-black/30 md:backdrop-blur-sm bg-black border-[1px] border-gray-800 lg:w-fit px-2 w-full rounded-[40px] z-[999]">
        <div>
          <div className="max-w-screen-xl flex flex-wrap items-center gap-2 justify-between lg:justify-center mx-auto p-2 lg:p-4">
            
            {/* Mobile Logo */}
            <NavLink
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse pr-2 md:hidden lg:hidden"
            >
              <img
                src="https://i.postimg.cc/PqSKhngv/Britto.png"
                className="h-8"
                alt="Britto Soft Logo"
              />
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <AlignJustify />
            </button>

            {/* Desktop Menu with Logo */}
            <div className="hidden md:block md:w-auto">
              <ul className="font-medium flex md:gap-2 lg:gap-6 flex-row  rtl:space-x-reverse items-center">
                
                {/* Logo as part of Desktop Menu */}
                <li>
                  <NavLink
                    to={"/"}
                    className="flex items-center space-x-3 rtl:space-x-reverse pr-6 lg:border-r-[1px] border-gray-800"
                  >
                    <img
                      src="https://i.postimg.cc/PqSKhngv/Britto.png"
                      className="h-8"
                      alt="Britto Soft Logo"
                    />
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/"}
                    className="block py-2 px-3 rounded text-white hover:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className="block py-2 px-3 rounded text-white hover:text-blue-500"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/service"}
                    className="block py-2 px-3 rounded text-white hover:text-blue-500"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/pricing"}
                    className="block py-2 px-3 rounded text-white hover:text-blue-500"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="pr-2 border-r-[1px] border-gray-800">
                  <NavLink
                    to={"/contact"}
                    className="block py-2 px-3 rounded text-white hover:text-blue-500"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <a
                    className="bg-[#5148D9] lg:px-4 py-1 px-2 rounded-[20px]"
                    target="_blank"
                    href="https://facebook.com"
                  >
                    Set Meeting
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="block md:hidden w-full" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 mt-4 border rounded-lg bg-black/90 border-gray-700">
                  <li>
                    <NavLink
                      to={"/"}
                      className="block py-2 px-3 rounded text-white hover:bg-gray-700"
                      aria-current="page"
                      onClick={toggleMobileMenu}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/about"}
                      className="block py-2 px-3 rounded text-white hover:bg-gray-700"
                      onClick={toggleMobileMenu}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/service"}
                      className="block py-2 px-3 rounded text-white hover:bg-gray-700"
                      onClick={toggleMobileMenu}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/pricing"}
                      className="block py-2 px-3 rounded text-white hover:bg-gray-700"
                      onClick={toggleMobileMenu}
                    >
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      className="block py-2 px-3 rounded text-white hover:bg-gray-700"
                      onClick={toggleMobileMenu}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="bg-[#5148D9] px-4 py-2 rounded-[20px] text-white"
                      target="_blank"
                      href="https://facebook.com"
                      onClick={toggleMobileMenu}
                    >
                      Set Meeting
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
