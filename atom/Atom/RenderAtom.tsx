import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useToggle } from "react-use";

import useResponsiveBreakpoint from "atom/middleware/hooks/custom/useResponsiveBreakpoint";
import AtomClipboardV2 from "atom/Atom/V2/AtomClipboardV2";
import AtomFormV2 from "atom/Atom/V2/AtomFormV2";
import AtomLabelV2 from "atom/Atom/V2/AtomLabelV2";
import AtomLinkV2 from "atom/Atom/V2/AtomLinkV2";
import AtomLoadingV2 from "atom/Atom/V2/AtomLoadingV2";
import AtomSpinV2 from "atom/Atom/V2/AtomSpinV2";
import AtomTooltipV2 from "atom/Atom/V2/AtomTooltipV2";
import _ from "lodash";

export default function RenderAtom({
  // divNumber,
  item,
  defaultAtom,
  renderType = "text",
  className = "",
  style = {},
  outsideClassName = "",
  customProps,
  columnConfig,
  isAtomWorking = false,
  isShowPageLoading = 0,
  onClick,
  onMouseEnter,
  customDivNumber,
  extraNemgoo,
  divNamePrefix = "",
  url = {},
  label = {},
  tooltip = {},
  form = {},
  hideInMobile = false,
  hideInDesktop = false,
  clipboard,
  debug = false,
  children,
}: {
  item?: string | object;
  defaultAtom?: string;
  renderType?:
    | "title"
    | "text"
    | "image"
    | "img"
    | "button"
    | "currency"
    | "tag"
    | "icon"
    | "number"
    | "input"
    | "inputnumber"
    | "inputimage"
    | "inputimagelist"
    | "inputButtonent"
    | "inputmask"
    | "inputsegment"
    | "inputbutton"
    | "inputswitch"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio"
    | "dropdown"
    | "editor"
    | "editor2"
    | "multicombo"
    | "imagemagnify"
    | "jsoneditor"
    | "avatar"
    | "line"
    | "forminput"
    | "forminputerror"
    | "search"
    | "htmltext"
    | "date"
    | "clob"
    | "video";
  className?: any;
  style?: React.CSSProperties;
  outsideClassName?: string;
  customProps?: any;
  columnConfig?: any;
  isAtomWorking?: boolean;
  isShowPageLoading?: number | string;
  onClick?: any;
  onMouseEnter?: any;
  customDivNumber?: string;
  extraNemgoo?: any;
  divNamePrefix?: string;
  url?: any;
  label?: {
    title?: string;
    outerClassName?: string;
    outerStyle?: Object;
    className?: string;
    style?: Object;
  };
  tooltip?: any;
  form?: any;
  hideInMobile?: boolean;
  hideInDesktop?: boolean;
  clipboard?: { value?: string };
  debug?: boolean;
  loading?: boolean;
  children?: any;
}) {
  const [pageLoading] = useToggle(false);
  const { isMobile, isDesktop } = useResponsiveBreakpoint();

  const atomList: any = {
    title: "V2/AtomTitleV2",
    text: "V2/AtomTextV2",
    image: "V2/AtomImageV2",
    img: "V2/AtomImageV3",
    button: "V2/AtomButtonV2",
    currency: "V2/AtomCurrencyV2",
    tag: "V2/AtomTagV2",
    icon: "V2/AtomIconV2",
    number: "V2/AtomNumberV2",
    date: "V2/AtomDateV2",
    input: "V2/AtomInputV2",
    inputnumber: "V2/AtomInputNumberV2",
    inputimage: "V2/AtomInputImageV2",
    inputimagelist: "V2/AtomInputImageListV2",
    inputmask: "V2/AtomInputMaskV2",
    inputsegment: "V2/AtomInputSegmentV2",
    inputbutton: "V2/AtomInputButtonV2",
    inputswitch: "V2/AtomInputSwitchV2",
    inputcascader: "V2/AtomInputCascaderV2",
    textarea: "V2/AtomTextareaV2",
    select: "V2/AtomSelectV2",
    checkbox: "V2/AtomCheckboxV2",
    radio: "V2/AtomRadioV2",
    dropdown: "V2/AtomDropdownV2",
    editor: "V2/AtomEditorV2",
    // editor: "V2/AtomEditorV3",
    editor2: "V2/AtomEditorV3",
    multicombo: "V2/AtomSelectV2",
    imagemagnify: "V2/AtomImageMagnifyV2",
    jsonview: "V2/AtomJsonViewV2",
    jsoneditor: "V2/AtomJsonEditorV2",
    avatar: "V2/AtomAvatarV2",
    line: "V2/AtomLineV2",
    forminput: "HookForm/AtomFormInputV2",
    forminputerror: "HookForm/AtomInputErrorTextV2",
    search: "/AtomSearch",
    htmltext: "V2/AtomHtmlText",
    clob: "V2/AtomClobV2",
    video: "V2/AtomVideoV2",
  };

  //main хэсэг эхэлж байна.
  const positionnemgoo: any = _.get(item, "positionnemgoo", {});

  const atom = positionnemgoo?.atom || {
    type: renderType || defaultAtom || "text",
  };

  const divNumberV2 = `${divNamePrefix}${_.last(
    _.split(atomList?.[atom?.type || "text"], "/")
  )}`;

  // const theme = cloudContext?.masterPageNemgooConfig?.theme;
  const extraDesignNemgoo = extraNemgoo?.design?.[divNumberV2];
  //showposition=1 гэсэн механизмыг хэрэгжүүлэхийн тулд эхлүүлэв.
  // const showPosition = toBoolean(
  //   widgetnemgooReady?.debug?.show?.showPosition ||
  //     router?.query?.showposition ||
  //     false
  // );
  //showsample=1 гэсэн механизмыг хэрэгжүүлэхийн тулд эхлүүлэв.
  // const showSample = toBoolean(
  //   widgetnemgooReady?.debug?.show?.showSample ||
  //     router?.query?.showsample ||
  //     false
  // );

  //value-аа бэлдэнэ.
  let value =
    atom?.value ||
    _.get(item, "value", !_.isObject(item) && _.isString(item) ? item : "");
  //хэрвээ columnConfig-аас show_type дотор decimal ирвэл 2 оронгоор тасалъя.
  if (
    columnConfig?.show_type === "decimal" &&
    !isNaN(value) &&
    value !== "-" &&
    !_.isEmpty(String(value)) &&
    _.isNumber(_.toNumber(value))
  ) {
    value = String(_.round(value, 2));
  }

  if (debug) {
    console.log("RenderAtom value", value);
  }

  const classNameReady = atom?.classname || _.get(item, "classname", "");
  const styleReady = atom?.style ? atom?.style : _.get(item, "style");
  const atomClassName = `${className || ""} ${atom?.className || ""} ${
    extraDesignNemgoo?.className || ""
  }`;
  const atomStyle = {
    ...styleReady,
    ...atom?.style,
    ...extraDesignNemgoo?.style,
  };

  // const atomCustomProps = {
  //   color: getColorTailwind(theme?.color),
  //   colorSecond: getColorTailwind(theme?.colorSecond),
  //   theme: theme,
  //   ...customProps,
  // };

  const atomProps = {
    // ...atomCustomProps,
    item: {
      ...(item as any),
      value: value,
      className: classNameReady,
      style: styleReady,
    },

    customClassName: atomClassName,
    customStyle: atomStyle,
    isWorking: isAtomWorking,
    onClick: onClick,
    // showSample: showSample,
    customDivNumber,
    divNamePrefix,
    divNumberV2,
    mode: atom?.type === "multicombo" ? "multiple" : undefined,
    ...(atom?.props || {}),
  };

  const RenderComponent = useMemo(
    () =>
      dynamic(
        () =>
          import(`./${atomList?.[atom?.type || "text"]}`).catch((err: any) => {
            return () => {
              console.error("Error loading component:", err);
              return <>{children}</>;
            };
          }),
        {
          ssr: false,
          // suspense: true,
        }
      ),
    []
  );

  //showposition=1 байвал position байрлал харуулаад дуусгана.
  // if (showPosition)
  //   return (
  //     <RenderAtomPosition
  //       item={{ value: _.get(item, "rawConfig?.positionname") }}
  //       customClassName={atomClassName}
  //     />
  //   );

  if (hideInMobile && isMobile) return null;
  if (hideInDesktop && isDesktop) return null;

  const RenderComponentWithFallback = (
    atomProps: any,
    children: React.ReactNode
  ) => {
    try {
      return <RenderComponent {...atomProps}>{children}</RenderComponent>;
    } catch (error) {
      console.error("Error rendering component:", error);
      return null; // Render nothing or some fallback UI
    }
  };

  return (
    <AtomLabelV2
      label={positionnemgoo?.label || label}
      positionnemgoo={positionnemgoo}>
      <AtomSpinV2
        spinning={isAtomWorking || pageLoading}
        delay={0}
        tip=""
        indicator="default">
        <AtomLinkV2
          url={positionnemgoo?.url || url}
          color={atomProps.color}
          isShowPageLoading={isShowPageLoading}
          onClick={url?.onClick}>
          <AtomTooltipV2 item={positionnemgoo?.tooltip || tooltip}>
            <AtomFormV2 form={form}>
              {/* {isLoadingV3 ? (
                <AtomLoadingV2 {...atomProps} />
              ) : (
                RenderComponentWithFallback(atomProps, children)
              )} */}
              {RenderComponentWithFallback(atomProps, children)}
            </AtomFormV2>
          </AtomTooltipV2>
        </AtomLinkV2>
        <AtomClipboardV2 clipboard={clipboard} value={value} />
      </AtomSpinV2>
    </AtomLabelV2>
  );
}
