import React from 'react'
import '../App.css';
import planet from '../assets/planet.png'
import sharp from '../assets/sharp.png'

export default function Hero() {
    return (
        <main className='lg:flex h-[100%] items-center relative top-[-40px]  justify-between'>
            <div className='lg:w-[50%] flex cool justify-center h-[100%] items-center'>

                <div className='w-[80%] h-[50%]'>
                    <h1 className='md:text-7xl text-6xl font-extrabold'>Breaking Branches - 🏆</h1>
                    <h1 className='md:text-xl p-2 pl-6 mt-10 md:w-[80%] rounded shadow-3xl bg-[#191825]'>Unlock your creativity and contribute to the world of open source </h1>
                    <button className='mt-10 transition duration-100 hover:shadow-hover border text-3xl px-4 py-2 font-bold rounded'>Let's Go</button>
                <div className='z-[-10] absolute top-[-100px] right-0 md:rotate-0 rotate rotate-180'>
                <img src={sharp} alt="" />
                </div>
                <div className='z-[-10] absolute rotate-180 left-0'>
                <img src={sharp} alt="" />
                </div>
                </div>
            </div>
            <div className='md:w-[50%]  lg:flex  hidden top-[200px]'>
                <img className=' opacity-30 md:opacity-100' src={planet} alt="" />
            </div>
        </main>
    )
}
