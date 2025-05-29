export async function getLayoutWrapper(domain: string) {
  try {
    const loadedModule = await import(
      `src/components/domains/${domain}/pages/LayoutWrapper`
    );
    return loadedModule.default;
  } catch (error) {
    console.warn(
      `LayoutWrapper not found for domain "${domain}", falling back to default.`
    );
    const fallback = await import(
      "src/components/domains/default/pages/LayoutWrapper"
    );
    return fallback.default;
  }
}
