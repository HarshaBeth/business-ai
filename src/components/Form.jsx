import { Textarea } from '@nextui-org/input'
import React from 'react'

function Form() {
  return (
    <div className='h-screen w-full bg-gray-100 flex justify-center items-center' id='Form'>
        <form action="" className='border-2 border-black w-fit h-fit py-12 px-16 rounded-lg font-mono flex flex-col gap-5 bg-white'>
            {/* Q1 */}
            <span>
                {/* <p>Describe your <span className=' text-green-500 '>Business Objective</span>: </p> */}
                <Textarea 
                isRequired
                label={
                    <div className='font-mono'>
                        Explain your <span className=' text-green-500 '>Business Objective</span> briefly: 
                        <span className='text-red-500 font-sans'>*</span>
                    </div>
                }
                labelPlacement='outside'
                maxRows={3}
                placeholder='Type here...'
                className='bg-gray-100 border-b-2 border-green-500 font-serif'
                />
            </span>

            {/* Q2 */}
            <span>
                <p>What is the <span className=' text-green-500 '>Capacity</span> of your business?<span className='text-red-500 font-sans'>*</span></p>
                <input type="text" required className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'/>
            </span>

            {/* Q3 */}
            <span>
                <p>What does your <span className=' text-green-500 '>Scalability</span> look like?<span className='text-red-500 font-sans'>*</span></p>
                <input type="text" required className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'/>
            </span>

            {/* Q4 */}
            <span>
                <p>Explain your <span className=' text-green-500 '>Continuity</span>, regional/global focus?<span className='text-red-500 font-sans'>*</span></p>
                <input type="text" required className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'/>
            </span>

            {/* Q5 */}
            <span>
                <p>What are the <span className=' text-green-500 '>Guidelines</span>?<span className='text-red-500 font-sans'>*</span></p>
                <input type="text" required className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'/>
            </span>
            
            <span className='w-full flex justify-center'>
                <button type='submit' className='mt-2 w-fit px-10 py-2 bg-green-400 rounded-lg hover:bg-green-500'> Submit </button>
            </span>
        </form>
    </div>
  )
}

export default Form
