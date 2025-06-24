import TextHtml from "./TextHtml";

export default function TextBody({ ...props }: { [key: string]: any }) {
  return <TextHtml {...props} />;
}
