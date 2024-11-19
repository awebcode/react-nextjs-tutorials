"use client"
import PendingButton from "@/components/PendingButton";
import { Input } from "@/components/ui/input";
import React, { useActionState } from "react";
import { updateUserAction } from "./actions";

export function UpdateUser() {
  const [data, action] = useActionState(updateUserAction, null);
  console.log({ data });
  
  return (
    <form action={action}>
      <Input type="text" name="username" placeholder="username" />
      <Input type="email" name="email" placeholder="email" />
      <PendingButton>Update</PendingButton>
    </form>
  );
}

export default UpdateUser;
