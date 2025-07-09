import BlockDiv from "../Blocks/BlockDiv";

export default function PanelSection({
  props,
  children,
}: {
  [key: string]: any;
  children: React.ReactNode;
}) {
  return (
    <BlockDiv type="section" data-block="PanelSection" {...props}>
      {children}
    </BlockDiv>
  );
}
