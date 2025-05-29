import { cookies } from "next/headers";
import "public/fonts/roboto.css";
import "public/globals.css";
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
  // console.log("🚀 ~ DOMAIN:", domain);

  // ЭНЭ ХАМГИЙН ЧУХАЛ НЬ!!
  const LayoutWrapper = await getLayoutWrapper(domain);

  const bodyClassname =
    "min-h-screen bg-gray-100 text-gray-900 antialiased font-roboto";

  return (
    <html lang="mn">
      <DomainProvider domain={domain}>
        <ClientSWRProvider>
          <ConfigProvider>
            <body className={bodyClassname}>
              <LayoutWrapper>{children}</LayoutWrapper>
            </body>
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
