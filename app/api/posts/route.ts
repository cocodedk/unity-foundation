import {NextResponse} from 'next/server';

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const locale = searchParams.get('locale') || 'en';
  const page = Number(searchParams.get('page') || 1);
  const tag = searchParams.get('tag') || undefined;
  // Placeholder empty list
  return NextResponse.json({items: [], page, locale, tag});
}

export async function POST() {
  return new NextResponse('Not implemented', {status: 501});
}

