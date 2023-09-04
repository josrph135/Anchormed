import React, { useState } from "react";



{/* </nav> for desktop */}
const list = [
      { link: 
          <div className="link z-50 transition relative px-2 md:px-4 hover:underline hover:mb-1">
            <p className=" text-center font-medium" >Patients & Visitors</p>
            <span className="upArrow text-xl font-semibold "><i className="fa-solid fa-angle-up"></i></span>
            <span className="downArrow text-xl font-semibold hidden"><i className="fa-solid fa-angle-down"></i></span>
              {/* dropdown list 1 */}
            <div className="dropDown flex-col hidden z-20 -right-10  top-14 absolute">
            <div className="relative rounded bg-search-0 text-onprimary-0">
              <span className="text-6xl absolute -top-8 left-36 text-search-0  "><i className="fa-solid fa-caret-up"></i></span>
              <div className="divide-dotted divide-y divide-onprimary-0 p-2 flex flex-col">
                <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Admission and registration process</a>
                <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Visiting hours and policies</a>
                <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Parking and transportation</a>
                <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Patient rights and responsibilities</a>
                <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Visitor's guidelines</a>
            </div>
     
            </div>
            </div>
     
          </div>
      },

      {
         link:
          <div className="link z-40 transition px-2 md:px-4 relative hover:underline hover:mb-1">
          <p className=" text-center font-medium" >Services</p>
          <span className="upArrow text-xl font-semibold "><i className="fa-solid fa-angle-up"></i></span>
          <span className="downArrow text-xl font-semibold hidden"><i className="fa-solid fa-angle-down"></i></span>
          {/* dropdown list 2 */}
          <div className="dropDown z-20 flex-col hidden -right-8  top-14 absolute">
            <div className="relative rounded bg-search-0 text-onprimary-0">
              <span className="text-6xl absolute -top-8 left-20 text-search-0  "><i className="fa-solid fa-caret-up"></i></span>
              <div className="divide-dotted divide-y divide-onprimary-0 p-2 flex flex-col">
                <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Overview</a>
                <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">List of services</a>
                <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Service description</a>
              </div>
     
            </div>
          </div>
     
          </div>
      },
      {
        link:
          <div className="link z-30 transition px-2 md:px-4 relative hover:underline hover:mb-1">
        <p className=" text-center font-medium" >Wellness</p>
        <span className="upArrow text-xl font-semibold "><i className="fa-solid fa-angle-up"></i></span>
        <span className="downArrow text-xl font-semibold hidden"><i className="fa-solid fa-angle-down"></i></span>
            {/* dropdown list 3 */}
        <div className="dropDown z-30 flex-col -right-8 hidden top-14 absolute">
          <div className="relative rounded bg-search-0 text-onprimary-0">
            <span className="text-6xl absolute -top-8 left-20 text-search-0  "><i className="fa-solid fa-caret-up"></i></span>
            <div className="divide-dotted divide-y divide-onprimary-0 p-2 flex flex-col">
              <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Healthy living tips</a>
              <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Nutrition resources</a>
              <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Fitness and exercise</a>
              <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Sleep health</a>
            </div> 
          </div>
        </div>
     
          </div>
      },
      {
        link:
          <div className="link z-20 transition relative px-2 md:px-4 hover:underline hover:mb-1">
        <p className=" text-center font-medium" >About Us</p>
        <span className="upArrow text-xl font-semibold "><i className="fa-solid fa-angle-up"></i></span>
        <span className="downArrow text-xl font-semibold hidden"><i className="fa-solid fa-angle-down"></i></span>
          {/* dropdown list 4 */}
        <div className="dropDown z-20 flex-col -right- hidden  top-14 absolute">
          <div className="relative rounded bg-search-0 text-onprimary-0">
            <span className="text-6xl absolute -top-8 left-32 text-search-0  "><i className="fa-solid fa-caret-up"></i></span>
            <div className="divide-dotted divide-y divide-onprimary-0 p-2 flex flex-col">
              <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Hospital overview</a>
              <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Mission and vision</a>
              <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Values and philosophy</a>
              <a href="#" className=" hover:bg-container-0 py-3 px-2 hover:text-inherit">Accreditation and certification</a>
            </div>
     
          </div>
        </div>
     
          </div>
      }
  ]


  /* nav for mobile */
const mobileList = [
 
  

    {
      title: "",
      icon: "fa-solid fa-angle-up",
      dropdown: [""]
    }
]

export default function Header(){
    const [box, setbox] = React.useState(false)
    let [patient, setPatient] =useState(true)
    let [services, setServices] =useState(true)
    let [wellness, setWellness] =useState(true)
    let [aboutUs, setAboutUs] =useState(true)

   function handlePatient(){
    setPatient(item => !item)
    setAboutUs(true)
    setServices(true)
    setWellness(true)

   }
   function handleServices(){
    setServices(item => !item)
    setAboutUs(true)
    setPatient(true)
    setWellness(true)
   }
   function handleWellness(){
    setWellness(item => !item)
    setAboutUs(true)
    setServices(true)
    setPatient(true)
   }
   function handleAboutUs(){
    setAboutUs(item => !item)
    setPatient(true)
    setServices(true)
    setWellness(true)
   }


    return(
      <div className="flex flex-col">
        <div className="flex flex-row text-primary-0 justify-end pr-8 ">
          <a href="" className="text-base flex items-baseline space-x-1"><i className="fa fa-phone text-sm"></i><p>Call Us</p></a>
          <p className="text-onprimary-0 pl-1">07032843427</p>
        </div>
         <header className="py-4 mb-4 bg-primary-0 drop-shadow-lg z-20">
          <div className="px-2 sm:px-6 relative flex flex-row items-center justify-between">
              <a href="#" className="text-center my-auto  z-20  font-semibold">
                <img src="./src/assets/LOGO.svg" alt="" />
              </a>
              <nav className="hidden lg:flex flex-row justify-center whitespace-nowrap divide-x divide-black text-base ">
                {list.map((link, i) => (
                  <div key={i}>{link.link}</div>
                ))}
              </nav>
              <div className="flex flex-row relative">
                <div  className="md:flex hidden flex-row relative">
                <input type="text" placeholder="type" className="w-12 lg:focus:w-52 focus:w-40 transition-all duration-500 text-onprimary-0 ease-linear h-10 bg-secondary-0 rounded-l-2xl outline-none pl-2 placeholder:text-xs placeholder:capitalize bg-inherit"/>
                <span className="text-lg text-onprimary-0 top-2 left-2   absolute"></span>
                <button className="text-lg font-semibold px-3 bg-gradient-to-r from-[#559297] to-[#7ba949]  rounded-r-2xl  focus:bg-secondary-0 focus:text-onprimary-0 "><i className="fa fa-solid fa-search"></i></button> 
                </div>
                <a href="#" onClick={() => setbox(open => !open)} className=" pl-2 lg:hidden">
                    <i className="fa fa-bars text-3xl text-onprimary-0 rounded "></i>
                </a>
              </div>
          </div>
           
            {box && <div className="bg-primary-0  top-1 absolute  w-full h-screen duration-300 transition z-40  py-4 px-2">
              <a href="#" className="text-center my-auto absolute -top-2 left-4 z-20 w-44  font-semibold">
                <img src="./src/assets/LOGO.svg" alt="" />
              </a>
              <span onClick={() => setbox(open => !open)} className="text-3xl float-right pr-2"><i className="fa fa-xmark"></i></span>
              <ul className="mt-16 flex flex-col gap-4">

                  <div  className="flex w-full justify-end  px-2 flex-row relative">
                <input type="text" placeholder="type" className="w-2/5 lg:focus:w-full focus:w-full transition-all duration-500 text-onprimary-0 ease-linear h-10 bg-secondary-0 rounded-l-xl outline-none pl-2 placeholder:text-xs placeholder:capitalize bg-inherit"/>
                <span className="text-lg text-onprimary-0 top-2 left-2   absolute"></span>
                <button className="text-lg font-semibold px-3 bg-gradient-to-r from-[#559297] to-[#7ba949]  rounded-r-2xl  focus:bg-secondary-0 focus:text-onprimary-0 "><i className="fa fa-solid fa-search"></i></button> 
                  </div>
                  <>
                    <li onClick={handlePatient} className="patient flex p-2 hover:bg-white   hover:bg-opacity-30 rounded-md flex-row justify-between sm:text-2xl text-lg">
                      <span>Patients & Visitors</span>
                      <span className={`${patient && "rotate-180"} duration-300`}><i className="fa fa-solid fa-angle-up"></i></span>
                    </li>

                    <ul className={`flex ${patient && "hidden"} flex-col sm:text-lg text-base px-3 sm:px-6`}>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Admission and registration process
                        </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Visiting hours and policies
                       </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                        Parking and transportation
                        </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                        Patient rights and responsibilities
                        </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                        Visitors guidelines
                        </li>
                    </ul>
                  </>
                  <>
                    <li onClick={handleServices} className="flex p-2 hover:bg-white   hover:bg-opacity-30 rounded-md flex-row justify-between sm:text-2xl text-lg">
                      <span>Services</span>
                      <span className={`${services && "rotate-180"} duration-300`}><i className="fa fa-solid fa-angle-up"></i></span>
                    </li>

                    <ul className={`flex ${services && "hidden"} flex-col sm:text-lg text-base px-3 sm:px-6`}>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Overview 
                        </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          List of services
                       </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                        Services description
                        </li>
                    </ul>
                  </>
                  <>
                    <li onClick={handleWellness} className="flex p-2 hover:bg-white   hover:bg-opacity-30 rounded-md flex-row justify-between sm:text-2xl text-lg">
                      <span>Wellness</span>
                      <span className={`${wellness && "rotate-180"} duration-300`}><i className="fa fa-solid fa-angle-up"></i></span>
                    </li>

                    <ul className={`flex ${wellness && "hidden"} flex-col  sm:text-lg text-base px-3 sm:px-6`}>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Healthy living tips 
                        </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Nutrition resources
                       </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Fitness and exercise
                        </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Sleep health
                        </li>
                    </ul>
                  </>
                  <>
                    <li onClick={handleAboutUs} className="aboutUs flex p-2 hover:bg-white sm:text-2xl text-lg  hover:bg-opacity-30 rounded-md flex-row justify-between ">
                      <span>About Us</span>
                      <span className={`${aboutUs && "rotate-180"} duration-300`}><i className="fa fa-solid fa-angle-up"></i></span>
                    </li>

                    <ul className={`flex ${aboutUs && "hidden"} flex-col sm:text-lg text-base px-3 sm:px-6`}>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Hospital overview 
                        </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Values and philosophy
                       </li>
                        <li className="p-2 w-full hover:bg-white hover:bg-opacity-30 rounded-md">
                          Accreditation and certification
                        </li>
                    </ul>
                  </>
              </ul>

             
            </div>}
        </header>
      </div>
       
    )
}