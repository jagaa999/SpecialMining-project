import { generalTheme } from "src/components/domains/special/generalConfig";

export default function PanelContainer({ children }: any) {
  return <div className={generalTheme?.containerMain}>{children}</div>;
}
