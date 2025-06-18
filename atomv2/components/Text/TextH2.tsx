import PosTitle from "../Position/PosTitle";

export default function TextH2({
  value,
  item,
  ...props
}: {
  value?: string;
  item?: any;
  [key: string]: any;
}) {
  return <PosTitle item={value || item} as="h2" isHtml={true} {...props} />;
}
