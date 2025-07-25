import { prepareMainNumber, toMotoPrice } from "../../util/widgetHelper";
import RenderAtom from "../Atoms/RenderAtom";

export default function PosPrice({
  item,
  ...props
}: {
  item: any;
  [key: string]: any;
}) {
  const valueReady = toMotoPrice(prepareMainNumber(item));
  return <RenderAtom value={valueReady} type="text" {...props} />;
}
