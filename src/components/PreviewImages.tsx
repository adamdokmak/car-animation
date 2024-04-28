"use client";
import Image from "next/image";
import { bigImages, smallImages, spring } from "@/utils";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PreviewImages() {
  const ref = useRef<HTMLDivElement>(null);

  const imgProps = {
    whileInView: { scale: 1 },
    viewport: { margin: "10%" },
    transition: spring,
    style: { scale: 2 },
  };

  return (
    <motion.div
      ref={ref}
      className="flex h-full w-full flex-col items-center justify-center gap-5"
    >
      <div className="flex h-fit w-fit items-center justify-center gap-5">
        {bigImages.map(({ src, alt }, i) => (
          <motion.figure
            className={`h-full w-full max-w-56 overflow-hidden rounded-2xl brightness-125 contrast-[0.8] lg:max-w-sm ${i === 2 && "max-md:hidden"}`}
            key={i}
          >
            <motion.div {...imgProps} className="relative">
              <Image alt={alt} src={src} width={1920} height={1020} />
            </motion.div>
          </motion.figure>
        ))}
      </div>
      <div className="flex h-fit w-fit items-center justify-center gap-5">
        {smallImages.map(({ src, alt }, i) => (
          <figure
            className={`h-full w-full max-w-36 overflow-hidden rounded-xl brightness-125 contrast-[0.8] lg:max-w-60 ${i === 3 && "max-md:hidden"}`}
            key={i}
          >
            <motion.div {...imgProps} className="relative">
              <Image alt={alt} src={src} width={1920} height={1020} />
            </motion.div>
          </figure>
        ))}
      </div>
    </motion.div>
  );
}
