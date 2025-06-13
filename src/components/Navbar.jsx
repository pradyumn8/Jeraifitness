import React from 'react'
import logo from '../assets/logo.avif';
import globe from '../assets/globe.avif'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="shadow sticky z-0 top-0">
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-6">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex aitems-center">
                        <img
                            src={logo}
                            className="mr-3 h-8"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <div className="relative mr-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-[96px] text-sm block pl-3 pr-8 py-2 bg-white border border-gray-300 focus:ring-2 focus:outline-none"
                            />
                            <svg
                                className="w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                                />
                            </svg>
                        </div>

                      <button
  type="button"
  className="flex items-center gap-2 bg-white text-black font-medium cursor-pointer text-sm px-3 py-2 mr-2 shadow border"
>

  <span>EN</span>
    <img
    src={globe}
    alt="Globe"
    className="w-4 h-4 object-contain"
  />
</button>

                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    className="block text-xs py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-amber-50 hover:text-amber-100 lg:p-0"

                                >
                                    CARDIO
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    className="block text-xs py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-amber-50 hover:text-amber-100 lg:p-0"

                                >
                                    STRENGTH
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    className="block text-xs py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-amber-50 hover:text-amber-100 lg:p-0"

                                >
                                    JX-FIT
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    className="block text-xs py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-amber-50 hover:text-amber-100 lg:p-0"

                                >
                                    HOME RANGE
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    className="block text-xs py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-amber-50 hover:text-amber-100 lg:p-0"

                                >
                                    ATTACHMENTS/ACCESSORIES
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    className="block text-xs py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-amber-50 hover:text-amber-100 lg:p-0"

                                >
                                    ENQUIEY
                                </NavLink>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}