// LayoutWrapper.tsx
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return <main className="min-h-screen bg-[#f5f1ee]">{children}</main>;
}
