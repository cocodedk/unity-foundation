import {NextResponse} from 'next/server';

export async function POST() {
  // TODO: Validate with zod + hCaptcha and send email
  return new NextResponse('Not implemented', {status: 501});
}

