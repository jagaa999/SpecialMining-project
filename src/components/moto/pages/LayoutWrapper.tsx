"use client";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // const domain = useDomain();

  return (
    <>
      Энэ юу вэ?
      <main>{children}</main>
    </>
  );
}
