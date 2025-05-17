"use client";

import { Spin, SpinProps } from "antd";
import _ from "lodash";
import { ReactNode } from "react";

export interface AtomSpinningV2Props extends SpinProps {
  children?: ReactNode;
}

export default function AtomSpinningV2({
  spinning,
  children,
  ...props
}: AtomSpinningV2Props) {
  if (!spinning) return children;

  return (
    <Spin spinning={spinning} {...props} wrapperClassName="w-fit h-fit">
      {children}
    </Spin>
  );
}
