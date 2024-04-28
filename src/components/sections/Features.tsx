"use client";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import FeatureCard from "@/components/FeatureCard";
import { features } from "@/utils";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = [
    useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]),
    useTransform(scrollYProgress, [0, 1], ["150%", "-150%"]),
    useTransform(scrollYProgress, [0, 1], ["200%", "-200%"]),
    useTransform(scrollYProgress, [0, 1], ["250%", "-250%"]),
  ];

  return (
    <section ref={ref} className="h-full w-full">
      <div className="mx-auto flex h-full w-full flex-col justify-center gap-24 p-10">
        <div className="flex h-fit w-full flex-col items-start justify-start gap-10">
          <div className="flex flex-col justify-start gap-2">
            <Paragraph className="font-thin">
              DriveLux App - Elevate Your Travel Experience
            </Paragraph>
            <Title className="text-wrap">Seamless Experience</Title>
          </div>
          <Paragraph className="md:text-base">
            Unlock a world of convenience with the DriveLux app. Benefits
            include
          </Paragraph>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {features.map(({ title, subtitle, icon: Icon }, i) => (
            <FeatureCard
              y={y[i]}
              key={i}
              title={title}
              subtitle={subtitle}
              icon={<Icon />}
              variant="feature"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
