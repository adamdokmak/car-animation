"use client";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function HeroText() {
  const ref = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery("(min-width: 768px)");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", isTablet ? "-200%" : "0%"]);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", !isTablet ? "-100%" : "0%"],
  );

  return (
    <motion.div style={{ x, y }} className="flex flex-col gap-4 pt-20 -mt-20" ref={ref}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center md:items-start md:justify-start md:text-start">
        <div className="flex h-fit w-auto items-center justify-center rounded-full bg-[#0C6C95] px-4 py-1 text-center text-[10px] capitalize text-white">
          welcome to driveLux
        </div>
        <Title className="uppercase">
          <span className="font-light">explore</span> <br />
          drive, enjoy
        </Title>
        <Paragraph className="leading-loose">
          Discover the ultimate car rental experience with DriveLux. Seamless
          bookings, premium vehicles, and unforgettable journeys await.
        </Paragraph>
      </div>
      <div className="flex h-fit w-full items-center justify-center gap-5">
        <Button variant="primary">Get Started</Button>
        <Button variant="outline">Get Started</Button>
      </div>
    </motion.div>
  );
}
