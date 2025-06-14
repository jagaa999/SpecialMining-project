import PosTitle from "../Position/PosTitle";

export default function TextH1({
  value,
  item,
  ...props
}: {
  value?: string;
  item?: any;
  [key: string]: any;
}) {
  return <PosTitle item={value || item} as="h1" isHtml={true} {...props} />;
}
