import { prepareImage } from "../../util/widgetHelper";
import RenderAtom from "../Atoms/RenderAtom";

export default function PosImage({
  item,
  ...props
}: {
  item: any;
  [key: string]: any;
}) {
  const valueReady = prepareImage(item);
  return <RenderAtom value={valueReady} type="image" {...props} />;
}
