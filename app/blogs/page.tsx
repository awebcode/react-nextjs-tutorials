import { createBlog, deleteBlog,  getBlogs } from "./blogActions";
import PendingButton from "@/components/PendingButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  Edit, Trash } from "lucide-react";
import Link from "next/link";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold">
        Blogs Management +{" "}
        <span className="bg-emerald-100 text-emerald-800 p-2">Prisma</span>
      </h1>

      {/* Form for Creating a New Blog */}
      <form action={createBlog} className="space-y-4">
        <Input
          type="text"
          name="authorName"
          placeholder="Author Name"
          className="input"
          required
        />
        <Input type="text" name="title" placeholder="Title" className="input" required />
        <Textarea
          name="description"
          placeholder="Description"
          className="resize-none"
          required
        />
        <PendingButton pendingText="Creating..." type="submit" className="btn">
          Add Blog
        </PendingButton>
      </form>

      {/* Display Blogs */}
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} className="border-b py-4">
            <Link
              href={`/blogs/${blog.id}`}
              className="text-lg font-semibold hover:underline"
            >
              {blog.title}
            </Link>

            <p className="text-sm text-gray-500">{blog.description}</p>
            <p className="text-xs text-gray-400">-{blog.authorName}</p>

            <div className="flex gap-2 items-center">
              <span className="p-2 bg-emerald-100 rounded-xl">
                <Link
                  href={`/blogs/update/${blog.id}`}
                  className="text-emerald-500 underline"
                >
                  <Edit />
                </Link>
              </span>

              {/* Delete Blog Form */}
              <form action={deleteBlog} className="mt-2">
                <Input type="hidden" name="id" value={blog.id} />
                <PendingButton
                  pendingText="Deleting..."
                  type="submit"
                  className=""
                  size={"icon"}
                >
                  <Trash />
                </PendingButton>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
