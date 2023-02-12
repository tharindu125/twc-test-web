import React, { useState } from 'react'
import Cookies from "js-cookie";
import { jwtVerify } from "jose";
import { useEffect } from 'react';
import ContactList from '../components/ContactList';
import DeleteMsg from '../components/DeleteMsg';

export default function Contacts() {

    const [contacts,setContacts] = useState(null)
    const[showDeleteMsg,setShowDeleteMsg] = useState(false)

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

      //delete
      const deleteContact = async(id) => {
        const res = await fetch(`http://localhost:5000/contact/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        // if (res.ok) window.location.reload()
        if (res.ok) deleteModel(true)
        if (!res.ok) {
            
            const data = await res.json()
            console.log(data);
        }
        
      }

      function deleteModel(x) {
          setShowDeleteMsg(x)
          
      }
     function handleOkay() {
          window.location.reload()
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
      <div className=" ellipse-1">
        <div className='mt-[10rem] ml-20  body00'>

          <div className='mt-20 ml-40'> 

              <div className='inline-flex '>
                  <img src='logo.png'  alt='' className='w-8 h-10'/>
                  <h1 className='text-[25px] text-[#ffffff] font-bold'>twc</h1>
              </div>
                  
              <div>
                  <h1 className='text-[25px] text-[#ffffff] font-bold -mt-4'> contacts </h1>
                  <h1 className='text-[25px] text-[#ffffff] font-bold -mt-4'>portal</h1>
              </div>

          </div>

          <div className='flex mx-40 my-5'>
              <h1 className='font-serif text-[50px] font-bold mr-60 text-[#ffffff]'>Contacts</h1>
              <div className='my-3 ml-60'>
                  <a href='/AddFirstContact' className='border-[2px] rounded-full px-5 py-1 text-[25px] text-[#ffffff] border-white font-bold ' 
                        type='' >add your first contact</a>
              </div>
          </div>
          <div className='h-auto mx-44 p-6 bg-white w-[60rem] place-self-center rounded-3xl border-4 border-white'>
            {
                contacts && <ContactList contacts={contacts} deleteContact={deleteContact} />
            }
          </div>
                   
        </div>
       
      </div>
            
          <DeleteMsg onClose={handleOkay} visible={showDeleteMsg} />

    </div>
  )
}
