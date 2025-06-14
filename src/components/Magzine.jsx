import React from 'react'
import { assets } from '../assets/assets';


const Magzine = () => {
    return (
        <div className="w-full px-0 py-12 flex flex-col md:flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
                <img
                    src={assets.magzine}
                    alt="Precision Crafted"
                    className="w-full h-auto shadow-md"
                />
            </div>

            {/* Text Section */}
            <div className="w-full mt-10 lg:w-1/2 text-gray-800 dark:text-gray-200">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 dark:text-white mb-4 sm:mb-5 md:mb-6">
                    Precision Crafted  <br />for Maximum <br /> Performance
                </h1>
                <p className="font-light mb-3 sm:mb-4">
                    Elevate your fitness journey and sculpt your physique with the best fitness and gym equipment manufacturer –
                    Jerai Fitness. Begin your path with us to procure top-notch fitness gear and
                    elevate your home or commercial gym experience.
                </p>
                <p className="font-light mb-3 sm:mb-4">
                    At Jerai Fitness, our dedication to excellence transcends the ordinary; we comprehend your training needs. Whether it's dumbbells
                    or multi-gym setups, we offer a diverse range of options. Our evolution from fitness equipment manufacturer to our current stature
                    as the largest fitness equipment brand exporting in more than 20 countries over the past few years demonstrates our position as one
                    of the foremost and most innovative gym equipment manufacturers in the field.
                </p>
                <p className="font-light">
                    Join us on a journey to excellence, where each repetition, each set, is meticulously tailored to optimize your performance.
                </p>
            </div>
        </div>

    )
}

export default Magzine