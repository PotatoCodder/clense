import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Connect with friends and the world around you</h1>
            <p className="text-xl mb-6">Share your thoughts, photos, and life moments with your community.</p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
                Join Now
              </button>
              <button className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-800 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero-image.png"
              alt="People connecting"
              width={500}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
