"use client";

import Header from "../layout/Header"; // зөв path-аа тохируул
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
