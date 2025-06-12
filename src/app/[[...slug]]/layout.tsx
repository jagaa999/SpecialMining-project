import { cookies } from "next/headers";
import "public/fonts/roboto.css";
import "public/globals.css";
// import "src/components/domains/aikido/Theme/theme.css";
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
  // console.log("🚀 ~ DOMAIN:", domain);

  // ЭНЭ ХАМГИЙН ЧУХАЛ НЬ!!
  const LayoutWrapper = await getLayoutWrapper(domain);

  const bodyClassname =
    "min-h-screen bg-gray-100 text-gray-900 antialiased font-roboto";

  return (
    <html lang="mn" className={`theme-${domain}`}>
      <head>
        <link rel="stylesheet" href={`/${domain}/theme.css`} />
      </head>
      <DomainProvider domain={domain}>
        <ClientSWRProvider>
          <ConfigProvider>
            {/* <ThemeInjector> */}
            <body className={bodyClassname}>
              <LayoutWrapper>{children}</LayoutWrapper>
            </body>
            {/* </ThemeInjector> */}
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
