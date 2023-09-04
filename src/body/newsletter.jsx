import React from 'react'

function Newsletter() {
     
    const [newsletter , setNewsletter] = React.useState({
        email : ""
    })

    function handleChange(event) {
        
        setNewsletter(prevData => {
            const {name, value} = event.target
            return{
                ...prevData, [name]: value
            }
        })
    }

  return (
    <div className=' container mx-auto mb-16 flex flex-col'>
       <div className=' flex flex-col '>
          <div className=' flex flex-row justify-center'>
            <h2 className='subhead py-3' style={{color:"#559297"}}>Subscribe To Our Newsletter</h2>
          </div>

          <div className=' flex  justify-center '>
            <form action="" className=' flex flex-row items-center md:gap-10 gap-4 justify-between'>
                <input type="text" placeholder=' Enter your email ' value={newsletter.email} name='email' onChange={handleChange} className="border p-3 md:w-[350px] w-4/5 rounded-2xl text-sm md:text-base focus:outline-none focus:border-yellow-600 focus:border-2"/>

                <button className="mx-auto bg-gradient-to-r from-[#559297] to-[#7ba949] hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-3 text-sm md:text-base rounded-2xl  text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">Suscribe</button>
            </form>
          </div>
        </div>


    </div>
  )
}

export default Newsletter