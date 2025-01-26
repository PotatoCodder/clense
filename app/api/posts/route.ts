import { NextResponse } from 'next/server'
import { posts } from '@/app/lib/PostData'
export async function GET() {
  return NextResponse.json(posts);
}