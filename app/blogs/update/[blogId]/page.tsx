import React from "react";
import { getSingleBlog, updateBlog } from "../../blogActions";
import { Input } from "@/components/ui/input";
import PendingButton from "@/components/PendingButton";
import { Textarea } from "@/components/ui/textarea";
type Props = {
  params: Promise<{
    blogId: string;
  }>;
};
const page = async ({ params }: Props) => {
  const { blogId } = await params;
  const blog = await getSingleBlog(blogId);
  if (!blog) {
    return <h1>Blog not found</h1>;
  }
  return (
    <form
      action={updateBlog}
      className="container max-w-lg px-4 my-4  flex flex-col gap-2"
    >
      <Input type="hidden" name="id" value={blog.id} />
      <Input type="text" name="title" defaultValue={blog.title} placeholder="Title" />
      <Textarea
        name="description"
        defaultValue={blog.description}
        placeholder="Description"
        className="resize-none"
      />
      <PendingButton pendingText="Updating...">Update</PendingButton>
    </form>
  );
};

export default page;
