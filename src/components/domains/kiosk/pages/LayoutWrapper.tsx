// LayoutWrapper.tsx
"use client";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}