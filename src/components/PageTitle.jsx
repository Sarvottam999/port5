import React from 'react'

export default function PageTitle({text, subtext}) {
  return (
    <div className='h-[120px] bg-blue-100 my-10 flex flex-col justify-center items-center rounded-xl'>
          <div className="text-black font-bold text-5xl my-2">{text}</div>
 
        
        <h1 className='text-gray-400  font-medium text-2xl '>{subtext}</h1>
    </div>
  )
}
