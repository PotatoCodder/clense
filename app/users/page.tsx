import React from 'react';
import { Users } from '@/types'; // Corrected import for type
import Link from 'next/link';

export default async function UsersPage() {
  // Fetch the data from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error('Failed to fetch data!');
  }

  // Parse the response JSON into users array with the correct type
  const users: Users[] = await res.json();

  // Render the users in a styled list
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-8">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.username}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <div className="mt-4">
              <Link
                href={`users/${user.id}`}
                className="text-blue-500 hover:underline"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
