// src/config/data/getStaticItem.ts

type StaticItem = {
  json: any; // эсвэл тодорхой JSON schema бол өгч болно
};

export async function getStaticItem({
  pageslug,
}: {
  pageslug: string;
}): Promise<{ staticItem: any | null; error: string | null }> {
  try {
    const res = await fetch(`/api/moto-page?pageslug=${pageslug}`, {
      method: "GET",
      next: { revalidate: 60 }, // ISR: 60 сек тутам шинэчлэх
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch page: ${res.status}`);
    }

    const data: StaticItem[] = await res.json();
    return { staticItem: data?.[0]?.json ?? null, error: null };
  } catch (err: any) {
    return { staticItem: null, error: err.message ?? "Unknown error" };
  }
}
