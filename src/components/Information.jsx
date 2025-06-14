import React from 'react'

const Information = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10 dark:bg-black dark:text-gray-200">

            {/* Left Section */}
            <div className="w-full lg:w-1/2">
                <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
                    Innovation with Perfection
                </h1>
                <p className="mb-4 font-light text-gray-800 dark:text-gray-300">
                    At Jerai Fitness, we are leading the way in transforming the fitness industry, driven by an unwavering commitment to excellence. All our products showcase top-notch quality. We provide both personal and commercial options in Fitness Equipment and Leading Gym Equipment Brands in India. Our distinction lies not only in our weight racks or gym equipment inventory, although we do offer those. What truly sets us apart is our team. Each member of the Jerai Fitness team is deeply committed to understanding your needs and delivering a tailored fitness solution. Our fitness equipment is of superior quality, ensuring nothing but the best for our customers. Whether you're establishing a gym or setting up a <span className='underline font-bold text-blue-700'>home fitness</span> space, our team of custom fitness equipment manufacturers will grasp your requirements and recommend the finest options.
                </p>
                <p className="mb-4 font-light text-gray-800 dark:text-gray-300">
                    Strategically situated in Mumbai, our gym equipment manufacturing facility is thoughtfully designed and houses a wide range of fitness equipment. We boast the perfect equipment assortment to cater to everyone's needs, whether you're a novice or an experienced gym-goer.
                </p>
                <p className="font-light text-gray-800 dark:text-gray-300">
                    Choosing Jerai Fitness means more than just obtaining <span className='underline font-bold text-blue-700'>gym equipment </span>; it entails forming a partnership with a dedicated team that goes above and beyond to support you on your fitness journey.
                </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
                <div className="h-[60%] border-l-2 border-gray-300 dark:border-gray-600"></div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2">
                <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
                    Meticulously Engineered <br />Finest Biomechanics
                </h1>
                <p className="mb-4 font-light text-gray-800 dark:text-gray-300">
                    With precise focus on biomechanics, we craft premier fitness solutions. The growing awareness of and appreciation for physical exercise have led to an increased demand for functional training equipment. The market is thriving with requests for machines and training gear. Whether you're in search of simplicity or robust machinery, our array of offerings covers all bases. Expertly designed by professionals, our products adhere strictly to the highest quality standards. The trust bestowed upon us by our satisfied and loyal customers across India speaks volumes about the effectiveness and longevity of our equipment brand in India.
                </p>
                <p className="font-light text-gray-800 dark:text-gray-300">
                    At Jerai Fitness, we don't just offer equipment; we strive to cultivate a vibrant fitness atmosphere that keeps you inspired throughout your fitness journey. Our top-tier fitness equipment includes cutting-edge exercise machines, free weights, indoor cycling options, treadmills, and much more.
                </p>
            </div>

        </div>

    )
}

export default Information