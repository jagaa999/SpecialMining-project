import { isEmpty } from "lodash";
import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

interface AtomGoogleMapProps extends AtomBaseProps {
  value?: string; // iframe src
}

export default function AtomGoogleMapV2({
  value,
  className,
  ...props
}: AtomGoogleMapProps) {
  if (isEmpty(value)) return null;

  return (
    <iframe
      src={value}
      loading="lazy"
      allowFullScreen
      width="100%"
      height="100%"
      className={cn("w-full h-full border-0", className)}
      {...props}
    />
  );
}
