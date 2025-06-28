import { ObjectLight } from "atomv2/types/objectTypes";
import RenderAtom from "../Atoms/RenderAtom";
import { AtomUrlV2Props } from "../Atoms/AtomUrlV2";

export default function MoleculeBackButton({
  item,
  url,
  ...props
}: {
  item?: ObjectLight;
  url?: AtomUrlV2Props;
}) {
  return (
    <RenderAtom
      url={url}
      value={item?.value || "← Буцах"}
      type="button"
      className=""
      variant="action1"
      onClick={() => {
        !url && window.history.back();
      }}
      {...props}
    />
  );
}
