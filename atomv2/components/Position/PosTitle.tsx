import { prepareTitle } from "../../util/widgetHelper";
import RenderAtom from "../Atoms/RenderAtom";

export default function PosTitle({
  item,
  ...props
}: {
  item: any;
  [key: string]: any;
}) {
  const valueReady = prepareTitle(item);
  return <RenderAtom value={valueReady} type="text" {...props} />;
}
