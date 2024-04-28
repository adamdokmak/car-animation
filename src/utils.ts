import {
  BatteryCar,
  BlinkerCar,
  ModernCar,
  VintageCar,
} from "@/components/svgFiles";

export const spring = {
  duration: 0.8,
  stiffness: 20,
  mass: 20,
  damping: 30 ,
};

export const tags = ["elegance", "dynamics", "comfort", "bliss", "innovation"];

export const bigImages = [
  {
    src: "/Car7.png",
    alt: "big car 7",
  },
  {
    src: "/Car6.png",
    alt: "big car 6",
  },
  {
    src: "/Car5.png",
    alt: "big car 5",
  },
];

export const smallImages = [
  {
    src: "/Car4.png",
    alt: "big car 4",
  },
  {
    src: "/Car3.png",
    alt: "small car 3",
  },
  {
    src: "/Car2.png",
    alt: "small car 2",
  },
  {
    src: "/Car1.png",
    alt: "small car 1",
  },
];

export const features = [
  {
    title: "Card",
    subtitle: "Feature",
    icon: VintageCar,
  },
  {
    title: "Card",
    subtitle: "Feature",
    icon: ModernCar,
  },
  {
    title: "Card",
    subtitle: "Feature",
    icon: BlinkerCar,
  },
  {
    title: "Card",
    subtitle: "Feature",
    icon: BatteryCar,
  },
];
