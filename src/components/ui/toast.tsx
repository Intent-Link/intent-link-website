import type { ReactNode } from "react";
import { cn } from "@/utils/class-names";

interface ToastProps {
  children: ReactNode;
  className?: string;
}

/** Toast notification (auto-dismiss handled by caller). Anim: il-toast-in. */
const Toast = ({ children, className }: ToastProps) => (
  <div
    role="status"
    className={cn(
      "rounded-md border border-line bg-surface px-3 py-2 text-sm sm:animate-[il-toast-in_.24s_cubic-bezier(0.34,1.56,0.5,1)]",
      className,
    )}
  >
    {children}
  </div>
);

export { Toast };
