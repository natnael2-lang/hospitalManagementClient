import React from 'react'
import p1 from "../../pages/Assets/p1.jpg";
import p2 from "../../pages/Assets/p2.jpg";

const Home = () => {
  return (
      <div className='flex flex-col items-center mt-6 lg:mt-20'>
          <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
              We care about
              <span className='bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text'>
                  {"  " } your health</span> 
          </h1>
          <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
          Ensuring your well-being is our priority. From personalized care to expert guidance, we're committed to supporting your journey to wellness.!</p>
          <div className='flex justify-center my-10'>
              <img className=" rounde-lg w-1/2 border border-blue-700
             shadow-blue-400 mx-2 my-4" src={p1} alt="p1" /> 
               <img className=" rounde-lg w-1/2 border border-blue-700
             shadow-blue-400 mx-2 my-4" src={p2} alt="p2" /> 
              
      </div>
      
    </div>
  )
}

export default Home