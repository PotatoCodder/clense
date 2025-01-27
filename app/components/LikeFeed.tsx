'use client'
import { HeartIcon } from '@heroicons/react/24/outline'; // Outline (unfilled)
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid'; // Filled
import React, { useState } from 'react';

interface LikeFeedProps {
  postId: string;
}

const LikeFeed: React.FC<LikeFeedProps> = ({ postId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleLikeClick}
        className={`group relative flex items-center justify-center w-10 h-10 rounded-full 
          ${isLiked ? 'bg-red-100' : 'bg-gray-100'} 
          hover:bg-red-200 transition duration-300`}
      >
        {/* Animated Icon */}
        <div className="absolute w-6 h-6 text-gray-500 group-hover:scale-110 group-hover:text-red-500 transition-transform duration-300">
          {isLiked ? (
            <HeartIconFilled className="text-red-500" />
          ) : (
            <HeartIcon className="text-gray-500" />
          )}
        </div>
        {/* Ripple Effect */}
        <span
          className={`absolute w-16 h-16 rounded-full bg-red-200 opacity-0 ${
            isLiked && 'animate-ping'
          }`}
        ></span>
      </button>

      {/* Like Count */}
      <p
        className={`text-sm font-medium transition-all duration-300 ${
          isLiked ? 'text-red-500' : 'text-gray-500'
        }`}
      >
        {isLiked ? 'Liked!' : 'Like'}
      </p>
    </div>
  );
};
export default LikeFeed;