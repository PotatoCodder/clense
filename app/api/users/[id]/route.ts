// app/[id]/route.ts
import { NextResponse } from 'next/server';
import { users } from '@/app/lib//UserDatas'
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;  // Accessing the dynamic route parameter

  return NextResponse.json(users.find((user) => user.id === parseInt(id)))
}
