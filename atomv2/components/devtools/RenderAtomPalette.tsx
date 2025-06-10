"use client";

import _ from "lodash";
import { Switch } from "antd";
import { useToggle } from "react-use";
import atomRegistry from "../../registry/atom.registry";
import RenderAtom from "../Atoms/RenderAtom";

export default function RenderAtomPalette() {
  const voidElements = ["image", "input", "hr", "br"];

  const [showTooltip, toggleTooltip] = useToggle(true);
  const [showSpinning, toggleSpinning] = useToggle(false);
  const [showLoading, toggleLoading] = useToggle(false);

  return (
    <div className="p-4">
      {/* ✅ Toggle header */}
      <div className="mb-6 flex flex-wrap gap-6 items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm">Tooltip</span>
          <Switch checked={showTooltip} onChange={toggleTooltip} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Spinning</span>
          <Switch checked={showSpinning} onChange={toggleSpinning} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Loading</span>
          <Switch checked={showLoading} onChange={toggleLoading} />
        </div>
      </div>

      {/* ✅ Atom preview section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {_.map(Object.values(atomRegistry), (atom) => {
          const isVoidType = _.includes(voidElements, atom.type);

          return (
            <div
              key={atom.type}
              className="border rounded-lg p-4 shadow hover:shadow-md transition">
              <div className="mb-2 text-sm font-semibold text-gray-700">
                {atom.displayName}{" "}
                <span className="text-xs text-gray-400">({atom.type})</span>
              </div>
              <div className="mb-2 text-xs text-gray-500">
                {atom.description}
              </div>
              <div className="bg-gray-50 rounded p-2 border">
                <RenderAtom
                  type={atom.type}
                  className="w-full h-12 bg-blue-100 flex items-center justify-center text-sm"
                  tooltip={
                    showTooltip
                      ? { title: `Энэ бол ${atom.displayName}` }
                      : undefined
                  }
                  url={{
                    href: "/preview/" + atom.type,
                    title: "Atom preview",
                  }}
                  spinning={
                    showSpinning ? { spinning: true, size: "small" } : undefined
                  }
                  loading={showLoading}
                  value={!isVoidType ? atom.displayName : undefined}
                  src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2025/civic-type-r/Hero/hero-mobile-2x-A.jpg%202x"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
