"use client";
import { useRef } from "react";
import AboutusText from "@/components/AboutusText";
import AboutusPhones from "@/components/AboutusPhones";

export default function AboutUs() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="mx-auto my-20 flex h-full w-full max-w-screen-2xl flex-col items-center justify-center p-5 md:flex-row-reverse"
    >
      <AboutusText ref={ref} />
      <AboutusPhones ref={ref} />
    </section>
  );
}
