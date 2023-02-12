import React from 'react'

export default function DeleteMsg({visible, onClose}) {

    if(!visible) return null;

  return (
    <div>
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm'>
              <div className='px-16 py-8 bg-white rounded-2xl'>
                    <h1 className=' text-[#083F46] font-bold'>Your contact has been deleted successfully!</h1>
                    <button onClick={onClose} className='rounded-full border-[2px] px-5 py-[4px] bg-[#083F46] text-white mt-5 mx-32'>Okay</button>
              </div>
        </div>
    </div>
  )
}
