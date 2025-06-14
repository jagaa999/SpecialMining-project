import { prepareValue, toMotoPrice } from "../../util/widgetHelper";
import RenderAtom from "../Atoms/RenderAtom";

export default function PosPrice({
  item,
  ...props
}: {
  item: any;
  [key: string]: any;
}) {
  const valueReady = toMotoPrice(prepareValue(item));
  return <RenderAtom value={valueReady} type="text" {...props} />;
}
