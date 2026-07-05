import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

interface ToastProps {
  children: ReactNode;
  className?: string;
}

/** Toast notification (auto-dismiss handled by caller). Anim: il-toast-in. */
const Toast = ({ children, className }: ToastProps) => (
  <div
    role="status"
    data-testid={testIds.toast.root}
    className={cn(
      "animate-[il-toast-in_.2s_ease] rounded-md border border-line bg-surface px-3 py-2 text-sm",
      className,
    )}
  >
    {children}
  </div>
);

export { Toast };
