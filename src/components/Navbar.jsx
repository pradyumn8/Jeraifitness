import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="shadow sticky top-0 z-20">
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-6">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={assets.logo} className="mr-3 h-8" alt="Logo" />
                    </Link>

                    {/* Right Side - Search and Language (Desktop) */}
                    <div className="flex items-center lg:order-2 gap-2">
                        <div className="relative hidden md:block">
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
                        {/* <button className="flex items-center gap-2 bg-white text-black font-medium text-sm px-3 py-2 shadow border ">
                            <span>EN</span>
                            <img src={assets.globe} alt="Globe" className="w-4 h-4 object-contain" />
                        </button> */}
                        <button className="hidden md:flex items-center gap-2 bg-white text-black font-medium text-sm px-3 py-2 shadow border">
                            <span>EN</span>
                            <img src={assets.globe} alt="Globe" className="w-4 h-4 object-contain" />
                        </button>

                        {/* Menu icon (hamburger) */}
                        <div
                            className="flex items-center gap-2 text-white cursor-pointer md:hidden"
                            onClick={() => setShowMenu(true)}
                        >
                            <span className="text-sm font-medium">MENU</span>
                            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Add contact btn and search bar for mobile width */}
                    <div className="flex w-full gap-2 mt-6 bg-black md:w-auto md:hidden lg:hidden">
                        {/* Contact Us – only visible on mobile */}
                        <button className="w-1/3 md:hidden bg-red-600 text-white text-sm font-medium px-4 py-2 shadow">
                            Contact Us
                        </button>

                        {/* Search Bar – visible on all devices*/}
                        <div className="relative w-2/3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full text-sm pl-3 pr-8 py-2 bg-white border border-gray-300 focus:ring-2 focus:outline-none rounded"
                            />
                            <svg
                                className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 pointer-events-none"
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
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center w-full lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-amber-50">
                            {[
                                { label: "CARDIO", items: ["Treadmills", "Ellipticals", "Upright Bikes", "Recumbent Bikes", "Spinning Bikes", "Air Rower", "Air Bike", "Stepper Trainer", "Step-Up Climber"] },
                                { label: "STRENGTH", items: ["Proton", "X-tend", "Club Line Plus", "Falcon", "Load On", "Benches & Racks", "Dumbbells/Plates/Barbells"] },
                                { label: "JX-FIT", items: ["Multi Gyms", "Multi Jungles", "Stretching", "Rigs and Racks", "Functional Training"] },
                                { label: "HOME RANGE", items: ["Personal Training", "Multi Gyms", "Benches and Racks", "Cardio", "Attachments"] },
                            ].map(({ label, items }, idx) => (
                                <li key={idx} className="relative group">
                                    <NavLink className="flex items-center gap-1 text-xs py-2 pr-5 pl-4 hover:text-amber-100 cursor-pointer">
                                        {label}
                                        <img src={assets.down} alt="down" className="w-3 h-3" />
                                    </NavLink>
                                    <ul className="absolute z-20 hidden group-hover:block bg-white text-gray-600 mt-1 w-48 shadow-md">
                                        {items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}

                            <li>
                                <NavLink className="text-xs py-2 pr-5 pl-4 hover:text-amber-100 cursor-pointer">
                                    ATTACHMENTS/ACCESSORIES
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-xs py-2 pr-5 pl-4 hover:text-amber-100 cursor-pointer">
                                    ENQUIRY
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ---------------- MOBILE MENU ---------------- */}
                <div className={`${showMenu ? 'fixed inset-0 z-30' : 'hidden'} bg-black lg:hidden transition-all duration-300`}>
                    <div className="flex items-center bg-black justify-between px-5 py-6 border-b">
                        <img className="w-36" src={assets.logo} alt="Logo" />

                        {/* Cross icon */}
                        <div
                            className="flex items-center gap-2 text-white cursor-pointer"
                            onClick={() => setShowMenu(false)}
                        >
                            <span className="text-sm font-medium">CLOSE</span>
                            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
                        </div>
                    </div>


                    <ul className="flex flex-col items-center w-full h-full bg-black gap-2 mt-5 px-5 text-lg font-medium">
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/"
                            className="w-full"
                        >
                            <p className="px-2 py-2 rounded text-xl text-white text-left">Home</p>
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/"
                            className="w-full"
                        >
                            <p className="px-2 py-2 rounded text-xl text-white text-left">About Us</p>
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/"
                            className="w-full"
                        >
                            <p className="px-2 py-2 rounded text-xl text-white text-left">Products</p>
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/"
                            className="w-full"
                        >
                            <p className="px-2 py-2 rounded text-xl text-white text-left">Events</p>
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/"
                            className="w-full"
                        >
                            <p className="px-2 py-2 rounded text-xl text-white text-left">Enquiry</p>
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/"
                            className="w-full"
                        >
                            <p className="px-2 py-2 rounded text-xl text-white text-left">Blogs</p>
                        </NavLink>

                    </ul>
                </div>
            </nav>
        </header>
    );
}
