import {ReactNode} from "react";
import {cn} from "@/lib/utils";

export function FullDiv({children, className}: { children?: ReactNode, className?: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className={cn("absolute h-full w-full left-0 top-0", className)}>{children}</div>
    </div>
  )
}
