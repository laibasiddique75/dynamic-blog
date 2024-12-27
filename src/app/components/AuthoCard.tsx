import React from 'react'
import Image from 'next/image'

const AuthoCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>

      <div className='flex items-center animation-fadeIn '>

<Image className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500' src="/my-pic.jpeg" alt='' width={48} height={48}/>
<div>

  <h3 className='text-xl font-bold'>Laiba Siddique</h3>
  <p className='text-slate-500'>Frontend Developer |Graphic Designer| {" "}</p>
</div>
      </div>

      <p className='mt-4 text-black leading-relaxed'>
      Laiba Siddique is a skilled Frontend Developer with a deep passion for crafting intuitive and visually appealing web experiences. She excels in technologies like HTML, CSS, and JavaScript,next.js,react.js ensuring seamless functionality and responsive designs. Alongside her technical expertise, she actively shares knowledge to empower others in the field of web development. Additionally, her flair for Graphic Design enables her to create captivating visuals and user-centric layouts, blending creativity with functionality to deliver exceptional digital solutions.
      </p>

<div className='mt-4 flex space-x-3 '>

<a href='https://www.linkedin.com/in/laiba-siddique-b144282a9/'
className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'> Linkedin</a>
<a href='https://github.com/laibasiddique75'
className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>Github</a>
</div>

    </div>
  )
}

export default AuthoCard