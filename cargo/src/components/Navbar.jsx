import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if current route is home page
  const isHomePage = location.pathname === "/";

  const handleContact = () => {
    navigate("/contact");
    setMenuOpen(false);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Only add scroll listener for home page
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    } else {
      // For other pages, always set scrolled to true
      setScrolled(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  // Determine navbar background and text colors
  const shouldShowWhiteBg = !isHomePage || scrolled;

  return (
    <nav
      className={`h-[70px] w-[100%] px-2 md:px-10 lg:px-15 xl:px-20 flex items-center justify-between z-50 fixed top-0 left-0 transition-all  duration-300 ${
        shouldShowWhiteBg
          ? "bg-white shadow-lg text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className={` text-md lg:text-2xl  font-semibold transition-colors duration-300  big ${
          shouldShowWhiteBg ? "text-gray-900" : "text-white"
        }`}
        onClick={handleNavClick}
      >
        PowerCruise Holidays
      </Link>

      <div className="flex gap-15">
        {/* Desktop Menu */}
        <ul
          className={`md:flex hidden items-center gap-10 text-xl font-medium big transition-colors duration-300 ${
            shouldShowWhiteBg ? "text-gray-700" : "text-white"
          }`}
        >
          <li>
            <Link
              className={`hover:text-[#432DD7] transition-colors ${
                shouldShowWhiteBg ? "text-gray-700" : "text-white"
              }`}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-[#432DD7] transition-colors ${
                shouldShowWhiteBg ? "text-gray-700" : "text-white"
              }`}
              to="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-[#432DD7] transition-colors ${
                shouldShowWhiteBg ? "text-gray-700" : "text-white"
              }`}
              to="/cruises"
            >
              CRUISES
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-[#432DD7] transition-colors ${
                shouldShowWhiteBg ? "text-gray-700" : "text-white"
              }`}
              to="/car"
            >
              CAR RENTAL
            </Link>
          </li>
        </ul>
       <h1 className="text-[13px] lg:text-xl mt-1">
  <a href="tel:+18883704002" className="">
    📞 +1 (888) 370-4002
  </a>
</h1>

        <button
          onClick={handleContact}
          type="button"
          className={`md:inline hidden text-lg font-medium big hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full duration-300 ${
            shouldShowWhiteBg
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Contact US
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="30"
          viewBox="0 0 30 30"
          fill={shouldShowWhiteBg ? "#000" : "#fff"}
        >
          <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-[70px] left-0 w-full p-6 md:hidden transition-all duration-300 ${
            shouldShowWhiteBg
              ? "bg-white shadow-lg"
              : "bg-violet-400"
          }`}
        >
          <ul
            className={`flex flex-col space-y-4 text-lg ${
              shouldShowWhiteBg ? "text-gray-700" : "text-white"
            }`}
          >
            <li>
              <Link
                to="/"
                className={`text-sm hover:text-[#432DD7] transition-colors ${
                  shouldShowWhiteBg ? "text-gray-700" : "text-white"
                }`}
                onClick={handleNavClick}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-sm hover:text-[#432DD7] transition-colors ${
                  shouldShowWhiteBg ? "text-gray-700" : "text-white"
                }`}
                onClick={handleNavClick}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/cruises"
                className={`text-sm hover:text-[#432DD7] transition-colors ${
                  shouldShowWhiteBg ? "text-gray-700" : "text-white"
                }`}
                onClick={handleNavClick}
              >
                CRUISES
              </Link>
            </li>
            <li>
              <Link
                to="/car"
                className={`text-sm hover:text-[#432DD7] transition-colors ${
                  shouldShowWhiteBg ? "text-gray-700" : "text-white"
                }`}
                onClick={handleNavClick}
              >
                CAR RENTAL
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={handleContact}
            className={`mt-6 inline md:hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full ${
              shouldShowWhiteBg
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Contact US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
