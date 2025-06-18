import PosTitle from "../Position/PosTitle";

export default function TextH3({
  value,
  item,
  ...props
}: {
  value?: string;
  item?: any;
  [key: string]: any;
}) {
  return <PosTitle item={value || item} as="h3" isHtml={true} {...props} />;
}
