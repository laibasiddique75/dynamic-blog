'use client';
import React, { useEffect, useState } from 'react';
import CommentSection from '@/app/components/CommentSection';
import AuthoCard from '@/app/components/AuthoCard';
import Image from 'next/image';

const posts = [
  { id: '1', title: 'Bike', description: 'A bike is a two-wheeled vehicle powered either by pedaling or a motor. It’s a versatile mode of transport...', image: '/bike.webp' },
  { id: '2', title: 'Car', description: 'A car is a four-wheeled motor vehicle designed for transportation...', image: '/car.jpg' },
  { id: '3', title: 'Truck', description: 'A truck is a motor vehicle designed for transporting goods...', image: '/truck.jpg' },
  { id: '4', title: 'Train', description: 'A train is a series of connected vehicles that run on tracks...', image: '/train.jpg' },
  { id: '5', title: 'Cycle', description: 'A cycle is a two-wheeled, pedal-powered vehicle...', image: '/cycle.jpg' },
  { id: '6', title: 'Aeroplane', description: 'An aeroplane is a powered aircraft designed for air travel...', image: '/aeroplane.jpeg' },
  { id: '7', title: 'Ship', description: 'A ship is a large watercraft designed for transportation...', image: '/ship.jpg' },
  { id: '8', title: 'Bus', description: 'A bus is a large, motorized vehicle designed to carry multiple passengers...', image: '/bus.jpg' },
  { id: '9', title: 'Rikshaw', description: 'A rickshaw is a small, three-wheeled vehicle...', image: '/rikshaw.jpg' },
];

interface PostProps {
  params: Promise<{ id: string }>;
}

const Post: React.FC<PostProps> = ({ params }) => {
  const [id, setId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
      setLoading(false);
    };

    fetchParams();
  }, [params]);

  if (loading) {
    return <h2 className='text-2xl font-bold text-center mt-10'>Loading...</h2>;
  }

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 className='text-2xl font-bold text-center mt-10'>Post not found</h2>;
  }

  const renderParagraphs = (description: string) => {
    return description.split('\n').map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {post.title}
      </h1>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={500}
          height={300}
          className='w-full h-auto rounded-md mt-4'
        />
      )}

      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(post.description)}
      </div>

      <CommentSection />
      <AuthoCard />
    </div>
  );
};

export default Post;
