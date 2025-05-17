import { TooltipProps } from "antd";
import { CSSProperties, ReactNode } from "react";
import { AtomSpinningV2Props } from "../component/Atoms/AtomSpinningV2";
import { AtomUrlV2Props } from "../component/Atoms/AtomUrlV2";
import renderAtomMap from "../registry/renderAtomMap";

export interface AtomBaseProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
  name?: string;
  onClick?: () => void;
  [key: string]: any;
  value?: ReactNode;
  children?: ReactNode;
}

export interface RenderAtomProps {
  type: keyof typeof renderAtomMap;
  value?: any;
  tooltip?: TooltipProps | string;
  url?: AtomUrlV2Props;
  loading?: boolean;
  spinning?: AtomSpinningV2Props;
  className?: string;
  [key: string]: any;
  children?: ReactNode;
}
