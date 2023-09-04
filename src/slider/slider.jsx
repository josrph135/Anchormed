import {useState, useEffect} from "react";
import "./slider.css"

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpeg'

const SliderData = [   
        { 
            image: image1,
            heading: "slide one",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
        {
            image: image2,
            heading: "slide two",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
        {
            image: image3,
            heading: "slide three",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
        {
            image: image4,
            heading: "slide four",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
        {
            image: image5,
            heading: "slide five",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
    
        {
            image: image6,
            heading: "slide six",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
    ]
    
    export default function Slider(){

const [currentSlide, setCurrentSlide] = useState(0) 
const slideLength = SliderData.length;
// slideLength = 1 2 3
// currentSlide = 0 1 2

const autoScroll = true
let slideInterval 
let intervalTime = 5000;

const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
}
const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
}

function auto(){
    slideInterval = setInterval(nextSlide, intervalTime)
}


useEffect(() => {
    setCurrentSlide(0)
},[])

useEffect(() => {
    if(autoScroll){
        auto();
    }
    return () => clearInterval(slideInterval)
}, [currentSlide]);


    return(
        <div className="w-[90%] rounded mx-auto h-[40vh] sm:h-[50vh] md:h-[60vh]  relative overflow-hidden">
             <span className="border border-white bg-transparent text-white h-6 w-6 cursor-pointer absolute z-10 rounded-full text-center my-auto top-1/2 left-2 md:left-4 hover:bg-white hover:text-onprimary-0 duration-300">
                <i className=" fa-solid fa-arrow-left" onClick={prevSlide}></i>
            </span>
            <span className="border border-white bg-transparent text-white h-6  w-6  cursor-pointer absolute z-10 rounded-full text-center my-auto top-1/2 right-2 md:right-4 hover:bg-white hover:text-onprimary-0 duration-300">
                <i className="fa-solid fa-arrow-right" onClick={nextSlide}></i>
            </span>

          
   
            {SliderData.map((slide, index) => {
                return(
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="" />
                                <div className="content absolute top-10 sm:top-12 md:top-20 left-20 mx-auto w-1/2 md:px-8 px-4 py-4">
                                    <h2 className="text-sm md:text-base  w-fit bg-gradient-to-r from-[#559297] to-[#7ba949] px-2 py-1 rounded  uppercase">{slide.heading}</h2>
                                    <p className="text-xs sm:text-sm md:w-full md:text-base ">{slide.desc}</p>
                                    <hr />
                                    <a href="#" className="bg-gradient-to-r from-[#559297] to-[#7ba949] hover:from-purple-600 hover:to-blue-600 px-4 py-2 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 text-sm md:text-base cursor-pointer rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">Get started</a>
                                </div>
                            </>
                        )}
                        
                    </div>
                )
            })}
        </div>
    )
}