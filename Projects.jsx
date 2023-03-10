import React from 'react'
import Project from './Project'

export default function Projects() {
  return (
        <>
        
        <div className='md:p-6 p-2'>
            <h2 className='text-3xl mb-10 md:pl-16 font-bold'>Projects</h2>

          <div className='flex md:flex-row flex-col flex-wrap justify-between'>
            <Project></Project>
            <Project></Project>
            <Project></Project>

          </div>
            
        </div>

        </>
  )
}
