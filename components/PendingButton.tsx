"use client"
import React from "react";
import { Button, type ButtonProps } from "./ui/button";
import { useFormStatus } from "react-dom";
interface Props extends ButtonProps {
  className?: string;
  pendingText?: string
  isPending?: boolean
}
const PendingButton = ({ className,pendingText="Sending...", ...props }: Props) => {
  const { pending } = useFormStatus();
  const PendingOrIsPending=pending || props.isPending
  return (
    <Button {...props} disabled={PendingOrIsPending}  className={className}>
      {PendingOrIsPending ? pendingText : props.children}
    </Button>
  );
};

export default PendingButton;
