import { cookies } from "next/headers";
import "public/fonts/roboto.css";
import "public/globals.css";
import AntdThemeProvider from "src/config/context/AntdThemeProvider";
// import "src/components/domains/aikido/Theme/theme.css";
import { AntdMessageProvider } from "src/config/context/AntdMessageContext";
import { ConfigProvider } from "src/config/context/ConfigContext";
import { DomainProvider } from "src/config/context/DomainContext";
// import { ThemeInjector } from "src/config/context/ThemeInjector";
import { ClientSWRProvider } from "src/config/provider/ClientSWRProvider";
import { getDomainMetadata } from "src/config/utils/getDomainMetadata";
import { getLayoutWrapper } from "src/config/utils/getLayoutWrapper";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const domain = cookieStore.get("domain")?.value || "default";

  // ЭНЭ ХАМГИЙН ЧУХАЛ НЬ!!
  //Тухайн домэйний Page-ийг авчирч хучиж өгнө.
  const LayoutWrapper = await getLayoutWrapper(domain);

  return (
    <html lang="mn" className={`theme-${domain}`}>
      <head>
        <link rel="stylesheet" href={`/${domain}/theme.css`} />
      </head>
      <DomainProvider domain={domain}>
        <ClientSWRProvider>
          <ConfigProvider>
            <AntdMessageProvider>
              <AntdThemeProvider>
                <body
                  className={
                    "min-h-screen bg-gray-100 text-gray-900 antialiased font-roboto"
                  }>
                  <LayoutWrapper>{children}</LayoutWrapper>
                </body>
              </AntdThemeProvider>
            </AntdMessageProvider>
          </ConfigProvider>
        </ClientSWRProvider>
      </DomainProvider>
    </html>
  );
}

// Domain-ээс хамаарсан metadata-ийг generateMetadata дотор авчирна.
export async function generateMetadata() {
  return await getDomainMetadata();
}
