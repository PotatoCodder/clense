'use client'
import React, { useEffect, useState } from 'react'
import { User } from '@/type'
import Link from 'next/link'

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/users');
        if (!res.ok) {
          throw new Error(`Status: ${res.statusText}`);
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    }

    fetchUsers();
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">People You May Know</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user: User) => (
            <div key={user.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-semibold mr-3">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-grow">
                  <h2 className="text-base font-semibold text-gray-900">{user.name}</h2>
                  <p className="text-sm text-gray-500">5 mutual friends</p>
                </div>
              </div>
              <Link href={`/users/${user.id}`} className="mt-3 block w-full bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-blue-600 transition-colors">
                Visit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
