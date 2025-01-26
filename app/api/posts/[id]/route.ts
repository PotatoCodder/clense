import { NextResponse } from 'next/server';
import { posts } from '@/app/lib/PostData'
import { ParamProp } from '@/type'
export async function GET(req: Request, {params}: ParamProp) {
const { id } = params;

return NextResponse.json(posts.find((post) => post.id === parseInt(id)))

}