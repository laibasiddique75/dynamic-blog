'use client';
import React from 'react';
import CommentSection from '@/app/components/CommentSection';
import AuthoCard from '@/app/components/AuthoCard';
import Image from 'next/image';

const posts = [
  {
    id: '1',
    title: 'Bike',
    description: 'A bike is a two-wheeled vehicle powered either by pedaling or a motor. It’s a versatile mode of transport, offering eco-friendly commuting, exercise, and adventure. Bikes come in various types, including road, mountain, and electric models, catering to diverse needs.',
    image: '/bike.webp'
  },

  {
    id: '2',
    title: 'Car',
    description: 'A car is a four-wheeled motor vehicle designed for transportation, offering comfort, convenience, and speed. Cars range from compact models to luxury SUVs, serving both personal and commercial purposes.',
    image: '/car.jpg'
  },

  {
    id: '3',
    title: 'Truck',
    description: 'A truck is a motor vehicle designed for transporting goods, characterized by its large size and powerful engine. It comes in various types, including pickup trucks, semi-trucks, and dump trucks, catering to different industries. Trucks are essential for logistics, construction, and heavy-duty transport.',
    image: '/truck.jpg'
  },
  {
    id: '4',
    title: 'Train',
    description: 'A train is a series of connected vehicles that run on tracks, designed to transport passengers or goods over long distances. Powered by electricity, diesel, or steam, trains are efficient for mass transit and freight. They are vital for connecting cities and supporting economic growth.',
    image: '/train.jpg'
  },
  {
    id: '5',
    title: 'Cycle',
    description: 'A cycle is a two-wheeled, pedal-powered vehicle, ideal for eco-friendly commuting, fitness, and recreation. Lightweight and versatile, it comes in types like road bikes, mountain bikes, and hybrids. Cycles are a simple and sustainable mode of transportation.',
    image: '/cycle.jpg'
  },
  {
    id: '6',
    title: 'Aeroplane',
    description: 'An aeroplane is a powered aircraft designed for air travel, capable of carrying passengers and cargo across long distances. It uses wings for lift and engines for propulsion, enabling high-speed and efficient transportation. Aeroplanes are essential for global connectivity and commerce.',
    image: '/aeroplane.jpeg'
  },
  {
    id: '7',
    title: 'Ship',
    description: 'A ship is a large watercraft designed for transportation, exploration, or specialized operations across seas and oceans. Typically powered by engines or sails, ships are crucial for global trade, travel, and military purposes. They vary in type, including cargo ships, passenger ships, and naval vessels.',
    image: '/ship.jpg'
  },
  {
    id: '8',
    title: 'Bus',
    description: 'A bus is a large, motorized vehicle designed to carry multiple passengers, making it an essential part of public transportation systems. It is a cost-effective and eco-friendly mode of travel, connecting cities and neighborhoods. Buses come in various types, including city buses, school buses, and long-distance coaches.',
    image: '/bus.jpg'
  },
  {
    id: '9',
    title: 'Rikshaw',
    description: 'A rickshaw is a small, three-wheeled vehicle commonly used for short-distance transportation, especially in Asia. It can be manually pulled, pedal-driven, or motorized, offering an eco-friendly and cost-effective travel option. Rickshaws are popular for their accessibility in narrow streets and urban areas.',
    image: '/rikshaw.jpg'
  },

];




export default  function Post({params} : {params: {id: string}}) {

  const {id} =(params);
  const post = posts.find((p) => p.id === id);

  if(!post){
    return(
       <h2 className='text-2xl font-bold text-center mt-10'>Post not found </h2>);
  }

  const renderParagraphs = (descripton : string)=>{
    return descripton.split('/n').map((para, index) => (
<p key={index} className='mt-4 text-justify'>
  {para.trim()}
</p>
    )
  );
  };


  return(

    <div className='max-w-3xl mx-auto p-5'>

      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {' '}
        {post.title}
      </h1>

      {post.image && (
        <Image src={post.image} alt={post.title} width={500} height={300} className='w-full h-auto rounded-md mt-4'/>
      )}


<div className='mt-6 text-lg text-slate-700'>
{renderParagraphs(post.description)}

</div>


      <CommentSection postId={post.id}/>
      <AuthoCard/>
    </div>
  )
}

