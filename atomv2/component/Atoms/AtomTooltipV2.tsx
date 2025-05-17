"use client";

import { Tooltip, TooltipProps } from "antd";
import _ from "lodash";

interface AtomTooltipV2Props {
  tooltip?: TooltipProps | string;
  children: React.ReactNode;
}

export default function AtomTooltipV2({
  tooltip,
  children,
}: AtomTooltipV2Props) {
  if (!tooltip) return children;

  const tooltipProps = _.isString(tooltip) ? { title: tooltip } : tooltip;

  return <Tooltip {...tooltipProps}>{children}</Tooltip>;
}
