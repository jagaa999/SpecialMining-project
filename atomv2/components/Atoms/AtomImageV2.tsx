import { ImageProps } from "next/image";
import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

type AtomImageProps = Omit<ImageProps, "src" | "onClick" | "alt"> &
  Omit<AtomBaseProps, "onClick | children | alt"> & {
    src?: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
    alt?: string;
  };

export default function AtomImageV2({
  className,
  value,
  src,
  alt,
  ...props
}: AtomImageProps) {
  return (
    <img
      src={src ?? (value as string)}
      className={cn("object-contain rounded-brand", className)}
      alt={alt}
      {...props}
    />
  );

  // return (
  //   <Image
  //     src={src ?? (value as string)}
  //     className={cn("object-contain", className)}
  //     {...props}
  //   />
  // );
}
