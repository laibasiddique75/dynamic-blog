import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../components/ui/Card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageurl: string;
  };
  isDarkBackground: boolean;
}

const BlogCard = ({ post, isDarkBackground }: BlogCardProps) => {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        className="w-full h-48 object-cover rounded-t-lg"
        src={post.imageurl}
        alt={post.title}
        width={500}
        height={300}
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className="w-full px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-500 text-center"
        >
          Read More
        </a>
      </div>
    </Card>
  );
};

export default BlogCard;
