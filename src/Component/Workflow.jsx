import React from 'react'
import { Plus } from 'lucide-react'
import {checklistItems} from '../constants'
import codeImg from '../assets/code.jpg';
const Workflow = () => {
  return (
    <div className='mt-20'>
        <h2 className='mt-10 text-center text-3xl sm:text-5xl lg:text-6xl tracking-wide '>Acclerate your 
            <span className='bg-gradient-to-r from-red-500 to-gray-300 text-transparent bg-clip-text'>{" "}coding workflow</span>
        </h2>
        <div className='flex flex-wrap justify-center'>
            <div className='p-2 w-full lg:w-1/2'>
            <img src={codeImg} alt="codeImg" />
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
            {
                checklistItems.map((item,i)=>(
                    <div key={i} className='flex mb-12'>
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                            <Plus/>
                        </div>
                        <div>
                            <h5 className='mt-1 mb-2 text-xl'> {item.title}</h5>
                            <p className='text-md text-neutral-500'>
                                {item.description}
                            </p>
                        </div>
                    </div>

                ))
            }

            </div>

        </div>
    </div>
  )
}

export default Workflow