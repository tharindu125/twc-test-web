import React from 'react';
import '../App.css'

export default function Login() {
  return (
    <div >

      <div className="bg-[#083F46] h-[55rem] w-[50rem] border-[1px] border-lime-900 rounded-r-full -mt-20 flex" >

        <div className='mt-[180px] px-32  '>

          <h1 className='text-[50px] font-bold text-white'  >
            Hi there,
          </h1>

          <h1 className='text-[30px] text-white'>
            Welcome to our <br/> contacts portal
          </h1>

          <div>

            <input className=' mt-16 rounded-full h-16 w-[28rem] placeholder:text-[#083F46]  placeholder:text-[25px] placeholder:font-bold' placeholder="      e-mail"/>
            <input className=' mt-10 rounded-full h-16 w-[28rem] placeholder:text-[#083F46]  placeholder:text-[25px] placeholder:font-bold' placeholder="      password"/>
            <br/>
            <button className=' border-[2px] rounded-full text-[23px] px-8 py-2 mt-10 text-white'>login</button>

          </div>

        </div>

        <div className='mt-[280px] px-[220px]'>

          <div className='inline-flex'>
            <img src='n.jpg'  alt='' className='w-20 h-20'/>
            <h1 className='text-[75px] text-[#000000] font-bold -mt-5'>twc</h1>
          </div>

          <div>
              <h1 className='text-[75px] text-[#083F46] font-bold -mt-10'> contacts </h1>
              <h1 className='text-[75px] text-[#083F46] -mt-10'>portal</h1>
          </div>
          
        </div>
        
      </div>

    </div>
    
  )
}
