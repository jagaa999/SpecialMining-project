import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";

const antdTheme: ThemeConfig = {
  token: {
    fontFamily: `'Roboto', 'sans-serif'`,
  },
};

export default function AntdThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
}
