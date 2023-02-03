import React from 'react'

export default function AddFirstContact() {
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

                <h1 className='font-serif text-[50px] font-bold my-10 mx-40' >New Contact</h1>

                <div className='grid h-32 grid-cols-2 gap-2 mx-40 place-content-center'>

                    <input className=' mt-14 rounded-full h-16 w-[28rem] placeholder:text-[#f9f9f9]  placeholder:text-[25px] placeholder:font-bold bg-black' placeholder="      full name"/>
                    <input className=' mt-14 rounded-full h-16 w-[28rem] placeholder:text-[#ffffff]  placeholder:text-[25px] placeholder:font-bold bg-black' placeholder="      e-mail"/>
                    <input className=' mt-14 rounded-full h-16 w-[28rem] placeholder:text-[#ffffff]  placeholder:text-[25px] placeholder:font-bold bg-black' placeholder="      phone number"/>
                    <form className='flex mx-5 text-[25px] font-bold my-10'>
                        <label>gender</label>
                        <input type="radio" className='mx-5' id="male"  value="male"/>
                        <label for="html">male</label><br/>
                        <input type="radio" className='mx-5' id="female" value="female"/>
                        <label for="css">female</label><br/>
                    </form>

                </div>
                
                <div>
                    <button className='my-28 mx-40  border-[2px] rounded-full px-5 py-1 text-[25px] border-black' 
                      type='' >add your first contact</button>
                </div>
                
            </div>

    </div>
  )
}


