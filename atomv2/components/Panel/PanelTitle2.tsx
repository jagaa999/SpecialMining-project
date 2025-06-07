import { cn } from "atomv2/util/atomHelperV2";
import RenderAtom from "../system/RenderAtom";
import { generalTheme } from "src/components/domains/aikido/Widget/AikidoGeneralConfig";

export default function PanelTitle2({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <RenderAtom
      value={value}
      type="text"
      className={cn(generalTheme?.title2, className)}
    />
  );
}
