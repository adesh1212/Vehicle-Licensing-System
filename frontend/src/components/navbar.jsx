import React from "react";
import { Link } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Link
          to="/add-license"
          className="p-1 font-normal text-blue-gray-800 hover:text-blue-600"
        >
          Add License
        </Link>
      </li>
      <li>
        <Link
          to="/register-vehicle"
          className="p-1 font-normal text-blue-gray-800 hover:text-blue-600"
        >
          Register Vehicle
        </Link>
      </li>
      <li>
        <Link
          to="/add-owner"
          className="p-1 font-normal text-blue-gray-800 hover:text-blue-600"
        >
          Add Owner
        </Link>
      </li>
      <li>
        <Link
          to="/owners"
          className="p-1 font-normal text-blue-gray-800 hover:text-blue-600"
        >
          Owners
        </Link>
      </li>
      <li>
        <Link
          to="/licenses"
          className="p-1 font-normal text-blue-gray-800 hover:text-blue-600"
        >
          Licenses
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="w-full">
      <nav className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-gray-400 shadow-md">
        <div className="flex items-center justify-between text-black">
          <Link
            to="/"
            className="mr-4 cursor-pointer py-1.5 font-medium text-lg"
          >
            Vehicle Licensing System
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:flex">{navList}</div>
            <button
              className="ml-auto lg:hidden p-2"
              onClick={() => setOpenNav(!openNav)}
              aria-label="Toggle Navigation"
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`lg:hidden ${openNav ? "block" : "hidden"}`}>
          {navList}
        </div>
      </nav>
    </div>
  );
}
