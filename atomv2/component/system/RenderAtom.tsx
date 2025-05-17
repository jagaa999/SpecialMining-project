"use client";

import { Spin } from "antd";
import { RenderAtomProps } from "atomv2/types/atomTypes";
import { ComponentType, Suspense } from "react";
import renderAtomMap from "../../registry/renderAtomMap";
import AtomUrlV2 from "../Atoms/AtomUrlV2";
import AtomLoadingV2 from "../Atoms/AtomLoadingV2";
import AtomTooltipV2 from "../Atoms/AtomTooltipV2";
import AtomSpinningV2 from "../Atoms/AtomSpinningV2";

export default function RenderAtom({
  type,
  value,
  tooltip,
  url,
  spinning,
  loading = false,
  className,
  children,
  ...props
}: RenderAtomProps) {
  const DynamicComponent = renderAtomMap[type] as ComponentType<any>;

  const RenderComponent = (
    <Suspense fallback={<Spin spinning size="small" />}>
      <DynamicComponent className={className} value={value} {...props}>
        {children}
      </DynamicComponent>
    </Suspense>
  );

  console.log("RenderAtom", { url, spinning, loading });

  return (
    <AtomTooltipV2 tooltip={tooltip}>
      <AtomUrlV2 {...url}>
        <AtomSpinningV2 {...spinning}>
          {loading ? <AtomLoadingV2 {...props} /> : RenderComponent}
        </AtomSpinningV2>
      </AtomUrlV2>
    </AtomTooltipV2>
  );
}
