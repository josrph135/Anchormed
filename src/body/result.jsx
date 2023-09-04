
import React from 'react'
import image from '../assets/Frame 39.png'
const resultData = [
    {
        result: `99%`,
        tag: "Customer Satisfaction",
    },
    {
        result: `15K`,
        tag: "Online Patients",
    },
    {
        result: `12K`,
        tag: "Patients Recovered",
    },
    {
        result: `240%`,
        tag: "Company Growth",
    }
]

const Result = () => {
  return (
         <div className='flex flex-col'>
            <div className='text-onprimary-0 flex flex-col items-center mt-8 py-4 px-6'>
                <h3 className='subhead pb-4'>Our results in numbers</h3>
                <div className='flex flex-wrap flex-row justify-center gap-4 sm:gap-8'>
                {resultData.map(result => <div key={result.result}>
                    <h2 className='md:text-2xl text-xl text-primary-0 font-extrabold'>{result.result}</h2>
                    <p className='text-sm md:text-base w-1/2 sm:w-full text-center text-onprimary-0 '>{result.tag}</p>
                </div>)}
                </div>
            </div>

            <div className='flex pt-8 text-onprimary-0 md:flex-row flex-col gap-4 px-2 sm:px-8'>
                    <div className='md:w-1/2 flex flex-col justify-center gap-4 items-center'>
                        <h3 className='subhead text-center'>You have lots of reasins to choose us</h3>
                        <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti aperiam perferendis aut nisi voluptas?</p>
                        <div className='flex flex-row gap-4 '>
                        <button className=' bg-gradient-to-r from-[#559297] to-[#7ba949] hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-4 py-3 rounded-lg text-white font-semi-bold shadow-md transition 
                       text-sm md:text-base duration-300 ease-in-out transform hover:scale-105'>Get Started</button>

                        <button className=' bg-gradient-to-r from-[#ffffff] to-[#000000] hover:from-white hover:to-white hover:text-black focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-4 py-3 rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Learn more</button>
                        </div>
                    </div>
                    <div className='md:w-1/2 drop-shadow-lg'>
                    <img src={image} alt="" />
                    </div>
                </div>
                
            </div>
  )
}

export default Result