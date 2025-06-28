"use client";

import { Tooltip, TooltipProps } from "antd";
import { isString } from "lodash";

interface AtomTooltipV2Props {
  tooltip?: TooltipProps | string;
  spanClassName?: string;
  children: React.ReactNode;
}

export default function AtomTooltipV2({
  tooltip,
  spanClassName,
  children,
}: AtomTooltipV2Props) {
  if (!tooltip) return children;

  const tooltipProps = isString(tooltip) ? { title: tooltip } : tooltip;
  // console.log("dfddsdsf dsfsdf", { tooltip, tooltipProps });

  return (
    <Tooltip {...tooltipProps}>
      <span className={spanClassName}>{children}</span>
    </Tooltip>
  );
}
