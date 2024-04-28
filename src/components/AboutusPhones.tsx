import Image from "next/image";
import { forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutusPhones = forwardRef((props, ref: any) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["200%", "-200%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-60deg", "60deg"]);

  const y1 = useTransform(scrollYProgress, [0, 1], ["150%", "-225%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], ["20deg", "0deg"]);
  return (
    <div className="relative mb-20 mt-32 flex h-full w-full items-center justify-center">
      <motion.figure
        style={{ y, rotate }}
        className="relative w-52 -translate-x-10 md:w-64 xl:w-72"
      >
        <Image
          alt="left phone"
          src={"/phoneLeft.png"}
          priority
          quality={1}
          width={5076}
          height={6780}
        />
      </motion.figure>
      <motion.figure
        style={{ y: y1, rotate: rotate1, x: "50%" }}
        className="absolute top-0 w-44 -translate-y-1/4 translate-x-1/4 md:w-56 xl:w-60"
      >
        <Image
          alt="right phone"
          src={"/phoneRight.png"}
          priority
          quality={1}
          width={4280}
          height={6676}
        />
      </motion.figure>
    </div>
  );
});

AboutusPhones.displayName = "AboutusPhones";
export default AboutusPhones;
