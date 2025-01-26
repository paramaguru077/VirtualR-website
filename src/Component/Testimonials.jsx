import React from 'react'
import { testimonials } from '../constants'
const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-4xl lg:text-6xl text-center my-3 lg:my-4' >What people are saying</h2>
      <div className='flex flex-wrap justify-center'> 
        {
          testimonials.map((testimonials,i)=>(
            <div key={i} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2  '>
              <div className='bg-netural rounded-md p-6 text-md border border-neutral-800 font-thin'>
                <p>{testimonials.text}</p>
              </div>
              <div className='flex mt-8 items-start'>
                <img src={testimonials.image} alt={testimonials.user}
                className='w-12 h-12 mr-6 rounded-full border border-neutral-300 ' />     
                <div>
                  <h6>{testimonials.user}</h6>
                  <span className='text-sm font-normal italic text-neutal-600'>{testimonials.company}</span>
                </div>
              </div>



            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Testimonials