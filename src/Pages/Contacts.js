import React, { useState } from 'react'
import Cookies from "js-cookie";
import { jwtVerify } from "jose";
import { useEffect } from 'react';
import ContactList from '../components/ContactList';
export default function Contacts() {

    const [contacts,setContacts] = useState(null)

    async function verify(token) {
        try {
          const {payload} = await jwtVerify(
            token,
            new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET)
          );
        //   console.log(payload);
          return payload;
        } catch (error) {
            alert(error.message)
            window.location.href = "/Login";
        }
      }

    
      const deleteContact = async(id) => {
        const res = await fetch(`http://localhost:5000/contact/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if (res.ok) window.location.reload()
        if (!res.ok) {
            const data = await res.json()
            console.log(data);
        }
           
    }
      useEffect(() => {
        const token = Cookies.get("jwt");
        if (token === undefined) window.location.href = "/Login";
        verify(token)
          .then(async(result) => {
            try {
                const {email} = result.user;
                const res = await fetch(`http://127.0.0.1:5000/contact/findbyowner/${email}`)
                const data = await res.json()
                if (!res.ok) {
                    const {error} = data
                    throw Error(error)
                } 
                // console.log(data);
                setContacts(data)
            } catch (error) {
                console.error(error.message);
            } 
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
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

        {
            contacts && <ContactList contacts={contacts} deleteContact={deleteContact} />
        }

    </div>
  )
}
