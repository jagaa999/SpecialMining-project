import RenderAtomPalette from "atomv2/components/devtools/RenderAtomPalette";

export default function AtomPreviewPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Atom Preview Palette</h1>
      <RenderAtomPalette />
    </div>
  );
}
