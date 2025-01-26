'use client'
import React, { useEffect, useState, use } from 'react'
import { IdPromise } from '@/type'

export default function PostPage({ params }: IdPromise) {
  const { id } = use(params);

  const [post, setPost] = useState<any>(null);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`);
        if (!res.ok) {
          throw new Error(`Status: ${res.statusText}`);
        }
        const data = await res.json();
        setPost(data)
      } catch (error) {
        setError(`Failed to fetch post id: ${id}`)
      }
    }
    fetchPost()
  }, [id]);

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>;
  }

  if (!post) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        {/* Post Header */}
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-semibold mr-3">
              {post.name ? post.name[0].toUpperCase() : 'U'}
            </div>
            <div>
              <h2 className="font-semibold text-lg">{post.name || 'Unknown User'}</h2>
              <p className="text-gray-500 text-sm">{post.date || 'No date available'}</p>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
        </div>

        {/* Post Stats */}
        <div className="px-4 py-2 border-t border-b text-gray-500 text-sm">
          <span>{post.likes || 0} Likes</span>
          <span className="mx-2">•</span>
          <span>{post.comments || 0} Comments</span>
          <span className="mx-2">•</span>
          <span>{post.shares || 0} Shares</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between px-4 py-2">
          <button className="flex items-center text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            Like
          </button>
          <button className="flex items-center text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Comment
          </button>
          <button className="flex items-center text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
        </div>
      </div>
    </div>
  )
}
