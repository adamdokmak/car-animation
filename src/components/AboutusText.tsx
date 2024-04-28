import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef } from "react";

const AboutusText = forwardRef((props, ref: any) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  return (
    <div className="flex w-full items-center justify-center md:justify-start">
      <motion.div
        style={{ y }}
        className="flex h-full w-full max-w-sm flex-col items-start justify-center gap-4 md:h-svh"
      >
        <Paragraph className="font-thin">
          Unmatched Fleet, Unforgettable Journeys
        </Paragraph>
        <Title>
          Choose <br /> Your Ride
        </Title>
        <Paragraph className="leading-normal">
          From sleek sedans to powerful SUVs, find the perfect car for every
          occasion. Your journey begins with DriveLux.
        </Paragraph>
        <div className="flex h-fit w-full items-center justify-center gap-2 min-[375px]:gap-5">
          <Button variant="primary">browse fleet</Button>
          <Button variant="outline">plan your trip</Button>
        </div>
      </motion.div>
    </div>
  );
});

AboutusText.displayName = "AboutusText";
export default AboutusText;