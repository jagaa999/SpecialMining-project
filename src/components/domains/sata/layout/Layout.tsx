import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
