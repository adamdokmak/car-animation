import { tags } from "@/utils";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import Tag from "@/components/Tag";
import PreviewImages from "@/components/PreviewImages";

export default function Preview() {
  return (
    <section className="h-[100svh] w-full py-12">
      <div className="mx-auto flex h-full w-full flex-col items-center justify-between gap-10 p-7 text-center lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <Paragraph className="font-thin">
            Luxurious Options, Tailored for You
          </Paragraph>
          <Title className="text-wrap">Luxury Redefined</Title>
          <Paragraph className="text-[11px]">
            Elevate your experience with our premium fleet. Choose from 5
            luxurious car filters, each tailored to exceed your expectations.
          </Paragraph>
          <div className="flex h-fit w-full flex-wrap items-center justify-center gap-3">
            {tags.map((tag, i) => (
              <Tag
                className={`${i === 0 && "bg-[#0C6C95]"}`}
                text={tag}
                key={i}
              />
            ))}
          </div>
        </div>
        <PreviewImages />
      </div>
    </section>
  );
}
