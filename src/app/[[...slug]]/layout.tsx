import { cookies } from "next/headers";
import "public/fonts/roboto.css";
import "public/globals.css";
import { DomainProvider } from "src/config/context/DomainContext";
import { getLayoutWrapper } from "src/config/getLayoutWrapper";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const domain = cookieStore.get("domain")?.value || "default";
  console.log("🚀 ~ DOMAIN:", domain);

  const LayoutWrapper = await getLayoutWrapper(domain);

  const bodyClassname =
    "min-h-screen bg-gray-100 text-gray-900 antialiased font-roboto";

  return (
    <html lang="mn">
      <DomainProvider domain={domain}>
        <body className={bodyClassname}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </DomainProvider>
    </html>
  );
}

export const metadata = {
  title: "Special Mining",
  description: "Special Mining компанийн танилцуулга сайт",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Special Mining",
    description:
      "Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our clients’ interest.",
    url: "https://www.special.mn", // ← өөрийн домэйнийг оруул
    siteName: "Special Mining",
    images: [
      {
        url: "/images/dddd.jpg", // ← public дотор байрлах social preview зураг
        width: 1200,
        height: 630,
        alt: "Special Mining preview",
      },
    ],
    locale: "mn_MN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Mining",
    description: "Монголын уул уурхайн салбарын шийдэл.",
    images: ["/images/dddd.jpg"],
    creator: "@Special", // Twitter хэрэглэгчийн нэр байгаа бол
  },
};
