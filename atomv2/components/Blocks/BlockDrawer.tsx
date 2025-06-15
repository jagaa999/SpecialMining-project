import { Drawer } from "antd";
import useResponsiveBreakpoint from "atomv2/hooks/useResponsiveBreakpoint";
import { ObjectLight } from "atomv2/types/objectTypes";
import { ReactNode } from "react";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "./BlockDiv";
import BlockScroll from "./BlockScroll";
import { cn } from "atomv2/util/atomHelperV2";

interface BlockDrawerProps {
  isShowDrawer: boolean;
  setIsShowDrawer: (show: boolean) => void;
  width?: number | string;
  height?: number | string;
  destroyOnClose?: boolean;
  maskClosable?: boolean;
  placement?: "top" | "left" | "right" | "bottom";
  closeButtonIsInside?: boolean;
  CloseButtonObject?: ObjectLight;
  title?: string | ReactNode;
  drawerProps?: Record<string, any>;
  BlockDrawerOuter?: ObjectLight;
  isScroll?: boolean;
  children: ReactNode;
}

export default function BlockDrawer({
  isShowDrawer,
  setIsShowDrawer,
  width = "390px",
  height = "50%",
  destroyOnClose = false,
  maskClosable = true,
  placement = "right",
  closeButtonIsInside = false,
  CloseButtonObject,
  title,
  drawerProps = {},
  BlockDrawerOuter,
  isScroll = true,
  children,
}: BlockDrawerProps) {
  const { isMobile } = useResponsiveBreakpoint();

  return (
    <Drawer
      styles={{ body: { padding: 0 } }}
      width={isMobile ? "77%" : width}
      height={isMobile ? height : "100%"}
      open={isShowDrawer}
      closeIcon={false}
      onClose={() => setIsShowDrawer(false)}
      placement={placement}
      destroyOnClose={destroyOnClose}
      maskClosable={maskClosable}
      title={title}
      {...drawerProps}>
      <BlockScroll isActive={isScroll}>
        <BlockDiv
          className={cn(
            `w-full h-full p-4 ${BlockDrawerOuter?.className || ""}`
          )}
          data-block="BlockDrawerOuter">
          {children}
        </BlockDiv>
      </BlockScroll>
      <CloseButton
        setIsShowDrawer={setIsShowDrawer}
        placement={placement}
        closeButtonIsInside={closeButtonIsInside}
        CloseButtonObject={CloseButtonObject}
      />
    </Drawer>
  );
}

interface CloseButtonProps {
  setIsShowDrawer: (show: boolean) => void;
  placement?: "top" | "left" | "right" | "bottom";
  closeButtonIsInside?: boolean;
  CloseButtonObject?: ObjectLight;
}

const CloseButton = ({
  setIsShowDrawer,
  placement = "right",
  closeButtonIsInside = false,
  CloseButtonObject,
}: CloseButtonProps) => {
  const positionClass = {
    top: closeButtonIsInside ? "bottom-12 right-8" : "-bottom-12 right-8",
    left: closeButtonIsInside ? "right-12 bottom-8" : "-right-12 bottom-8",
    right: closeButtonIsInside ? "left-12 bottom-8" : "-left-12 bottom-8",
    bottom: closeButtonIsInside ? "top-12 left-8" : "-top-12 left-8",
  }[placement];

  return (
    <RenderAtom
      value={CloseButtonObject?.value || "material-symbols:close"}
      type="icon"
      className={`absolute ${positionClass} cursor-pointer text-white hover:brightness-90 z-20 transition-transform duration-300 ease-in-out
  hover:rotate-180 ${CloseButtonObject?.className || ""}`}
      onClick={() => setIsShowDrawer(false)}
    />
  );
};
