import React from 'react'

export default function Welcome() {
  return (
    <div>
          <div className='m-20 '>
             
             <div className='inline-flex '>
                  <img src='n.jpg'  alt='' className='w-5 h-5'/>
                  <h1 className='text-[25px] text-[#060606] font-bold -mt-3'>twc</h1>
             </div>
             
             <div>
                  <h1 className='text-[25px] text-[#000000] font-bold -mt-4'> contacts </h1>
                  <h1 className='text-[25px] text-[#020202] font-bold -mt-4'>portal</h1>
            </div>

            <div>
                  <h1 className='font-serif text-[80px] font-bold'>Welcome,</h1>
                  <p className=' text-[40px]'>This is where your contacts will live. Click the button bellow <br/> to add a new contact.</p>

                  <div className='mt-8'>
                      <a href='/AddFirstContact' className='border-[3px] rounded-full px-5 py-1 text-[25px] mt-7 border-black font-bold' 
                          type="button" 
                          >add your first contact</a>
                  </div>
                  
            </div>

          </div>

    </div>
  )
}
