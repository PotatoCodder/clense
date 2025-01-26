import { NextResponse } from 'next/server'
import { users } from '@/app/lib/UserDatas'
export async function GET() {
  return NextResponse.json(users);
}