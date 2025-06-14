import PosTitle from "../Position/PosTitle";

export default function TextH4({
  value,
  item,
  ...props
}: {
  value?: string;
  item?: any;
  [key: string]: any;
}) {
  return <PosTitle item={value || item} as="h4" isHtml={true} {...props} />;
}
