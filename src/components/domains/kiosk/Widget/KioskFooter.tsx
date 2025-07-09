"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextBody from "atomv2/components/Text/TextBody";

export default function KioskFooter() {
  return (
    <BlockDiv
      type="footer"
      className="w-full bg-[#1a1a1a] text-white pb-8 px-6 md:px-12 pt-24">
      <BlockDiv className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        {/* Brand & Description */}
        <BlockDiv className="space-y-4">
          <RenderAtom
            type="text"
            value="Kiosk.mn"
            className="text-2xl font-extrabold tracking-tight text-brand"
          />
          <TextBody
            value="Бид киоск болон веб интерфэйсийн UI/UX-д төвлөрсөн бүтээлч баг. Энгийн биш, хэрэглэгч төвтэй, технологийн шийдлүүдийг бүтээдэг."
            className="text-sm text-gray-400 leading-relaxed max-w-xs"
          />
        </BlockDiv>

        {/* Navigation Links */}
        <BlockDiv className="space-y-4">
          <RenderAtom
            type="text"
            value="Цэс"
            className="text-base font-semibold text-white"
          />
          <BlockDiv className="text-sm text-gray-300 space-y-2">
            {[
              { label: "Нүүр", href: "/" },
              { label: "Бидний тухай", href: "/about" },
              { label: "Холбоо барих", href: "/contact" },
              { label: "Portfolio", href: "/#portfolio" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="hover:text-brand transition block">
                <RenderAtom type="text" value={item.label} />
              </a>
            ))}
          </BlockDiv>
        </BlockDiv>

        {/* Contact Info */}
        <BlockDiv className="space-y-4">
          <RenderAtom
            type="text"
            value="Холбоо барих"
            className="text-base font-semibold text-white"
          />
          <BlockDiv className="text-sm text-gray-300 space-y-2">
            <RenderAtom type="text" value="📍 УБ хот, СБД, Innovation төв" />
            <RenderAtom type="text" value="📞 +976 99112233" />
            <RenderAtom type="text" value="📧 hello@kiosk.mn" />
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>

      {/* Bottom bar */}
      <BlockDiv className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        <TextBody
          value={`© ${new Date().getFullYear()} <span class="text-white font-semibold">Kiosk.mn</span>. Бүх эрх хуулиар хамгаалагдсан.`}
        />
      </BlockDiv>
    </BlockDiv>
  );
}
