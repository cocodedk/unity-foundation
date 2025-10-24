import {NextResponse} from 'next/server';

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const locale = searchParams.get('locale') || 'en';
  // Placeholder list
  return NextResponse.json({items: [], locale});
}

