"use client";

// import Hero from "./HomeHero";
// import { generalTheme } from "../generalConfig";

export default function HomePage({ item = {} }: { item: any }) {
  console.log("sddfsdf item", item);
  return (
    <div className="w-full h-full">
      <section className="md:w-fit md:flex-none flex flex-col gap-5">
        <section
          className="w-full bg-red-400"
          data-widget="MotoNewsGeneralFilterSidebarV3">
          Энэ бол filter
        </section>
      </section>
      <section className="w-full md:grow flex flex-col gap-5 bg-blue-500">
        <section
          className="w-full"
          data-widget="MotoNewsListHeaderV3"></section>
        <section className="w-full" data-widget="MotoNewsListV3">
          Энд нөгөөх нь гарна. ха ха
        </section>
      </section>
    </div>
  );
}
