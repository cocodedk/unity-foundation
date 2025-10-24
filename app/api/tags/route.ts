import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  const tags = await prisma.tag.findMany({
    include: {
      labels: {
        where: { locale }
      }
    }
  });

  return NextResponse.json(tags);
}
