import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session || !["ADMIN", "EDITOR"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { publish } = body;
  const { id } = await params;

  const post = await prisma.post.update({
    where: { id },
    data: {
      status: publish ? "PUBLISHED" : "DRAFT",
      publishedAt: publish ? new Date() : null
    }
  });

  return NextResponse.json(post);
}
