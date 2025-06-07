import { cn } from "atomv2/util/atomHelperV2";
import RenderAtom from "../system/RenderAtom";
import { generalTheme } from "src/components/domains/aikido/Widget/AikidoGeneralConfig";

export default function PanelTextMain({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const dddd = cn(generalTheme?.textMain, className);
  console.log("PanelTextMain", { value, className, dddd });
  return (
    <RenderAtom
      value={value}
      type="text"
      className={cn(generalTheme?.textMain, className)}
    />
  );
}
