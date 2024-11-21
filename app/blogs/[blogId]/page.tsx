import React from "react";
import { getSingleBlog } from "../blogActions";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{
    blogId: string;
  }>;
};
const BlogPage = async ({ params }: Props) => {
  const { blogId } = await params;
  const blog = await getSingleBlog(blogId);

  if (!blog) {
   notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">{blog.description}</p>
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-700">- {blog.authorName}</h3>
          <h3 className="text-xl font-semibold text-gray-700">Date: {blog.createdAt.toLocaleDateString()}</h3>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;