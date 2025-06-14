import { prepareMainNumber } from "../../util/widgetHelper";
import RenderAtom from "../Atoms/RenderAtom";

export default function PosMainNumber({
  item,
  ...props
}: {
  item: any;
  [key: string]: any;
}) {
  const valueReady = prepareMainNumber(item);
  return <RenderAtom value={valueReady} type="text" {...props} />;
}
