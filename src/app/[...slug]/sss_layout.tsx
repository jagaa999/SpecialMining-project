// import { headers } from "next/headers";
import Script from "next/script";

import "public/fonts/roboto.css";
import "public/globals.css";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import { GoogleOneTap } from "src/components/Public/GoogleOneTap";
import { AntdMessageProvider } from "src/config/context/AntdMessageContext";
import AntdThemeProvider from "src/config/context/AntdThemeProvider";
import { AuthProvider } from "src/config/context/AuthContext";
import { ConfigProvider } from "src/config/context/ConfigContext";
import { DomainProvider } from "src/config/context/DomainContext";
import { getLayoutWrapper } from "src/config/utils/getLayoutWrapper";
import { ClientSWRProvider } from "src/config/provider/ClientSWRProvider";

export const dynamic = "auto";
export const revalidate = 3600; // ISR 1цаг

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string[] };
}) {
  // const headersList = await headers();
  // const domain = headersList.get("x-domain-id") || "default";
  const domain = params.slug?.[0] || "default";

  console.log("KILLER 🚀 ~ RootLayout ~ domain:", domain);

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
                    className="min-h-screen bg-gray-100 text-gray-900 antialiased font-roboto">
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
