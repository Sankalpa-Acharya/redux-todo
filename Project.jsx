import React from 'react'
import native from '../assets/native.png'
import sank from '../assets/sank.png'

export default function Project() {
  return (

    <div className='rounded-2xl mt-4 md:w-[30%] p-7 mr-5 bg-[#35415d] bg-opacity-20 backdrop-blur-lg  drop-shadow-lg'>
        <h2 className='text-3xl font-semibold'>NativeYoutube</h2>
            <img className='my-7 rounded-xl' src={native} alt="" />
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
            <img className='w-[50px] rounded-full border-4 border-[#2f2c3b]' src={sank} alt="" />
            <p className='ml-3 text-lg font-semibold'>Sankalpa</p>
            </div>
            <span className='px-2 py-1 rounded-[7px] bg-[#555704] text-xl'>Kanban</span>
        </div>
    </div>

  )
}
