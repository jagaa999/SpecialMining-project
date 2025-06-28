import { Spin } from "antd";
import BlockDiv from "../Blocks/BlockDiv";

export default function MoleculeLoadingSpinner() {
  return (
    <BlockDiv className="w-full h-full rounded-brand flex items-center justify-center bg-muted/10 py-24">
      <Spin size="large" tip="Уншиж байна..." />
    </BlockDiv>
  );
}
