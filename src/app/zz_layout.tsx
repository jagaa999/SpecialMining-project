import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import { cookies } from "next/headers";
import Script from "next/script";
import "public/fonts/roboto.css";
import "public/globals.css";
import { GoogleOneTap } from "src/components/Public/GoogleOneTap";
import { AntdMessageProvider } from "src/config/context/AntdMessageContext";
import AntdThemeProvider from "src/config/context/AntdThemeProvider";
import { AuthProvider } from "src/config/context/AuthContext";
import { ConfigProvider } from "src/config/context/ConfigContext";
import { DomainProvider } from "src/config/context/DomainContext";
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

  //Тухайн домэйний Page-ийг авчирч хучиж өгнө.
  const LayoutWrapper = await getLayoutWrapper(domain);

  return (
    <html lang="mn" className={`theme-${domain}`}>
      <head>
        <link rel="stylesheet" href={`/${domain}/theme.css`} />
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        />
      </head>
      <DomainProvider domain={domain}>
        <ClientSWRProvider>
          <ConfigProvider>
            <AntdMessageProvider>
              <AntdThemeProvider>
                <AuthProvider>
                  <BlockDiv
                    type="body"
                    data-block="BodyBlock"
                    className={
                      "min-h-screen bg-gray-100 text-gray-900 antialiased font-roboto"
                    }>
                    <LayoutWrapper>
                      {children}
                      <GoogleOneTap />
                    </LayoutWrapper>
                  </BlockDiv>
                </AuthProvider>
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
