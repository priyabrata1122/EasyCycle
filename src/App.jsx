import React from 'react'
import './App.css'

function App() {

  return (
    <div>
      <div className='border-black border-1 rounded-2xl w-[97%] h-[36rem] mt-22 relative left-5 app'>

      </div>

      <div className='relative mt-10 w-[97%] left-5 min-h-[20rem] flex flex-col items-center'>
        <h1 className='mt-2 font-bold font-serif sm:text-3xl md:text-4xl lg:text-5xl' >🚲 Top Values for You</h1>
        <h2 className='mt-4 font-serif text-gray-600 sm:text-xl md:text-2xl lg:text-3xl'>Try a variety of benefits when using our cycle sharing service:</h2>

        <div className='mt-15 w-[96%] min-h-[5rem] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold text-2xl'>🚐 Easy Access Points</h1>
            <h2 className='text-gray-600 text-xl mt-3'>Pick up and drop cycles at multiple stations across campus in just a few steps.</h2>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold text-2xl'>📝 Simple Booking</h1>
            <h2 className='text-gray-600 text-xl mt-3'>Reserve a cycle instantly with our smooth and user-friendly booking system.</h2>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold text-2xl'>👨‍🔧 Maintenance Ready</h1>
            <h2 className='text-gray-600 text-xl mt-3'>Our campus team ensures all cycles are regularly maintained and ready to ride.</h2>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold text-2xl'>🎁 Exclusive Offers</h1>
            <h2 className='text-gray-600 text-xl mt-3'>Enjoy campus-specific offers, ride discounts, and loyalty rewards.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App