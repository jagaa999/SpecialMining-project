export async function getLayoutWrapper(domain: string) {
  try {
    const MyComponent = await import(
      `@/components/domains/${domain}/pages/LayoutWrapper`
    );
    return MyComponent.default;
  } catch {
    const fallback = await import(
      "@/components/domains/default/pages/LayoutWrapper"
    );
    return fallback.default;
  }
}

// import MotoLayout from "@/components/domains/moto/pages/LayoutWrapper";
// import AikidoLayout from "@/components/domains/aikido/pages/LayoutWrapper";
// import DefaultLayout from "@/components/domains/default/pages/LayoutWrapper";
// import SpecialLayout from "@/components/domains/special/pages/LayoutWrapper";
// import ZenartLayout from "@/components/domains/zenart/pages/LayoutWrapper";

// const layoutMap: any = {
//   moto: MotoLayout,
//   aikido: AikidoLayout,
//   special: SpecialLayout,
//   zenart: ZenartLayout,
// };

// export async function getLayoutWrapper(domain: string) {
//   return layoutMap[domain] || DefaultLayout;
// }
