import {NextResponse} from 'next/server';

export async function GET() {
  // Placeholder returning disabled banner; values would be loaded from DB in v1
  return NextResponse.json({
    enabled: false,
    mobilePay: process.env.NEXT_PUBLIC_MOBILEPAY_BOX || '',
    bannerText: ''
  });
}

export async function PUT(req: Request) {
  // TODO: Auth + persist to DB; for now, reject
  return new NextResponse('Not implemented', {status: 501});
}

