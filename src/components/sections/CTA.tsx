"use client";
import Image from "next/image";
import Button from "@/components/Button";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['200%', '0%']);
  return (
    <section className="h-svh w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-40 overflow-clip px-5 py-10 md:flex-row md:gap-0 md:p-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center md:text-start">
            <Title className="text-wrap">ready to driveLux?</Title>
            <Paragraph>
              Join the DriveLux Community; Sign Up Today, Experience Tomorrow
            </Paragraph>
          </div>
          <div className="flex h-fit w-full items-center justify-center gap-5">
            <Button variant="primary">Sign Up</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <motion.div
          style={{ x }}
          className="relative flex h-fit w-full items-center justify-center md:-right-[25%] md:items-end md:justify-end"
        >
          <figure className="absolute bottom-1/2 -z-10 w-4/5 max-w-[500px] translate-y-1/4 md:left-[10%] lg:left-[20%]">
            <Image
              alt="car dots"
              src={"/carDots.png"}
              width={1063}
              height={673}
            />
          </figure>
          <figure className="w-svw md:max-w-[60svw]">
            <Image alt="car" src={"/blackCar.png"} width={4096} height={1244} />
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
