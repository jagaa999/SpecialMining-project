import PosValue from "../Position/PosValue";

export default function TextHtml({
  value,
  item,
  ...props
}: {
  value?: string;
  item?: any;
  [key: string]: any;
}) {
  return <PosValue item={value || item} isHtml={true} {...props} />;
}
