import { cn } from "@/lib/utils";

type Props = {
  imageUrl: string;
  caption: string;
  className?: string;
};

export default function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={cn(
        "w-[250px] overflow-hidden rounded-base border-2 border-foreground font-base shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150",
        className,
      )}
    >
      <img
        className="w-full aspect-4/3 object-cover object-top "
        src={imageUrl}
        alt="image"
      />
      <figcaption className="border-t-2 text-main-foreground border-foreground p-4">
        {caption}
      </figcaption>
    </figure>
  );
}
