import { prepareDescription } from "../../util/widgetHelper";
import RenderAtom from "../Atoms/RenderAtom";

export default function PosDesc({
  item,
  ...props
}: {
  item: any;
  [key: string]: any;
}) {
  const valueReady = prepareDescription(item);
  return <RenderAtom value={valueReady} type="text" {...props} />;
}
