import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function GET() {
  const announcement = await prisma.announcement.findUnique({
    where: { id: 1 },
    include: { i18n: true }
  });

  return NextResponse.json(announcement);
}

export async function PUT(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !["ADMIN", "EDITOR"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { mobilePay, enabled, i18n } = body;

  const announcement = await prisma.announcement.upsert({
    where: { id: 1 },
    create: {
      mobilePay,
      enabled,
      i18n: {
        create: i18n
      }
    },
    update: {
      mobilePay,
      enabled,
      i18n: {
        deleteMany: {},
        create: i18n
      }
    },
    include: { i18n: true }
  });

  return NextResponse.json(announcement);
}
