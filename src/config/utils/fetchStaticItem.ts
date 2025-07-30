export async function fetchStaticItem(domain: string, pageslug: string) {
  console.log(
    "Fetching static item for domain:",
    domain,
    "and pageslug:",
    pageslug
  );

  try {
    const res = await fetch(
      `https://www.moto.mn/api/moto-page-v2?apicommand=list&domain=special&pageslug=${pageslug}`
    );

    if (!res.ok) {
      throw new Error(`Fetch error: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("fetchStaticItem error:", err);
    return null;
  }
}
