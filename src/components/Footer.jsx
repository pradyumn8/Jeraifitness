import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    const locations = [
        'Ahmedabad', 'Amritsar', 'Bengaluru', 'Bhopal', 'Bhubaneswar', 'Chandigarh',
        'Chennai', 'Coimbatore', 'Cuttack', 'Dehradun', 'Goa', 'Gurugram',
        'Guwahati', 'Hyderabad', 'Imphal', 'Indore', 'Jaipur', 'Jammu & Kashmir',
        'Kochi', 'Kolkata', 'Kozhikode', 'Lucknow', 'Meerut', 'Mumbai', 'Nagpur',
        'Nashik', 'New Delhi', 'Noida', 'Patna', 'Pune', 'Surat',
        'Thiruvananthapuram', 'Ujjain', 'Vadodara', 'Vishakhapatnam'
    ];

    return (
        <footer className="bg-neutral-900 text-white pt-10 pb-5 text-sm">
            {/* Main Container */}
            <div className="w-[90%] md:w-[80%] mx-auto">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* Left - Links */}
                    <div className="flex flex-wrap gap-12 w-full lg:w-1/2 text-center md:text-left">
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Events</li>
                            <li>Products</li>
                        </ul>
                        <ul className="space-y-2">
                            <li>Enquiry</li>
                            <li>Specifications</li>
                            <li>Blogs</li>
                        </ul>
                        <ul className="space-y-2">
                            <li>Careers</li>
                            <li>Offices</li>
                            <li>Showroom</li>
                        </ul>
                    </div>

                    {/* Right - Social Icons */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end gap-6 text-xl">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-10 border-2 border-gray-700" />

                {/* Our Locations */}
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold mb-4 uppercase">Our Locations</h3>

                    <div className="lg:text-left grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 text-gray-300 w-full justify-center">
                        {locations.map((city, i) => (
                            <span key={i}>{city}</span>
                        ))}
                    </div>

                    <button className="mt-4 bg-white text-black text-xs sm:text-sm px-6 py-2 transition hover:bg-black hover:text-white font-semibold uppercase">
                        View More
                    </button>
                </div>


                {/* Contact Info */}
                <div className="mt-10 grid lg:grid-cols-2 gap-8 text-center md:text-left">
                    <div>
                        <h4 className="font-semibold text-lg mb-2 uppercase">For Inquiry (10 am to 7 pm):</h4>
                        <p className="font-light">Toll Free No. :- +91 1800 22 1112</p>
                        <p className="font-light">+91 86579 64733 / +91 91520 04941</p>

                        <h4 className="font-semibold text-lg mt-4 mb-2 uppercase">Mumbai Corporate Office (10 am to 7 pm):</h4>
                        <p className="font-light">Mobile No. :- +91 75061 02102 / +91 75061 05105</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">REGISTERED OFFICE ADDRESS:</h4>
                        <p className="font-thin">
                            D-204, Gagangiri Complex, New Link Road Near McDonald, Kandarpada, Dahisar (W), Mumbai-400068, Maharashtra, INDIA.
                        </p>

                        <h4 className="font-semibold mt-4 mb-2">CORPORATE OFFICE ADDRESS:</h4>
                        <p className="font-thin">
                            209-212, Techno IT Park, Link Road, Borivali (West), Mumbai- 400 092, Maharashtra, INDIA.
                        </p>

                        <h4 className="font-semibold mt-4 mb-2">FACTORY ADDRESS:</h4>
                        <p className="font-thin">
                            Plot No. 219, Village-Ghonsai, Taluka-Wada, Dist.-Palghar-421 312, Maharashtra, INDIA.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-5 flex flex-col md:flex-row justify-between gap-6 text-sm mb-7">
                    {/* Left */}
                    <div className="flex flex-col items-center md:items-start text-gray-400 text-xs text-center md:text-left gap-2">
                        <img src={assets.logo} alt="Logo" className="w-42 mb-2" />
                        <p className="font-bold">Mobile No :- +91 75061 02102 / +91 75061 05105</p>
                        <p className="font-thin">© Copyright 2022 - Jerai Fitness</p>
                    </div>

                    {/* Right */}
                    <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-sm font-light text-center md:text-right">
                            <span>Terms & Conditions</span>
                            <span>Cookie Policy</span>
                            <span>Legal Terms</span>
                            <span>Refund Policy</span>
                        </div>
                        <p className="text-center md:text-right font-extralight text-gray-500">
                            Designed & built with ❤️ by <span className="font-bold">EBR Agency</span>
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
