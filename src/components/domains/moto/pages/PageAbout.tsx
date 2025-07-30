export const revalidate = 60; // 60 сек тутамд regenerate хийнэ

export default function HomePage({ domain }: { domain: string }) {
  console.log("sddfsdf item", { domain });

  return <>Энэ бол About Юм шүү</>;
}
