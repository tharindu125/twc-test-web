import React from 'react'

export default function Contacts() {
  return (
    <div>

        <div className='mt-20 ml-40'>

            <div className='inline-flex '>
                <img src='n.jpg'  alt='' className='w-5 h-5'/>
                <h1 className='text-[25px] text-[#060606] font-bold -mt-3'>twc</h1>
            </div>
                
            <div>
                <h1 className='text-[25px] text-[#000000] font-bold -mt-4'> contacts </h1>
                <h1 className='text-[25px] text-[#020202] font-bold -mt-4'>portal</h1>
            </div>

        </div>

        <div className='flex mx-40 my-5'>
            <h1 className='font-serif text-[50px] font-bold mr-60'>Contacts</h1>
            <div className='my-3 ml-60'>
                <a href='/AddFirstContact' className='border-[3px] rounded-full px-5 py-1 text-[25px] border-black font-bold ' 
                      type='' >add your first contact</a>
            </div>
        </div>

    </div>
  )
}
