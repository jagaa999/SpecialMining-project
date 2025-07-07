"use client";

import { map } from "lodash";
import Link from "next/link";

export default function KioskHeader() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-black tracking-wide text-brand drop-shadow-sm">
            KIOSK<span className="text-black">.MN</span>
          </h1>
        </Link>
        <nav className="space-x-6 text-sm md:text-base font-medium text-gray-800">
          {map(
            [
              { href: "/home", label: "Нүүр" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/kiosk", label: "Киоск" },
              { href: "/web", label: "Вэб" },
              { href: "/about", label: "Бидний тухай" },
            ],
            ({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-brand transition">
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
