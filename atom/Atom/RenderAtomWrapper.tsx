import AtomClipboardV2 from "./V2/AtomClipboardV2";
// import AtomFormV2 from "atom/Atom/V2/AtomFormV2";
import AtomLabelV2 from "./V2/AtomLabelV2";
// import AtomLinkV2 from "atom/Atom/V2/AtomLinkV2";
import AtomLoadingV2 from "./V2/AtomLoadingV2";
// import AtomSpinV2 from "atom/Atom/V2/AtomSpinV2";
// import AtomTooltipV2 from "atom/Atom/V2/AtomTooltipV2";

export default function RenderAtomWrapper({
  positionnemgoo,
  label,
  isAtomWorking = false,
  pageLoading = false,
  url = {},
  atomProps = {},
  isShowPageLoading = 0,
  form,
  tooltip,
  clipboard,
  value,
  children,
}: {
  positionnemgoo: any;
  label?: {
    title?: string;
    outerClassName?: string;
    outerStyle?: Object;
    className?: string;
    style?: Object;
  };
  isAtomWorking?: boolean;
  pageLoading?: boolean;
  url?: any;
  atomProps: any;
  isShowPageLoading?: number | string;
  form?: any;
  tooltip?: any;
  clipboard?: { value?: string };
  value?: any;
  children?: any;
}) {
  //! const { isLoadingV3 } = useContext(WidgetWrapperContext);
  const isLoadingV3 = false;

  return (
    <>
      <AtomLabelV2 label={positionnemgoo?.label || label}>
        {/* <AtomSpinV2
        spinning={isAtomWorking || pageLoading}
        delay={0}
        tip=""
        indicator="default"> */}
        {/* <AtomLinkV2
        url={positionnemgoo?.url || url}
        color={atomProps.color}
        isShowPageLoading={isShowPageLoading}
        onClick={url?.onClick}> */}
        {/* <AtomTooltipV2 item={positionnemgoo?.tooltip || tooltip}> */}
        {/* <AtomFormV2 form={form}> */}
        {isLoadingV3 ? <AtomLoadingV2 {...atomProps} /> : children}
        {/* </AtomFormV2> */}
        {/* </AtomTooltipV2> */}
        {/* </AtomLinkV2> */}
        <AtomClipboardV2 clipboard={clipboard} value={value} />
        {/* </AtomSpinV2> */}
      </AtomLabelV2>
    </>
  );
}
