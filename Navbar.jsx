import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import '../App.css';
export default function Navbar() {
    const [nav, setNav] = useState(false)
    return (
        <>
            <div className='flex justify-between relative z-10 md:p-10 p-4 items-center '>
                <div className='flex'>
                    <h1 className='text-3xl md:text-6xl'>🐬</h1>
                    <ul className='md:flex hidden items-center  ml-20 text-2xl '>
                        <li className='ml-12 font-bold cursor-pointer'>Home</li>
                        <li className='ml-12 font-bold cursor-pointer'>About</li>
                        <li className='ml-12 flex font-bold cursor-pointer'>  Github </li>
                    </ul>
                </div>
                <div className='flex  text-2xl'>
                <button className='bg-[#3354f7] md:flex hidden ml-5  px-4 py-2 font-bold rounded'>Sign in</button>
                    <div onClick={() => { setNav(!nav) }}>
                        {!nav ?
                            <AiOutlineMenu className='md:hidden text-3xl' />
                            :
                            <AiOutlineClose className='md:hidden text-3xl' />
                        }
                    </div>
                </div>
            </div>
            <div className={`flex ease-in-out duration-500 z-20 flex-col items-center top-0 pt-20 h-screen ${nav ? 'left-[0%]' : 'left-[-200%]'}  bg-[#1c1e2bfd] absolute w-[70%]`}>
                <h1 className='text-4xl md:text-6xl mt-[-40px]'>🐬</h1>
                <ul className=' flex flex-col  text-xl md:text-2xl '>
                    <li className='mt-14 font-bold cursor-pointer'>Home</li>
                    <li className='mt-14 font-bold cursor-pointer'>About</li>
                    <li className='mt-14 flex font-bold cursor-pointer'>  Github </li>
                </ul>
                    <button className='bg-[#3354f7]  mt-14 lg:text-lg px-4 py-2 font-bold rounded'>Sign in</button>
            </div>

        </>
    )
}
