import {NextResponse} from 'next/server';

export async function PATCH(_: Request, {params}: {params: {id: string}}) {
  // Placeholder toggle
  return NextResponse.json({id: params.id, published: true});
}

