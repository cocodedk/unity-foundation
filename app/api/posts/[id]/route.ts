import {NextResponse} from 'next/server';

export async function GET(_: Request, {params}: {params: {id: string}}) {
  return NextResponse.json({id: params.id, item: null});
}

export async function PUT() {
  return new NextResponse('Not implemented', {status: 501});
}

