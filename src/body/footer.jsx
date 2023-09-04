import React from 'react'

function Footer() {
  return (
    <footer style={{backgroundColor: "#70a3a4"}} className=' px-8 py-6'>

     <div className='container mx-auto flex flex-col md:flex-row my-4 justify-between'>
        <div className=' md:w-3/12 ml-4'>
            <div>
                <img src="./src/assets/LOGO.svg" alt="" />
            </div>
            <div className=' flex flex-col gap-y-2 mt-5'>
                <h5 className=' text-xs text-[#ececec] font-medium'> Copyright @ 2023 BRIX Templates</h5>
                <h6 className=' text-xs  text-[#ececec] font-medium'>| All Rights Reserved</h6>
            </div>
        </div>
        <div className=' w-full md:w-7/12 grid grid-cols-2 md:grid-cols-4 mt-10  gap-4 space-y-2'>
            <div className='flex flex-col'>
              <h3 className=' text-base pb-2 font-semibold text-onprimary-0'>Services</h3>
              <ul className=' space-y-2 mt-2 text-[#ececec]'>
                <li className=' text-sm font-normal'>Features</li>
                <li className=' text-sm font-normal'>Pricing</li>
                <li className=' text-sm font-normal'>Case studies</li>
                <li className=' text-sm font-normal'>Reviews</li>
                <li className=' text-sm font-normal'>Updates</li>
              </ul>
            </div>
            
            <div className='flex flex-col'>
              <h3 className=' text-base pb-2 font-semibold text-onprimary-0'>Company</h3>
              <ul className=' space-y-2 mt-2 text-[#ececec]'>
                <li className=' text-sm font-normal'>About</li>
                <li className=' text-sm font-normal'>Contact Us</li>
                <li className=' text-sm font-normal'>Careers</li>
                <li className=' text-sm font-normal'>Culture</li>
                <li className=' text-sm font-normal'>Blog</li>
              </ul>
            </div>

            <div className='flex flex-col'>
              <h3 className=' text-base pb-2 font-semibold text-onprimary-0'>Support</h3>
              <ul className=' space-y-2 mt-2 text-[#ececec]'>
                <li className=' text-sm font-normal'>Getting Started</li>
                <li className=' text-sm font-normal'>Help Center</li>
                <li className=' text-sm font-normal'>Server Status</li>
                <li className=' text-sm font-normal'>Report a bug</li>
                <li className=' text-sm font-normal'>Chat Support</li>
              </ul>
            </div>

            <div className='flex flex-col'>
              <h3 className=' text-base pb-2 font-semibold text-onprimary-0'>Follow Us</h3>
              <ul className=' space-y-2 mt-2 text-[#ececec]'>
                <li className=' text-sm font-normal'>Facebook</li>
                <li className=' text-sm font-normal'>Twitter</li>
                <li className=' text-sm font-normal'>Instagram</li>
                <li className=' text-sm font-normal'>Linkedin</li>
                <li className=' text-sm font-normal'>Youtube</li>
              </ul>
            </div>    

        </div>
      </div>
    </footer>
    
  )
}

export default Footer