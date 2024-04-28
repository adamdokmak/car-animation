import cn from "@/cn";

type TagProps = {
  text: string;
  className?: string;
};

export default function Tag({ text, className }: TagProps) {
  return (
    <div
      className={cn(
        "flex h-fit w-fit items-center justify-center rounded-md bg-neutral-800 px-4 py-1 text-[10px] text-white",
        className,
      )}
    >
      {text}
    </div>
  );
}
