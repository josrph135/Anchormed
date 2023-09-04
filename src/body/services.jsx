import React from 'react'
import image1 from '../assets/Frame 39.jpg'
import image2 from '../assets/image3.jpeg'
import image3 from '../assets/image4.jpeg'
import image4 from '../assets/image1.jpg'
import image5 from '../assets/image2.jpg'
import image6 from '../assets/Frame 39.png'

const cardData = [
    {
        image: image1,
        title: "Dental treatment",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        link: "Learn more",
        icon: "fa fa-arrow-right"
    },
    {
        image: image2,
        title: "Bone treatment",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        link: "Learn more",
        icon: "fa fa-arrow-right"
    },
    {
        image: image3,
        title: "Diagnosis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        link: "Learn more",
        icon: "fa fa-arrow-right"
    },
    {
        image: image4,
        title: "Cardiology",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        link: "Learn more",
        icon: "fa fa-arrow-right"
    },
    {
        image: image5,
        title: "Surgery",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        link: "Learn more",
        icon: "fa fa-arrow-right"
    },
    {
        image: image6,
        title: "Eye care",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        link: "Learn more",
        icon: "fa fa-arrow-right"
    },
]

const Services = () => {
  return (
    <div className='flex flex-col gap-8 py-4 text-onprimary-0'>
        <div className='flex flex-col gap-4 md:w-2/3 w-4/5 mx-auto'>
            <h3 className='subhead text-center'>Services we provide</h3>
            <p className='text-onprimary-0 text-sm md:text-base text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quia nulla. Dolorum doloremque quas quis!</p>            
        </div>
        <div className='flex flex-row flex-wrap gap-8 justify-center'>
            {cardData.map((data,i) => 
                <div className='flex md:w-80 w-60 h-auto flex-col gap-4 bg-white p-2 rounded-md drop-shadow-lg' key={i}>
                    <img className='rounded-md h-40 md:w-52 w-full' src={data.image} alt={data.title} />
                    <h3 className='subhead text-[16px]'>{data.title}</h3>
                    <p className='text-xs md:text-sm text-onprimary-0'>{data.desc}</p>
                    <a className='flex flex-row gap-2 items-baseline hover:gap-4 duration-300 transition' href="/">
                        <p className='text-primary-0 font-semibold'>{data.link}</p>
                        <span className='p-1 bg-primary-0 text-whiterounded'><i className={data.icon}></i></span>
                    </a>
                </div>) }
        </div>
    </div>
  )
}

export default Services