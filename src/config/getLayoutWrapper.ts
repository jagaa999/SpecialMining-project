export async function getLayoutWrapper(domain: string) {
  switch (domain) {
    case "special":
      return (await import("src/components/special/pages/LayoutWrapper"))
        .default;
    case "moto":
      return (await import("src/components/moto/pages/LayoutWrapper")).default;
    default:
      return (await import("src/components/default/pages/LayoutWrapper"))
        .default;
  }
}
