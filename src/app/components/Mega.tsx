import React from 'react';
import BlogCard from './BlogCard';

export default function Mega() {
const posts = [
  {
    id:'1',
    title: 'Bike',
    description:'A bike is a two-wheeled vehicle powered either by pedaling or a motor. It’s a versatile mode of transport, offering eco-friendly commuting, exercise, and adventure. Bikes come in various types, including road, mountain, and electric models, catering to diverse needs.',
    date:'2024-12-25',
    imageurl:'/bike.webp'
  },

  {
    id:'2',
    title:'Car',
    description:'A car is a four-wheeled motor vehicle designed for transportation, offering comfort, convenience, and speed. Cars range from compact models to luxury SUVs, serving both personal and commercial purposes.',
    date:'2025-1-5',
    imageurl:'/car.jpg'
  },

  {
    id:'3',
    title:'Truck',
    description:'A truck is a motor vehicle designed for transporting goods, characterized by its large size and powerful engine. It comes in various types, including pickup trucks, semi-trucks, and dump trucks, catering to different industries. Trucks are essential for logistics, construction, and heavy-duty transport.',
    date:'2025-1-10',
    imageurl:'/truck.jpg'
  },
  {
    id:'4',
    title:'Train',
    description:'A train is a series of connected vehicles that run on tracks, designed to transport passengers or goods over long distances. Powered by electricity, diesel, or steam, trains are efficient for mass transit and freight. They are vital for connecting cities and supporting economic growth.',
    date:'2025-1-15',
    imageurl:'/train.jpg'
  },
  {
    id:'5',
    title:'Cycle',
    description:'A cycle is a two-wheeled, pedal-powered vehicle, ideal for eco-friendly commuting, fitness, and recreation. Lightweight and versatile, it comes in types like road bikes, mountain bikes, and hybrids. Cycles are a simple and sustainable mode of transportation.',
    date:'2025-1-20',
    imageurl:'/cycle.jpg'
  },
  {
    id:'6',
    title:'Aeroplane',
    description:'An aeroplane is a powered aircraft designed for air travel, capable of carrying passengers and cargo across long distances. It uses wings for lift and engines for propulsion, enabling high-speed and efficient transportation. Aeroplanes are essential for global connectivity and commerce.',
    date:'2025-1-25',
    imageurl:'/aeroplane.jpeg'
  },
  {
    id:'7',
    title:'Ship',
    description:'A ship is a large watercraft designed for transportation, exploration, or specialized operations across seas and oceans. Typically powered by engines or sails, ships are crucial for global trade, travel, and military purposes. They vary in type, including cargo ships, passenger ships, and naval vessels.',
    date:'2025-1-30',
    imageurl:'/ship.jpg'
  },
  {
    id:'8',
    title:'Bus',
    image: '/bus.jpg',
    description:'A bus is a large, motorized vehicle designed to carry multiple passengers, making it an essential part of public transportation systems. It is a cost-effective and eco-friendly mode of travel, connecting cities and neighborhoods. Buses come in various types, including city buses, school buses, and long-distance coaches.',
    date:'2025-2-5',
    imageurl:'/bus.jpg'
  },
  {
    id:'9',
    title:'Rikshaw',
    description:'A rickshaw is a small, three-wheeled vehicle commonly used for short-distance transportation, especially in Asia. It can be manually pulled, pedal-driven, or motorized, offering an eco-friendly and cost-effective travel option. Rickshaws are popular for their accessibility in narrow streets and urban areas.',
    date:'2025-2-10',
    imageurl:'/rikshaw.jpg'
  },

];

return (
  <div className="my-8">
<h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change '> {" "} Exploring the Transportation</h1>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
  {posts.map((post,index) =>(
    <div key={post.id} className="fade-in">
      <div className='blog-card'>
<BlogCard post={post} isDarkBackground={index % 2 === 0} />
      </div>
      </div>
  ))}


</div>
  </div>
);

}