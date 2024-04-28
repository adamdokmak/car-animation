import { ReactNode } from "react";
import cn from "@/cn";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={cn(
        "text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-nowrap font-extrabold capitalize leading-tight text-black",
        className,
      )}
    >
      {children}
    </h1>
  );
}
