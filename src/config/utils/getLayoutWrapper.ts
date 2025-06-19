export async function getLayoutWrapper(domain: string) {
  try {
    const loadedModule = await import(
      `src/components/domains/${domain}/pages/LayoutWrapper`
    );
    return loadedModule.default;
  } catch (error: any) {
    console.warn(
      `LayoutWrapper not found for domain "${domain}", falling back to default.`,
      `error: ${error instanceof Error ? error.message : String(error)}`
    );
    const fallback = await import(
      "src/components/domains/default/pages/LayoutWrapper"
    );
    return fallback.default;
  }
}
