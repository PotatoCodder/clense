'use client'

import { HeartIcon } from '@heroicons/react/24/outline';  // For the outline (unfilled) heart
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';  // For the filled heart
import React, {useState} from 'react'

interface LikeFeedProps {
  postId: string;
}

const LikeFeed: React.FC<LikeFeedProps>  = ({postId}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  }

  console.log(isLiked)
  return (
    <div>
      <button
       onClick={handleLikeClick}
      >
        {
          isLiked? (
            <HeartIconFilled className="w-5 h-5 text-blue-500" />
          ) : (
            <HeartIconFilled className="w-5 h-5 text-gray-500" />
          )
        }
      </button>
    </div>
  )
}

export default LikeFeed;
