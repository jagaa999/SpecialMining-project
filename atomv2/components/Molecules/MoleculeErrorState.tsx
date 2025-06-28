import { Result } from "antd";
import BlockDiv from "../Blocks/BlockDiv";

export default function MoleculeErrorState({ message = "Алдаа гарлаа" }) {
  return (
    <BlockDiv className="w-full h-full rounded-brand flex items-center justify-center bg-muted/10 py-10">
      <Result status="error" title={message} />
    </BlockDiv>
  );
}
