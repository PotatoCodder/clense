'use client';

import React, { useState } from 'react';

interface ShareFeedProps {
  postId: string;
}

const ShareFeed: React.FC<ShareFeedProps> = ({ postId }) => {
  const [isSharing, setIsSharing] = useState(false);

  const handleShareClick = () => {
    setIsSharing(true);
  };

  const closeSharePopup = () => {
    setIsSharing(false);
  };

  return (
    <div>
      {/* Share button */}
      <button
        onClick={handleShareClick}
        className="flex items-center text-gray-600 hover:text-blue-600"
      >
        {/* Added the SVG icon */}
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        Share
      </button>

      {/* Share Popup */}
      {isSharing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm">
            <h2 className="text-lg font-bold mb-4">Share Post</h2>
            <p className="text-gray-600 mb-4">
              Share this post on Facebook or copy the link:
            </p>
            <div className="flex items-center mb-4">
              <input
                type="text"
                readOnly
                value={`http://localhost:3000/posts/${postId}`}
                className="w-full border border-gray-300 rounded p-2 mr-2"
              />
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    `http://localhost:3000/posts/${postId}`
                  )
                }
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Copy
              </button>
            </div>
            <button
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/posts/${postId}`,
                  '_blank'
                )
              }
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2"
            >
              Share on Facebook
            </button>
            <button
              onClick={closeSharePopup}
              className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareFeed;
