import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'
const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-green-600 hover:brightness-125 duration-150'> Pricing </h2>

        <div className='flex flex-wrap'>
            {pricingOptions.map((option,i)=>(
                <div key={i} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='p-10 border border-neutral-700 rounded-xl max-h-[550px]'>
                        <p className='text-4xl mb-6'>{option.title}
                            {option.title==="Pro"&& 
                            <span className=' text-xl bg-gradient-to-t from-orange-500 to-orange-800 text-transparent bg-clip-text'> (Most Popular)</span>}
                        </p>
                        <p className='mb-8'>
                            <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                            <span className='text-neutral-400'>
                                /Month
                            </span>
                        </p>
                        <ul>
                            {option.features.map((featur,i)=>
                            (
                                <li key={i} className='mt-8 flex items-center'>
                                    <CheckCircle2/>
                                    <span className='ml-2'>
                                        {featur}
                                    </span>

                                </li>
                            ))}
                        </ul>
                        <a href="#" className='flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200'> Subscribe</a>
                    </div>
                 
                </div>
            ))}


        </div>
    </div>
  )
}

export default Pricing