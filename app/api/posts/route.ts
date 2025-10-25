import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";
  const status = searchParams.get("status");

  const where: Record<string, string | boolean> = {};
  if (status) {
    where.status = status;
  }

  const posts = await prisma.post.findMany({
    where,
    include: {
      i18n: {
        where: { locale }
      },
      author: {
        select: { name: true, email: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, summary, body: content, locale = "en", coverId, gallery = [] } = body;

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 400 }
    );
  }

  const slug = slugify(title);

  const post = await prisma.post.create({
    data: {
      slug,
      coverId,
      gallery,
      authorId: session.user.id,
      i18n: {
        create: {
          locale,
          title,
          summary,
          body: content
        }
      }
    },
    include: {
      i18n: true
    }
  });

  return NextResponse.json(post);
}
