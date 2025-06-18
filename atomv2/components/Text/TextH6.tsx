import PosTitle from "../Position/PosTitle";

export default function TextH6({
  value,
  item,
  ...props
}: {
  value?: string;
  item?: any;
  [key: string]: any;
}) {
  return <PosTitle item={value || item} as="h6" isHtml={true} {...props} />;
}
