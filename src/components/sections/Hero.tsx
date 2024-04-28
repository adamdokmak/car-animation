import MainCar from "@/components/MainCar";
import HeroText from "@/components/HeroText";
import HeroCards from "@/components/HeroCards";

export default function Hero() {
  return (
    <section className="mx-auto mt-20 h-svh w-full max-w-screen-2xl flex-col p-5 lg:px-10">
      <div className="flex h-auto w-full flex-col items-center justify-center gap-10 self-center md:h-full md:flex-row ">
        <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:h-fit md:self-start xl:self-center">
          <HeroText />
          <MainCar className="md:flex xl:hidden" />
        </div>
        <MainCar className="xl:flex" />
        <HeroCards />
      </div>
      <MainCar className="flex md:hidden" />
    </section>
  );
}
