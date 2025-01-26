'use client';
import React, { useEffect, useState, use } from 'react';
import { User } from '@/type';
import Image from 'next/image';

interface PageProps {
  params: {
    id: string;
  };
}

export default function UserPage({ params }: PageProps) {
  const { id } = use(params);

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user data');
      }
    };

    fetchUser();
  }, [id]);

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>;
  }

  if (!user) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Photo */}
      <div className="relative h-64 bg-gradient-to-r from-blue-400 to-blue-600">
        <Image
          src="/default-cover.jpg"
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <div className="relative h-24 w-24 rounded-full ring-4 ring-white bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
              {user.name.charAt(0).toUpperCase()}
              {/* Status Indicator */}
              <div className={`absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-white ${user.status ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </div>
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">{user.name}</h1>
              <p className="text-sm text-gray-500">@{user.username}</p>
              {/* Status Text */}
              <p className={`text-sm ${user.status ? 'text-green-500' : 'text-red-500'} mt-1`}>
                {user.status ? 'Active' : 'Inactive'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="mt-1 text-sm text-gray-900">{user.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Username</p>
              <p className="mt-1 text-sm text-gray-900">{user.username}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="mt-1 text-sm text-gray-900">{user.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Age</p>
              <p className="mt-1 text-sm text-gray-900">{user.age}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">City</p>
              <p className="mt-1 text-sm text-gray-900">{user.city}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Bio</p>
              <p className="mt-1 text-sm text-gray-900">{user.bio}</p>
            </div>
            {user.status !== undefined && (
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className={`mt-1 text-sm ${user.status ? 'text-green-500' : 'text-red-500'}`}>
                  {user.status ? 'Active' : 'Inactive'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
