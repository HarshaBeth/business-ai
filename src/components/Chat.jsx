import React from 'react'

function Chat({formData}) {
    
  return (
    <div className='h-screen w-full flex flex-row justify-center items-center gap-4'>
      
      <div className='text-6xl w-[420px] font-serif '>
        Get Your <span className='text-green-500'>Feedback</span> Here:
      </div>

      <div className='h-[75%] w-[50%] border-4 rounded-xl border-gray-400'>
        {/* Chat history */}
        <div className='h-[50%] w-full bg-red-500'>
            {formData.map((dat, index) => (
                <p>{dat}</p>
            ))}
        </div>
        {/* Text the AI */}
      </div>
    </div>
  )
}

export default Chat
