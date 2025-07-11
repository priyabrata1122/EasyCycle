import React from 'react'
import './App.css'

function App() {

  return (
    <div>
      <div className='border-black border-1 rounded-2xl w-[97%] h-auto min-h-[30rem] bg-center mt-22 relative left-5 app'>

          <h1 className='relative top-[7rem] left-[4rem] text-white text-2xl md:text-4xl lg:text-5xl hidden sm:block md:block lg:block'>No Cycle? No Problem.</h1>
          <h2 className='relative top-[9rem] left-[4rem] text-white text-xl md:text-2xl lg:text-3xl hidden sm:block md:block lg:block'>Easily find, borrow, and ride <br /> a campus cycle whenever you need it.</h2>
          <button className='relative top-[15rem] left-[4rem] w-auto h-auto bg-white  text-2xl rounded-xl pt-2 pb-2 pl-4 pr-4 hover:bg-gray-200 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 cursor-pointer'>Get Started</button>
      </div>

      <div className='relative mt-10 w-[97%] left-5 min-h-[20rem] flex flex-col items-center mb-10'>
        <h1 className='mt-2 font-bold font-serif sm:text-3xl md:text-4xl lg:text-5xl' >🚲 Top Values for You</h1>
        <h2 className='mt-4 font-serif text-gray-600 sm:text-xl md:text-2xl lg:text-3xl'>Try a variety of benefits when using our cycle sharing service:</h2>

        <div className='mt-15 w-[96%] min-h-[5rem] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          <div className='flex flex-col justify-center items-center text-center border-1 border-black p-5 rounded-2xl bg-gray-100 hover:(bg-gray-200 shadow-2xl) transition-transform duration-300 transform hover:scale-105'>
            <h1 className='font-bold lg:text-2xl md:text-xl sm:text-xl'>🚐 Easy Access Points</h1>
            <h2 className='text-gray-600 lg:text-xl md:text-xl sm:text-xl mt-3'>Pick up and drop cycles at multiple stations across campus in just a few steps.</h2>
          </div>
          <div className='flex flex-col justify-center items-center text-center border-1 border-black p-5 rounded-2xl bg-gray-100 hover:(bg-gray-200 shadow-2xl) transition-transform duration-300 transform hover:scale-105'>
            <h1 className='font-bold lg:text-2xl md:text-xl sm:text-xl'>📝 Simple Booking</h1>
            <h2 className='text-gray-600 lg:text-xl md:text-xl sm:text-xl mt-3'>Reserve a cycle instantly with our smooth and user-friendly booking system.</h2>
          </div>
          <div className='flex flex-col justify-center items-center text-center border-1 border-black p-5 rounded-2xl bg-gray-100 hover:(bg-gray-200 shadow-2xl) transition-transform duration-300 transform hover:scale-105'>
            <h1 className='font-bold lg:text-2xl md:text-xl sm:text-xl'>👨‍🔧 Maintenance Ready</h1>
            <h2 className='text-gray-600 lg:text-xl md:text-xl sm:text-xl mt-3'>Our campus team ensures all cycles are regularly maintained and ready to ride.</h2>
          </div>
          <div className='flex flex-col justify-center items-center text-center border-1 border-black p-5 rounded-2xl bg-gray-100 hover:(bg-gray-200 shadow-2xl) transition-transform duration-300 transform hover:scale-105'>
            <h1 className='font-bold lg:text-2xl md:text-xl sm:text-xl'>🎁 Exclusive Offers</h1>
            <h2 className='text-gray-600 lg:text-xl md:text-xl sm:text-xl mt-3'>Enjoy campus-specific offers, ride discounts, and loyalty rewards.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App