import { JSX } from "react";
import cn from "@/cn";
import { MotionValue, motion } from "framer-motion";

type FeatureCardProps = {
  title: string;
  subtitle: string;
  variant: "feature" | "hero";
  icon: JSX.Element;
  y?: MotionValue;
};

export default function FeatureCard({
  title,
  subtitle,
  icon,
  variant,
  y
}: FeatureCardProps) {

  return (
    <motion.div
      style={{ y }}
      className={cn("flex flex-col gap-5 rounded-xl text-black", {
        "h-full w-auto grow items-center justify-center bg-white px-8 py-4 text-center shadow-2xl":
          variant === "hero",
        "h-fit w-auto grow items-start justify-start gap-20 border-2 border-white bg-[#ECEDEE] pb-5 pl-5 pr-12 pt-3":
          variant === "feature",
      })}
    >
      <div
        className={cn(
          "relative flex aspect-square h-fit w-fit items-center justify-center rounded-full bg-white p-4 shadow-xl",
          {
            "bg-white": variant === "hero",
            "bg-transparent": variant === "feature",
          },
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <p
          className={cn("text-sm font-bold", {
            "font-light": variant === "feature",
          })}
        >
          {title}
        </p>
        <p className="text-sm font-light">{subtitle}</p>
      </div>
    </motion.div>
  );
}
