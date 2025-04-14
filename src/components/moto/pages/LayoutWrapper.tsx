"use client";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // const domain = useDomain();

  return (
    <>
      <main>{children}</main>
    </>
  );
}
