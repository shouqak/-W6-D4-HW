import React from "react"
import { RiMenu5Line } from "react-icons/ri"
import { Link } from "react-router"
function Navbar() {
  return (
    <nav
      className="bg-blue-50  "
      dir="rtl"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/8182/8182996.png"
            className="h-8"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <RiMenu5Line />
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col  gap-5 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-neutral-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue-50 ">
            <li>
              <Link to="/">
              <p className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:bg-transparent">
                الرئيسية
              </p></Link>
            </li>

            <li>
                <Link to="/aboutus">
              <p className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:bg-transparent">
                عننا
              </p></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
