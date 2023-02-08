import React, { useState } from 'react';
import '../App.css'

export default function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')



  const signIn = async()=>{
    try {
      const res = await fetch('http://localhost:5000/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password}),
        credentials: 'include'
      })
      if (!res.ok) {
        const {error} = await res.json()
        throw Error(error)
      }
      if (res.ok) window.location.href = "/"
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div >

      <div className="bg-[#083F46] h-[55rem] xl:w-[40rem] w-[50rem] border-[1px] border-lime-900 rounded-r-full -mt-20 flex" >

        <div className='mt-[180px] px-32  '>

          <h1 className='text-[50px] font-bold text-white'  >
            Hi there,
          </h1>

          <h1 className='text-[30px] text-white'>
            Welcome to our <br/> contacts portal
          </h1>

          <div>

            <input type="email" className=' mt-16 rounded-full xl:h-14 xl:w-[25rem] h-16 w-[28rem] px-5 text-[20px] placeholder:text-[#083F46]  placeholder:text-[25px] placeholder:font-bold' placeholder="      e-mail" value={email}  onInput={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" className=' mt-10 rounded-full xl:h-14 xl:w-[25rem] h-16 w-[28rem] px-5 text-[20px] placeholder:text-[#083F46]  placeholder:text-[25px] placeholder:font-bold' placeholder="      password" value={password} onInput={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            <button className=' xl:px-7 xl:py-1 border-[2px] rounded-full text-[23px] px-8 py-2 mt-10 text-white' onClick={signIn}>login</button>

          </div>

        </div>

        <div className='mt-[280px] px-[220px] xl:px-[180px] '>

          <div className='inline-flex'>
            <img src='logo.png'  alt='' className='w-22 h-28'/>
            <h1 className='text-[75px] text-[#000000] font-bold -mt-3'>twc</h1>
          </div>

          <div>
              <h1 className='text-[75px] text-[#083F46] font-bold -mt-14'> contacts </h1>
              <h1 className='text-[75px] text-[#083F46] -mt-10'>portal</h1>
          </div>
          
        </div>
        
      </div>

    </div>
    
  )
}
