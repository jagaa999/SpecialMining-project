export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Fetcher error: ${res.statusText}`);
  }

  return res.json();
};
