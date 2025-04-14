import { generalTheme } from "src/components/special/generalConfig";

export default function PanelContainer({ children }: any) {
  return <div className={generalTheme?.containerMain}>{children}</div>;
}
