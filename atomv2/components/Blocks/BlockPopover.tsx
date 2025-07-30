"use client";

import { ReactNode } from "react";
import { Popover } from "antd";
import BlockDiv from "./BlockDiv";
// import BlockDrawer from "./BlockDrawer";
// import BlockMobileDesktop from "./BlockMobileDesktop";
import { ObjectLight } from "atomv2/types/objectTypes";
import RenderAtom from "../Atoms/RenderAtom";

interface BlockPopoverProps {
  isShowPopover?: boolean;
  setIsShowPopover?: (val: boolean) => void;
  content: ReactNode;
  title?: ObjectLight;
  props?: {
    title?: string | ReactNode;
    trigger?: "hover" | "focus" | "click" | "contextMenu";
    placement?:
      | "top"
      | "left"
      | "right"
      | "bottom"
      | "topLeft"
      | "topRight"
      | "bottomLeft"
      | "bottomRight"
      | "leftTop"
      | "leftBottom"
      | "rightTop"
      | "rightBottom";
  };
  children: ReactNode;
}

export default function BlockPopover({
  isShowPopover = false,
  setIsShowPopover = () => {},
  content,
  title,
  props,
  children,
}: BlockPopoverProps) {
  if (!content) return <>{children}</>;

  return (
    // <BlockMobileDesktop>
    //   <MobilePanel
    //     isShowPopover={isShowPopover}
    //     setIsShowPopover={setIsShowPopover}
    //     content={content}
    //     children={children}
    //   />
    <DesktopPanel
      isShowPopover={isShowPopover}
      setIsShowPopover={setIsShowPopover}
      content={content}
      title={title}
      props={props}
      children={children}
    />
    // </BlockMobileDesktop>
  );
}

// const MobilePanel = ({
//   isShowPopover,
//   setIsShowPopover,
//   content,
//   children,
// }: BlockPopoverProps) => {
//   return (
//     <>
//       <BlockDiv
//         className="w-full h-full"
//         data-block="BlockPopoverOuter"
//         onClick={() => setIsShowPopover(true)}>
//         {children}
//       </BlockDiv>
//       <BlockDrawer
//         isShowDrawer={isShowPopover}
//         setIsShowDrawer={setIsShowPopover}
//         placement="bottom">
//         <BlockDiv className="w-full flex flex-col gap-3">{content}</BlockDiv>
//       </BlockDrawer>
//     </>
//   );
// };

const DesktopPanel = ({
  isShowPopover,
  setIsShowPopover = () => {},
  content,
  title,
  props,
  children,
}: BlockPopoverProps) => {
  return (
    <Popover
      //   overlayStyle={{ width: "fit-content" }}
      styles={{ root: { width: "fit-content" } }}
      open={isShowPopover}
      onOpenChange={(newOpen: boolean) => setIsShowPopover(newOpen)}
      content={content}
      title={
        <RenderAtom
          value={title?.value}
          type="text"
          className={`{blockTitle} ${title?.className}`}
          style={title?.style}
        />
      }
      trigger={props?.trigger || "hover"}
      placement={props?.placement || "bottom"}
      arrow={false}
      {...props}>
      <BlockDiv className="w-full h-full" data-block="BlockPopoverOuter">
        {children}
      </BlockDiv>
    </Popover>
  );
};
