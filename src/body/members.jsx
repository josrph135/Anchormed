import React from 'react'
import image1 from '../assets/Frame 40.png'
import image2 from '../assets/Frame 41.png'
import image3 from '../assets/Frame 42.png'
import image4 from '../assets/Frame 43.png'
import image5 from '../assets/Frame 44.png'
import image6 from '../assets/Frame 40.png'

const cardData = [
    {
        image: image1,
        name: "Dr Smith",
        title: "Gynaecologist",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        icon1: "fa-brands fa-facebook",
        icon2: "fa-brands fa-twitter",
        icon3: "fa-brands fa-instagram"
    },
    {
        image: image2,
        name: "Dr Smith",
        title: "Surgeon",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        icon1: "fa-brands fa-facebook",
        icon2: "fa-brands fa-twitter",
        icon3: "fa-brands fa-instagram"
    },
    {
        image: image3,
        name: "Dr Smith",
        title: "Dentist",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        icon1: "fa-brands fa-facebook",
        icon2: "fa-brands fa-twitter",
        icon3: "fa-brands fa-instagram"      
    },
    {
        image: image4,
        name: "Dr Smith",
        title: "Cardiologist",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        icon1: "fa-brands fa-facebook",
        icon2: "fa-brands fa-twitter",
        icon3: "fa-brands fa-instagram"      
    },
    {
        image: image5,
        name: "Dr Smith",
        title: "Surgeon",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        icon1: "fa-brands fa-facebook",      
        icon2: "fa-brands fa-twitter",
        icon3: "fa-brands fa-instagram"
    },
    {
        image: image6,
        name: "Dr Smith",
        title: "Gynaecologist",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus incidunt et eum harum officia.",
        icon1: "fa-brands fa-facebook",
        icon2: "fa-brands fa-twitter",
        icon3: "fa-brands fa-instagram"      
    },
]



const Members = () => {
  return (
    <div className='px-8 flex flex-col gap-8 py-4 text-onprimary-0'>
        <div className='flex flex-col gap-4 w-2/3 mx-auto'>
            <h3 className='subhead text-center'>Meet Our Team Members</h3>
            <p className='text-onprimary-0 text-sm md:text-base text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quia nulla. Dolorum doloremque quas quis!</p>            
        </div>
        <div className='flex flex-row flex-wrap text-onprimary-0 gap-8 justify-center'>
        {cardData.map((card,i) => 
            <div className='flex md:w-80 w-60 drop-shadow-lg h-auto flex-col gap-2 bg-white p-4 rounded-md justify-center items-center' key={i}>
                <img className='w-32 md:w-40 ring ring-primary-0 h-32 md:h-40 rounded-full' src={card.image} alt="" />
                <h2 className='subhead text-base md:text-lg'>{card.name}</h2>
                <h2 className='subhead text-base md:text-lg'>{card.title}</h2>
                <p className='text-sm md:text-base text'>{card.desc}</p>
                <div className='flex flex-row w-1/2 mx-auto justify-between text-2xl'>
                    <a href='/'><i className={card.icon1}></i></a>
                    <a href='/'><i className={card.icon2}></i></a>
                    <a href='/'><i className={card.icon3}></i></a>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default Members