"use client";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  navbarHeight?: number; // пиксэл нэгжээр
}

export default function BlockScrollSnapScreenBlock({
  children,
  className = "",
}: Props) {
  //   const snapHeight = `calc(100vh - ${navbarHeight}px)`;
  const snapHeight = `calc(100vh)`;

  return (
    <div
      className={`w-full overflow-y-scroll scroll-smooth ${className}`}
      style={{ scrollSnapType: "y mandatory", height: snapHeight }}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <section
            key={index}
            className="scroll-snap-start flex-shrink-0"
            style={{ scrollSnapAlign: "start", height: snapHeight }}>
            {child}
          </section>
        ))
      ) : (
        <section
          className="scroll-snap-start flex-shrink-0"
          style={{ scrollSnapAlign: "start", height: snapHeight }}>
          {children}
        </section>
      )}
    </div>
  );
}
