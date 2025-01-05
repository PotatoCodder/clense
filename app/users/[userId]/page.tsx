import React from 'react';
import { User } from '@/types';

interface Params {
  userId: string;
}

export default async function UserInfoPage({ params }: { params: Params }) {
  const { userId } = params;

  // Fetch user info based on the userId
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!res.ok) {
    throw new Error('Could not fetch data, please try again later');
  }

  const userInfo: User = await res.json();

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">{userInfo.name}</h1>

        <div className="space-y-4">
          <p className="text-lg font-semibold">
            <span className="font-normal">Username:</span> {userInfo.username}
          </p>
          <p className="text-lg font-semibold">
            <span className="font-normal">Email:</span> {userInfo.email}
          </p>
          <p className="text-lg font-semibold">
            <span className="font-normal">Phone:</span> {userInfo.phone}
          </p>
          <p className="text-lg font-semibold">
            <span className="font-normal">Website:</span> <a href={`https://${userInfo.website}`} className="text-blue-500">{userInfo.website}</a>
          </p>

          <div className="border-t pt-4">
            <h3 className="text-xl font-bold">Address</h3>
            <p className="text-lg">
              <span className="font-normal">Street:</span> {userInfo.address.street}, {userInfo.address.suite}, {userInfo.address.city}, {userInfo.address.zipcode}
            </p>
            <p className="text-lg">
              <span className="font-normal">Geo:</span> Lat: {userInfo.address.geo.lat}, Lng: {userInfo.address.geo.lng}
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-xl font-bold">Company</h3>
            <p className="text-lg">
              <span className="font-normal">Name:</span> {userInfo.company.name}
            </p>
            <p className="text-lg">
              <span className="font-normal">CatchPhrase:</span> {userInfo.company.catchPhrase}
            </p>
            <p className="text-lg">
              <span className="font-normal">BS:</span> {userInfo.company.bs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
