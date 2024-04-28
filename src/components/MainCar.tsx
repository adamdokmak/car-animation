"use client";
import Image from "next/image";
import cn from "@/cn";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MainCar({ className }: { className: string }) {
  const { scrollYProgress } = useScroll({
    offset: ["start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-150%"]);
  return (
    <motion.figure
      style={{ y }}
      className={cn(
        "relative hidden w-full items-center justify-center md:z-50 xl:top-20",
        className,
      )}
    >
      <Image
        className="w-[90svw] sm:w-[60svw]"
        alt="main car"
        src={"/blueCar.png"}
        width={1776}
        height={3544}
      />
    </motion.figure>
  );
}
