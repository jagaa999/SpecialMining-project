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
