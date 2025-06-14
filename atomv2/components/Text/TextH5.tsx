import PosTitle from "../Position/PosTitle";

export default function TextH5({
  value,
  item,
  ...props
}: {
  value?: string;
  item?: any;
  [key: string]: any;
}) {
  return <PosTitle item={value || item} as="h5" isHtml={true} {...props} />;
}
