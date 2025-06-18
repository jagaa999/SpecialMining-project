import { prepareIcon } from "../../util/widgetHelper";
import RenderAtom from "../Atoms/RenderAtom";

export default function PosIcon({
  item,
  ...props
}: {
  item: any;
  [key: string]: any;
}) {
  const valueReady = prepareIcon(item);
  return <RenderAtom value={valueReady} type="icon" {...props} />;
}
