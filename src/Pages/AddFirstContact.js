import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import { jwtVerify } from "jose";
export default function AddFirstContact() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [gender,setGender] = useState('')
    const [owner,setOwner] = useState('')


    async function verify(token) {
        try {
          const {payload} = await jwtVerify(
            token,
            new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET)
          );
          return payload;
        } catch (error) {
          return false;
        }
      }

    

    useEffect(()=>{
        const token = Cookies.get("jwt");
        if (token === undefined) window.location.href = "/Login";
        verify(token)
          .then(async(result) => {
            const {email} = result.user;
            setOwner(email)
          })
          .catch((error) => {
            console.log(error);
          });
    },[])

    const addContact = async()=>{
        try {
            const res = await fetch('http://localhost:5000/contact',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name,email,phone_number:phone,gender,owner})
            })
            const data = await res.json()
            if (!res.ok) {
                const {error} = data;
                throw Error(error)
            }
            if (res.ok) window.location.href = "/Contacts"
        } catch (error) {
            console.log(error);
        }
    }
    
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

            <div>

                <h1 className='font-serif text-[50px] font-bold my-6 mx-40' >New Contact</h1>

                <div className='grid h-32 grid-cols-2 gap-2 mx-40 place-content-center'>

                    <input type="text" value={name} onInput={e=>setName(e.target.value)} className=' mt-14 rounded-full h-16 w-[28rem] text-zinc-50 text-[25px] pl-5 placeholder:text-[#f9f9f9]  placeholder:text-[25px] placeholder:font-bold bg-black' placeholder="      full name"/>
                    <input type="email" value={email} onInput={e=>setEmail(e.target.value)} className=' mt-14 rounded-full h-16 w-[28rem] text-zinc-50 text-[25px] pl-5 placeholder:text-[#ffffff]  placeholder:text-[25px] placeholder:font-bold bg-black' placeholder="      e-mail"/>
                    <input type="text" value={phone} onInput={e=>setPhone(e.target.value)} className=' mt-14 rounded-full h-16 w-[28rem] text-zinc-50 text-[25px] pl-5 placeholder:text-[#ffffff]  placeholder:text-[25px] placeholder:font-bold bg-black' placeholder="      phone number"/>
                    <form className='flex mx-5 text-[25px] font-bold my-10'>
                        <label>gender</label>
                        <input type="radio" className='mx-5' name="gender"  onInput={()=>{setGender('Male')}} />
                        <label for="html">male</label><br/>
                        <input type="radio" className='mx-5' name="gender" onInput={()=>{setGender('Female')}}/>
                        <label for="css">female</label><br/>
                    </form>

                </div>
                
                <div className='mx-40 mt-28 '>
                    <span onClick={addContact} className='border-[3px] rounded-full px-5 py-1 text-[25px] border-black font-bold' 
                      type='button' >add your first contact</span>
                </div>
                
            </div>

    </div>
  )
}


