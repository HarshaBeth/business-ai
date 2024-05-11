'use client'
import { Textarea } from '@nextui-org/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Form({formData, formDataChange}) {
    // const [formData, setFormData] = useState([]);

    const form = useForm()
    const { register, handleSubmit } = form;

    const onSubmit = (data) => {
        
        let inputCopy = [...formData]
        inputCopy = [data.objective, data.capacity, data.scalability, data.continuity, data.guidelines];
        // setFormData(inputCopy);
        formDataChange(inputCopy);
    }

  return (
    <div className='h-screen w-full bg-gray-100 flex justify-center items-center' id='Form'>
        <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-black w-fit h-fit py-12 px-16 rounded-lg font-mono flex flex-col gap-5 bg-white'>
            {/* Q1 */}
            <span>
                
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
                    id='objective'
                    {...register("objective")}
                />
            </span>

            {/* Q2 */}
            <span>
                <p>What is the <span className=' text-green-500 '>Capacity</span> of your business?<span className='text-red-500 font-sans'>*</span></p>
                <input 
                    type="text" 
                    required 
                    className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'
                    id='capacity'
                    {...register("capacity")}
                />
            </span>

            {/* Q3 */}
            <span>
                <p>What does your <span className=' text-green-500 '>Scalability</span> look like?<span className='text-red-500 font-sans'>*</span></p>
                <input 
                    type="text" 
                    required 
                    className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'
                    id='scalability'
                    {...register("scalability")}
                />
            </span>

            {/* Q4 */}
            <span>
                <p>Explain your <span className=' text-green-500 '>Continuity</span>, regional/global focus?<span className='text-red-500 font-sans'>*</span></p>
                <input type="text" required className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'
                id='continuity'
                {...register("continuity")}
                />
            </span>

            {/* Q5 */}
            <span>
                <p>What are the <span className=' text-green-500 '>Guidelines</span>?<span className='text-red-500 font-sans'>*</span></p>
                <input type="text" required className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'
                id='guidelines'
                {...register("guidelines")}
                />
            </span>
            
            <span className='w-full flex justify-center'>
                <button type='submit' className='mt-2 w-fit px-10 py-2 bg-green-400 rounded-lg hover:bg-green-500'> Submit </button>
            </span>
        </form>
    </div>
  )
}

export default Form
