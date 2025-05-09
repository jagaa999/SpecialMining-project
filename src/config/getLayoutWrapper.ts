export async function getLayoutWrapper(domain: string) {
  try {
    const loadedModule = await import(
      `src/components/${domain}/pages/LayoutWrapper`
    );
    return loadedModule.default;
  } catch (error) {
    console.warn(
      `LayoutWrapper not found for domain "${domain}", falling back to default.`
    );
    const fallback = await import("src/components/default/pages/LayoutWrapper");
    return fallback.default;
  }
}
