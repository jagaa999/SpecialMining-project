import { processResponsiveCDNImageV2 } from "atomv2/util/imagehelper";
import { isEmpty } from "lodash";
import { ImageProps } from "next/image";
import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

type AtomImageProps = Omit<ImageProps, "src" | "onClick" | "alt"> &
  Omit<AtomBaseProps, "onClick | children | alt"> & {
    src?: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
    alt?: string;
    cloudinaryParam?: string; //w_200,h_150,c_scale
  };

export default function AtomImageV2({
  className,
  value,
  src,
  alt,
  cloudinaryParam,
  ...props
}: AtomImageProps) {
  const imgSrc = src ?? String(value);

  if (isEmpty(imgSrc)) return null;

  const imgProps = processResponsiveCDNImageV2(imgSrc);

  return (
    <img
      src={imgProps.src}
      srcSet={imgProps.srcSet}
      sizes={imgProps.sizes}
      loading="lazy"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = "/images/icon-no-image_tcse9o.svg";
      }}
      className={cn("object-contain rounded-brand", className)}
      alt={alt || imgSrc}
      role="img"
      {...props}
    />
  );
}
