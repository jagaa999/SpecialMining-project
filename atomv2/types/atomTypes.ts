import { TooltipProps } from "antd";
import { CSSProperties, ReactNode } from "react";
import { AtomSpinningV2Props } from "../components/Atoms/AtomSpinningV2";
import { AtomUrlV2Props } from "../components/Atoms/AtomUrlV2";
import { AtomAnimationV2Props } from "../components/Atoms/AtomAnimationV2";
import { AtomType } from "../registry/atom.registry";

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
  type?: AtomType;
  value?: any;
  tooltip?: TooltipProps | string;
  url?: AtomUrlV2Props;
  loading?: boolean;
  spinning?: AtomSpinningV2Props;
  animation?: AtomAnimationV2Props;
  className?: string;
  [key: string]: any;
  children?: ReactNode;
}
