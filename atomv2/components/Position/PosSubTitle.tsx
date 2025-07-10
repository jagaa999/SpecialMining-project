import { prepareSubTitle } from "../../util/widgetHelper";
import RenderAtom from "../Atoms/RenderAtom";

export default function PosSubTitle({
  item,
  ...props
}: {
  item: any;
  [key: string]: any;
}) {
  const valueReady = prepareSubTitle(item);
  return <RenderAtom value={valueReady} type="text" {...props} />;
}
