// import React from 'react'
// import SpotlightCard from './SpotlightCard';
// import in2 from './in2.png'
// import in3 from './in3.png'
// import in4 from './in4.png'
// const Feature = () => {
//   return (
//     <div className='bg-black min-h-screen w-full '>
     
//       <h1 className='text-center text-white pt-16 pb-6 text-4xl'>Features</h1>
//       <SpotlightCard className="custom-spotlight-card flex" spotlightColor="rgba(0, 229, 255, 0.2)">
//         <div className='flex flex-col'>
//         <h1>Stay Connected</h1>
//         <p>Instantly Connect with multi-device Bluetooth,or fast charge devices with wireless and 36-watt USB-C charging </p>
//         </div>
        
//        <img src={in2} alt="" />
//       </SpotlightCard>
//       <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
//        <img src={in3} alt="" />
//        <div className='flex flex-col'>
//        <h1>Stay Connected</h1>
//         <p>Instantly Connect with multi-device Bluetooth,or fast charge devices with wireless and 36-watt USB-C charging </p>
//         </div>
//       </SpotlightCard>
//       <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
//       <div className='flex flex-col'>
//        <h1>Stay Connected</h1>
//         <p>Instantly Connect with multi-device Bluetooth,or fast charge devices with wireless and 36-watt USB-C charging </p>
//         </div>
//        <img src={in4} alt="" />
//       </SpotlightCard>
//     </div>
//   )
// }

// export default Feature
import React from 'react';
import SpotlightCard from './SpotlightCard';
import in2 from './in2.png';
import in3 from './in3.png';
import in4 from './in4.png';

const Feature = () => {
  return (
    <div className='bg-black min-h-screen w-full py-16'>
      <h1 className='text-center text-white text-7xl font-bold mb-12'>Features</h1>
      <div className='space-y-12 max-w-6xl mx-auto'>
        <SpotlightCard
          spotlightColor='rgba(0, 229, 255, 0.2)'
          className='custom-spotlight-card transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden'
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-6 p-3  rounded-2xl shadow-lg'>
            <img
              src={in2}
              alt='Stay Connected'
              className='w-120 h-90 rounded-lg object-cover shadow-md'
            />
            <div className='text-white max-w-md'>
              <h2 className='text-5xl font-semibold mb-3'>Stay Connected</h2>
              <p className='text-gray-400 text-2xl'>Instantly Connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor='rgba(0, 229, 255, 0.2)'
          className='custom-spotlight-card transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden'
        >
          <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-6 p-3  rounded-2xl shadow-lg'>
            <img
              src={in3}
              alt='Immersive Sound'
              className='w-120 h-90 rounded-lg object-cover shadow-md'
            />
            <div className='text-white max-w-md'>
              <h2 className='text-5xl font-semibold mb-3'>Immersive Sound</h2>
              <p className='text-gray-400 text-2xl'>Experience high-quality audio with noise cancellation and immersive sound to enhance your listening experience.</p>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor='rgba(0, 229, 255, 0.2)'
          className='custom-spotlight-card transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden'
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-6 p-3 rounded-2xl shadow-lg'>
            <img
              src={in4}
              alt='Fast Charging'
              className='w-120 h-90 rounded-lg object-cover shadow-md'
            />
            <div className='text-white max-w-md'>
              <h2 className='text-5xl font-semibold mb-3'>Fast Charging</h2>
              <p className='text-gray-400 text-2xl'>Charge your devices in no time with our advanced 36-watt USB-C charging that supports fast charge modes.</p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Feature;


