import Image, { ImageProps } from "next/image";
import { cn } from "../../util/atomHelperV2";
import { AtomBaseProps } from "../../types/atomTypes";

type AtomImageProps = Omit<ImageProps, "src" | "onClick "> &
  Omit<AtomBaseProps, "onClick | children"> & {
    src?: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  };

export default function AtomImageV2({
  className,
  value,
  src,
  ...props
}: AtomImageProps) {
  return (
    <img
      src={src ?? (value as string)}
      className={cn("object-contain", className)}
      {...props}
    />
  );

  return (
    <Image
      src={src ?? (value as string)}
      className={cn("object-contain", className)}
      {...props}
    />
  );
}
