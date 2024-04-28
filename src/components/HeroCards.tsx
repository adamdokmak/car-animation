"use client";
import { ModernCar } from "@/components/svgFiles";
import FeatureCard from "@/components/FeatureCard";
import { features } from "@/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroCards() {
  const { scrollYProgress } = useScroll({
    offset: ["start", "end start"],
  });

  const y = [
    useTransform(scrollYProgress, [0, 1], [0, -1500]),
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    useTransform(scrollYProgress, [0, 1], [0, -500]),
  ];
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-8 md:h-fit max-md:[&>*:nth-child(3)]:hidden max-md:[&>*:nth-child(4)]:hidden">
      {features.map(({ title, subtitle }, i) => (
        <motion.div style={{ y: y[i] }} key={i} className="flex grow">
          <FeatureCard
            key={i}
            title={title}
            subtitle={subtitle}
            icon={<ModernCar />}
            variant="hero"
          />
        </motion.div>
      ))}
      <div className="hidden h-full w-full items-center justify-center rounded-xl bg-black p-14 md:flex">
        <div className="h-12 w-24 rounded-full bg-white" />
      </div>
    </div>
  );
}
