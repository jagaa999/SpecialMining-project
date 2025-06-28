import { Result } from "antd";
import BlockDiv from "../Blocks/BlockDiv";

export default function MoleculeEmptyState({ message = "Мэдээлэл олдсонгүй" }) {
  return (
    <BlockDiv className="w-full h-full rounded-brand flex items-center justify-center bg-muted/10 py-10">
      <Result status="info" title={message} />
    </BlockDiv>
  );
}
