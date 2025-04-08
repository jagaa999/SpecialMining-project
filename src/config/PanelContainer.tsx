import { generalTheme } from "../config/generalConfig";

export default function PanelContainer({ children }: any) {
  return <div className={generalTheme?.containerMain}>{children}</div>;
}
