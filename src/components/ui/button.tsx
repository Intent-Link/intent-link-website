import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

/** Button style variants. Const map + derived union — no magic strings. */
const buttonVariant = {
  primary: "primary",
  ghost: "ghost",
} as const;

type ButtonVariant = (typeof buttonVariant)[keyof typeof buttonVariant];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/** Base button primitive (shadcn-style). TODO: flesh out variants. */
const Button = ({ variant = buttonVariant.primary, className, ...props }: ButtonProps) => {
  return (
    <button
      data-testid={testIds.button.root}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        variant === buttonVariant.primary && "bg-accent text-accent-ink",
        variant === buttonVariant.ghost && "border border-line text-ink",
        className,
      )}
      {...props}
    />
  );
};

export { buttonVariant, Button };
export type { ButtonVariant };
