"use client";

import { Spin } from "antd";
import { RenderAtomProps } from "atomv2/types/atomTypes";
import { isEmpty } from "lodash";
import { Suspense } from "react";
import atomRegistry from "../../registry/atom.registry";
import AtomAnimationV2 from "./AtomAnimationV2";
import AtomLoadingV2 from "./AtomLoadingV2";
import AtomSpinningV2 from "./AtomSpinningV2";
import AtomTooltipV2 from "./AtomTooltipV2";
import AtomUrlV2 from "./AtomUrlV2";
import { cn } from "atomv2/util/atomHelperV2";

export default function RenderAtom({
  item,
  type = "text",
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
  if (isEmpty(item) && isEmpty(value) && isEmpty(children)) return null;

  const DynamicComponent = atomRegistry[type]?.component;

  const RenderComponent = (
    <Suspense fallback={<Spin spinning size="small" />}>
      <DynamicComponent
        value={value || item?.value || item}
        className={cn(item?.className, className)}
        style={{ ...item?.style, ...props?.style }}
        {...props}>
        {children}
      </DynamicComponent>
    </Suspense>
  );

  return (
    <>
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
    </>
  );
}
