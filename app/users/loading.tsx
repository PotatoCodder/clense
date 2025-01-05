import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-1 border-b-2 border-blue-500"></div>
      <p className="mt-4 text-lg text-gray-700">Loading user data...</p>
    </div>
  )
}
