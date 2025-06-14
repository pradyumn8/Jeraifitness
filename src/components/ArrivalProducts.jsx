import React from 'react'
import { assets } from '../assets/assets'

const ArrivalProducts = () => {
    return (
    <div className="text-center my-20 bg-white dark:bg-black py-10 px-4">
  <h1 className="text-red-600 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
    New arrivals
  </h1>

<div className="max-w-6xl mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Card 1 */}
   <div className="overflow-hidden w-fit group mx-auto border-b-2 border-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={assets.REARDELT}
    alt="PEC FLY/REAR DELT"
    className="object-contain h-[400px] lg:h-[300px]"
  />
  <div className="text-center mt-12 mb-2">
    <h3 className="text-sm font-bold text-black dark:text-white">PEC FLY/REAR DELT</h3>
  </div>
</div>

    {/* Card 2 */}
     <div className="overflow-hidden  w-fit group mx-auto border-b-2 border-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={assets.DING}
    alt="PEC FLY/REAR DELT"
    className="object-contain h-[400px] lg:h-[300px]"
  />
  <div className="text-center mt-12 mb-2">
    <h3 className="text-sm font-bold text-black dark:text-white">STANDING MULTI ARMS</h3>
  </div>
</div>


    {/* card 3 */}
        <div className="overflow-hidden w-fit group mx-auto border-b-2 border-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={assets.RAISE}
    alt="PEC FLY/REAR DELT"
    className="object-contain h-[400px] lg:h-[300px]"
  />
  <div className="text-center mt-12 mb-2">
    <h3 className="text-sm font-bold text-black dark:text-white">SEATED PEC FLY LATERAL RAISE <br /> COMBO</h3>
  </div>
</div>

    {/* Card 4 */}
    <div className="overflow-hidden w-fit group mx-auto border-b-2 border-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={assets.TAPDSC}
    alt="PEC FLY/REAR DELT"
    className="object-contain h-[400px] lg:h-[300px]"
  />  
  <div className="text-center mt-12 mb-2">
    <h3 className="text-sm font-bold text-black dark:text-white">TWIN ADJUSTABLE PULLEY</h3>
  </div>
</div>

    {/* Card 5 */}
      <div className="overflow-hidden w-fit group mx-auto border-b-2 border-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={assets.Multi}
    alt="PEC FLY/REAR DELT"
    className="object-contain h-[400px] lg:h-[300px]"
  />
  <div className="text-center mt-12 mb-2">
    <h3 className="text-sm font-bold text-black dark:text-white">MULTI LINEAR BENCH</h3>
  </div>
</div>

    {/* card 6 */}
       <div className="overflow-hidden w-fit group mx-auto border-b-2 border-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={assets.curve}
    alt="PEC FLY/REAR DELT"
    className="object-contain h-[400px] lg:h-[300px]"
  />
    <div className="text-center mt-12 mb-2">
    <h3 className="text-sm font-bold text-black dark:text-white">CURVE TREADMILL JCT - 700</h3>
  </div>
</div>

    {/* card 7*/}
      <div className="overflow-hidden w-fit group mx-auto border-b-2 border-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={assets.READMILLJCT}
    alt="PEC FLY/REAR DELT"
    className="object-contain h-[400px] lg:h-[300px]"
  />
  <div className="text-center mt-12 mb-2">
    <h3 className="text-sm font-bold text-black dark:text-white">CURVE TREADMILL JCT - 800</h3>
  </div>
</div>

    {/* card 8*/}
    <div className="overflow-hidden w-fit group mx-auto border-b-2 border-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={assets.CLIMBERJSTP}
    alt="PEC FLY/REAR DELT"
    className="object-contain h-[400px] lg:h-[300px]"
  />
  <div className="text-center mt-12 mb-2">
    <h3 className="text-sm font-bold text-black dark:text-white">STEP-UP CLIMBER JSTP - 07</h3>
  </div>
</div>

    {/* card 9*/}
      <div className="overflow-hidden w-fit group mx-auto border-b-2 border-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={assets.CLIMBER}
    alt="PEC FLY/REAR DELT"
    className="object-contain h-[400px] lg:h-[300px]"
  />
<div className="text-center mt-12 mb-2">
  <h3 className="text-sm font-bold text-black dark:text-white">
    STEP-UP CLIMBER JSTP - 10
  </h3>
</div>

</div>


  </div>
</div>

        </div>

    )
}

export default ArrivalProducts