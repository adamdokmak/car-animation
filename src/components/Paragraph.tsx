import { ReactNode } from "react";
import cn from "@/cn";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={cn("text-xs font-normal lg:text-sm", className)}>
      {children}
    </p>
  );
}
