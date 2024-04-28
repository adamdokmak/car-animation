import { ReactNode } from "react";
import cn from "@/cn";

type buttonProps = {
  children: ReactNode;
  variant: "primary" | "outline";
  className?: string;
};
export default function Button({ children, variant, className }: buttonProps) {
  return (
    <button
      className={cn(
        "box-border flex w-full items-center justify-center whitespace-nowrap rounded-full border-2 border-black px-4 py-2 text-xs min-[375px]:text-sm",
        {
          "bg-black font-normal text-white": variant === "primary",
          "font-semibold text-black": variant === "outline",
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
