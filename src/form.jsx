import { useState } from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        phoneNum: 0,
        topic: "",
        message: "",
        agree: false
    })
    
    function handelclick(event){
        const {name, value, type, checked} = event.target
        setFormData(prev => {
            return{
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function formsubmit(event){
        event.preventDefault()
        
    }

    return(
        <form onSubmit={formsubmit}  className="flex pt-12 text-onprimary-0 flex-col bg-slate-200 rounded  mx-auto p-4">
        <div className="flex flex-col md:w-2/3 w-4/5 mx-auto p-4">
            <div className="flex flex-col gap-4 pb-6 text-center">
                <h2 className="subhead font-bold">
                    Contact Us
                </h2>
                <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="flex flex-row font-semibold gap-4 flex-wrap justify-between w-full">
                <div className="flex flex-col w-full md:w-[48%]  gap-2">
                    <label htmlFor="Fname">First name</label>
                    <input 
                        onChange={handelclick}
                        type="text"
                        value={formData.fName}
                        name="fName"
                        className="border border-teal-400 text-sm md:text-base rounded font-light p-2 bg-slate-100 outline-none placeholder:text-gray-700" 
                        id="Fname" 
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="flex flex-col w-full md:w-[48%] gap-2"> 
                    <label htmlFor="Lname">Last name</label>
                    <input 
                        type="text" 
                        name="lName"
                        value={formData.lName}
                        className="border border-teal-400 text-sm md:text-base rounded font-light p-2 bg-slate-100 outline-none placeholder:text-gray-700" 
                        id="Lname" 
                        placeholder="Enter your last name"
                        onChange={handelclick}
                        
                    />
                </div>
                <div className="flex flex-col w-full md:w-[48%] gap-2">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        className="border border-teal-400 text-sm md:text-base rounded font-light p-2 bg-slate-100 outline-none placeholder:text-gray-700" 
                        id="email" 
                        placeholder="Enter your email"
                        onChange={handelclick}
                    />
                </div>
                <div className="flex flex-col  w-full md:w-[48%] gap-2">
                    <label htmlFor="phoneNo">Phone number</label>
                    <input 
                        type="num" 
                        name="phoneNum"
                        value={formData.phoneNum}
                        onChange={handelclick}
                        className="border border-teal-400 text-sm md:text-base rounded font-light p-2 bg-slate-100 outline-none placeholder:text-gray-700" 
                        id="phoneNo" 
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="topic">Choose a topic</label>
                    <select  
                        className="border border-teal-400 text-sm md:text-base rounded font-light p-2 bg-slate-100 outline-none" 
                        name="topic" 
                        id="topic"
                        onChange={handelclick}
                        
                    >
                        <option value="Fitness">Fitness</option>
                        <option value="BloodSugar">Blood Sugar</option>
                    </select>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        className="border h-40 border-teal-400 text-sm md:text-base rounded font-light p-2 bg-slate-100 outline-none placeholder:text-gray-700" 
                        name="message" 
                        value={formData.message}
                        onChange={handelclick}
                        id="message" cols="30" rows="10">
                    </textarea>
                </div>
                <div className="flex flex-row gap-2 my-auto">
                    <input 
                        name="agree"
                        checked={formData.agree}
                        id="agree"
                        onChange={handelclick}
                        type="checkbox" />
                    <label htmlFor="agree">I accept the terms</label>
                </div>
            </div>
            <button type="submit" className='mx-auto mt-8 bg-gradient-to-r from-[#559297] to-[#7ba949] hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 text-sm md:text-base px-6 py-3 rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Submit</button>
        </div>
        
        </form>
    )
}