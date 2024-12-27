import React from 'react'

const Feature = () => {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
<h2 className='text-center text-3xl font-bold md:text-5xl animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y[-5px] hover:text-black text-red-600'>
  Laiba Siddique : Navigating The Transports Blog!
  <p className='m-4 mt-4 text-center text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up first-letter:delay-100 '>

  A transport blog provides insights into the dynamic world of travel and logistics, covering topics like sustainable transportation, emerging technologies, and urban mobility solutions. It explores diverse modes of transport, from electric vehicles to public transit systems, offering tips and trends for efficient travel. Readers can learn about global innovations, policy changes, and how transport shapes modern cities. With engaging content, it connects enthusiasts, professionals, and everyday commuters.
  </p>
</h2>

<div className='mx-auto max-w-7xl px-5'>

  <h1 className='text-3xl text-center font-bold my-8 text-red-600 animate-color-change'>Exploring Our Categories</h1>

  <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100 '>
{[
 
"Eco-Friendly Mobility",
"Urban Transportation Trends",
"Next Js",
"Innovations in Logistics",
"Road, Rail, and Air Adventures",
"Public Transit Insights",

].map((category , index)=>(

  <div key={index} className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transtion duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600 '>
<p className='text-center text-lg font-semibold '>{category}</p>
<div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'>


</div>

  </div>
)
)

}

  </div>
</div>

<p>

  
</p>




</section>

    </div>
  )
}

export default Feature