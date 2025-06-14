import { prepareValue } from "../../util/widgetHelper";
import RenderAtom from "../Atoms/RenderAtom";

export default function PosValue({
  item,
  ...props
}: {
  item: any;
  [key: string]: any;
}) {
  const valueReady = prepareValue(item);
  return <RenderAtom value={valueReady} type="text" {...props} />;
}
