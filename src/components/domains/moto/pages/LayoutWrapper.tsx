"use client";

import PanelContainer from "atomv2/components/Panel/PanelContainer";
import MotoBanner from "../Widget/MotoLayout/MotoBanner";
import MotoFooter from "../Widget/MotoLayout/MotoFooter";
import MotoHeader from "../Widget/MotoLayout/MotoHeader";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className=" bg-amber-300">
        <MotoHeader />
      </header>

      <section className="w-full h-full relative" data-widget="MotoBanner">
        <MotoBanner />
      </section>

      <main className="flex-grow">
        <PanelContainer>
          <div className="bg-blue-300 h-full">{children}</div>
        </PanelContainer>
      </main>

      <footer className="bg-gray-800">
        <PanelContainer>
          <MotoFooter />
        </PanelContainer>
      </footer>
    </div>
  );
}
