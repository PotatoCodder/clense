import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative">
        <div className="w-32 h-32 border-8 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-32 h-32 border-8 border-blue-600 rounded-full animate-ping opacity-75"></div>
      </div>
      <p className="mt-8 text-2xl font-bold text-blue-600 animate-pulse">Loading...</p>
    </div>
  )
}
