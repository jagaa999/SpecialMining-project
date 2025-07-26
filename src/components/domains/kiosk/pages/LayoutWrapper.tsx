import Header from "../Widget/KioskHeader";
import Footer from "../Widget/KioskFooter";
import "../Widget/theme.css";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
