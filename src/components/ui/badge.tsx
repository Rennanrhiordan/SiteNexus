import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "blue" | "violet";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-white/10 text-white/80": variant === "default",
          "border border-white/10 text-white/60": variant === "outline",
          "bg-blue-500/10 text-blue-400 border border-blue-500/20": variant === "blue",
          "bg-violet-500/10 text-violet-400 border border-violet-500/20": variant === "violet",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
