"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/**
 *
 * @param  FormData
 */
export async function createBlog(data: FormData) {
  const authorName = data.get("authorName")?.toString() || "";
  const title = data.get("title")?.toString() || "";
  const description = data.get("description")?.toString() || "";

  if (!authorName || !title || !description) {
    throw new Error("All fields are required.");
  }

  await prisma.blog.create({
    data: { authorName, title, description },
  });
  revalidatePath("/blogs");
}

/**
 *
 * @returns blogs[]
 */
export async function getBlogs() {
  return prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });
}
/**
 * getSingleBlog
 * @params blogId
 * @returns blog
 */

export async function getSingleBlog(blogId: string) {
  return prisma.blog.findUniqueOrThrow({
    where: { id: blogId },
  });
}
/**
 *
 * @param formData
 * @returns nothing
 */
export async function updateBlog(data: FormData) {
  const id = data.get("id")?.toString() || ""
  const title = data.get("title")?.toString() || "";
  const description = data.get("description")?.toString() || "";

  if (!id || !title || !description) {
    throw new Error("ID, Title, and Description are required.");
  }

  await prisma.blog.update({
    where: { id },
    data: { title, description },
  });
    revalidatePath("/blogs");
    redirect("/blogs");
}

/**
 *
 * @param formData
 * @returns
 */

export async function deleteBlog(data: FormData) {
  const id = data.get("id")?.toString() || ""
  if (!id) {
    throw new Error("ID is required.");
  }

  await prisma.blog.delete({
    where: { id },
  });
  revalidatePath("/blogs");
}
