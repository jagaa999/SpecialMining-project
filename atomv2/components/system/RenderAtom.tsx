"use client";

import { Spin } from "antd";
import { RenderAtomProps } from "atomv2/types/atomTypes";
import { Suspense } from "react";
import atomRegistry from "../../registry/atom.registry";
import AtomAnimationV2 from "../Atoms/AtomAnimationV2";
import AtomLoadingV2 from "../Atoms/AtomLoadingV2";
import AtomSpinningV2 from "../Atoms/AtomSpinningV2";
import AtomTooltipV2 from "../Atoms/AtomTooltipV2";
import AtomUrlV2 from "../Atoms/AtomUrlV2";

export default function RenderAtom({
  type,
  value,
  tooltip,
  url,
  spinning,
  loading = false,
  animation,
  className,
  children,
  ...props
}: RenderAtomProps) {
  const DynamicComponent = atomRegistry[type]?.component;

  const RenderComponent = (
    <Suspense fallback={<Spin spinning size="small" />}>
      <DynamicComponent className={className} value={value} {...props}>
        {children}
      </DynamicComponent>
    </Suspense>
  );

  return (
    <AtomTooltipV2 tooltip={tooltip}>
      <AtomUrlV2 {...url}>
        <AtomSpinningV2 {...spinning}>
          <AtomAnimationV2 {...animation}>
            {loading ? (
              <AtomLoadingV2 className={className} {...props} />
            ) : (
              RenderComponent
            )}
          </AtomAnimationV2>
        </AtomSpinningV2>
      </AtomUrlV2>
    </AtomTooltipV2>
  );
}
