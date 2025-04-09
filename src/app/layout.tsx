import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import "../../public/fonts/roboto.css";

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

export default function RootLayout({ children }: any) {
  return (
    <html lang="mn">
      <body className="min-h-screen bg-gray-100 text-gray-900 antialiased font-roboto">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
