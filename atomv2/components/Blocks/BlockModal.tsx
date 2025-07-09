import { Modal } from "antd";
import useResponsiveBreakpoint from "atomv2/hooks/useResponsiveBreakpoint";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "./BlockDiv";
import { ObjectLight } from "atomv2/types/objectTypes";

export default function BlockModal({
  isShowModal = false,
  setIsShowModal = null,
  defultClassName = "BlockModal2",
  width = "650",
  // height = "70%",
  destroyOnHidden = false,
  CloseButtonObject,
  props,
  children = <></>,
}: {
  isShowModal: boolean | undefined;
  setIsShowModal: any;
  defultClassName?: string;
  width?: number | string;
  height?: number | string;
  destroyOnHidden?: boolean;
  props?: any;
  CloseButtonObject?: ObjectLight;
  children?: any;
}) {
  const { isMobile } = useResponsiveBreakpoint();
  const widthReady = isMobile ? "100%" : width; //утсанд байвал дүүргэе.

  // console.log("BlockModal2", height, width, isMobile);

  return (
    <Modal
      open={isShowModal}
      onOk={() => setIsShowModal(false)}
      onCancel={() => setIsShowModal(false)}
      footer={null}
      className={defultClassName}
      width={widthReady}
      closable={false}
      destroyOnHidden={destroyOnHidden}
      {...props}>
      <BlockDiv className="relative min-h-[64px]" data-block="BlockModal2Outer">
        {children}

        <CloseButton
          setIsShowModal={setIsShowModal}
          CloseButtonObject={CloseButtonObject}
        />
      </BlockDiv>

      <style>
        {`
        .${defultClassName} .ant-modal-content {
          padding: 0 !important;
          border-radius: 10px !important;
        }

        .${defultClassName} .ant-modal-content .ant-modal-body {
          padding: 0 !important;
        }

        .${defultClassName} .ant-modal-footer {
          display: hidden;
        }
      `}
      </style>
    </Modal>
  );
}

// interface CloseButtonProps {
//   setIsShowDrawer: (show: boolean) => void;
//   placement?: "top" | "left" | "right" | "bottom";
//   closeButtonIsInside?: boolean;
//   CloseButtonObject?: ObjectLight;
// }

// const CloseButton = ({
//   setIsShowDrawer,
//   placement = "right",
//   closeButtonIsInside = false,
//   CloseButtonObject,
// }: CloseButtonProps) => {
//   const positionClass = {
//     top: closeButtonIsInside ? "bottom-12 right-8" : "-bottom-12 right-8",
//     left: closeButtonIsInside ? "right-12 bottom-8" : "-right-12 bottom-8",
//     right: closeButtonIsInside ? "left-12 bottom-8" : "-left-12 bottom-8",
//     bottom: closeButtonIsInside ? "top-12 left-8" : "-top-12 left-8",
//   }[placement];

//   return (
//     <RenderAtom
//       value={CloseButtonObject?.value || "material-symbols:close"}
//       type="icon"
//       className={`absolute ${positionClass} cursor-pointer text-white hover:brightness-90 z-20 transition-transform duration-300 ease-in-out
//   hover:rotate-180 ${CloseButtonObject?.className || ""}`}
//       onClick={() => setIsShowDrawer(false)}
//     />
//   );
// };

const CloseButton = ({
  setIsShowModal,
  CloseButtonObject,
}: {
  setIsShowModal?: any;
  CloseButtonObject?: ObjectLight;
}) => {
  const { isMobile } = useResponsiveBreakpoint();

  return (
    <RenderAtom
      value={CloseButtonObject?.value || "material-symbols:close"}
      type="icon"
      className={`absolute ${
        isMobile ? "-top-11 right-8" : "-top-10 right-0"
      } cursor-pointer text-white hover:brightness-90 z-20 transition-transform duration-300 ease-in-out hover:rotate-180 text-4xl ${
        CloseButtonObject?.className || ""
      }`}
      onClick={() => setIsShowModal(false)}
    />
  );
};
