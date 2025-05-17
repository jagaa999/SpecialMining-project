import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useToggle } from "react-use";

import {
  getColorTailwind,
  renderAtomAtomList,
  renderAtomGetValue,
  toBoolean,
} from "atom/engineBox/util/atomHelper";

import useResponsiveBreakpoint from "atom/middleware/hooks/custom/useResponsiveBreakpoint";
import _ from "lodash";
import RenderAtomPosition from "./RenderAtomPosition";
import RenderAtomWrapper from "./RenderAtomWrapper";

export default function RenderAtom({
  // divNumber,
  item,
  defaultAtom,
  renderType = "text",
  customClassName = "",
  className: className2 = "",
  customStyle = {},
  style: style2 = {},
  // outsideClassName = "",
  customProps,
  columnConfig,
  isAtomWorking = false,
  isShowPageLoading = 0,
  onClick,
  // onMouseEnter,
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
}: // ...props
{
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
    | "htmltext"
    | "date"
    | "clob"
    | "video";
  // divNumber?: string;
  customClassName?: any;
  className?: any;
  style?: React.CSSProperties;
  customStyle?: Object;
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
  props?: any;
  children?: any;
}) {
  //! const { widgetnemgooReady } = useContext(WidgetWrapperContext);
  const widgetnemgooReady: any = {};
  //! const cloudContext = useCloud();
  const cloudContext: any = {};

  const router = useRouter();
  const [pageLoading] = useToggle(false);
  const { isMobile, isDesktop } = useResponsiveBreakpoint();

  //main хэсэг эхэлж байна.
  const positionnemgoo: any = _.get(item, "positionnemgoo", {});

  const atom = positionnemgoo?.atom || {
    type: renderType || defaultAtom || "text",
  };

  const divNumberV2 = `${divNamePrefix}${_.last(
    _.split(renderAtomAtomList?.[atom?.type || "text"], "/")
  )}`;

  const theme = cloudContext?.masterPageNemgooConfig?.theme;
  const extraDesignNemgoo = extraNemgoo?.design?.[divNumberV2];

  //showposition=1 гэсэн механизмыг хэрэгжүүлэхийн тулд эхлүүлэв.
  const showPosition = toBoolean(
    widgetnemgooReady?.debug?.show?.showPosition ||
      router?.query?.showposition ||
      false
  );

  //showsample=1 гэсэн механизмыг хэрэгжүүлэхийн тулд эхлүүлэв.
  const showSample = toBoolean(
    widgetnemgooReady?.debug?.show?.showSample ||
      router?.query?.showsample ||
      false
  );

  //value-аа бэлдэнэ.
  const value = renderAtomGetValue(item, atom, columnConfig);

  if (debug) {
    console.log("RenderAtom value", value);
  }

  const className = atom?.classname || _.get(item, "classname", "");
  const style = atom?.style ? atom?.style : _.get(item, "style");

  const atomClassName = `${customClassName || className2 || ""} ${
    atom?.className || ""
  } ${extraDesignNemgoo?.className || ""}`;

  const atomStyle = {
    ...customStyle,
    ...style2,
    ...style,
    ...atom?.style,
    ...extraDesignNemgoo?.style,
  };

  const atomProps = {
    color: getColorTailwind(theme?.color),
    colorSecond: getColorTailwind(theme?.colorSecond),
    theme: theme,
    ...customProps,
    item: {
      ...(item as any),
      value: value,
      className: className,
      style: style,
    },

    customClassName: atomClassName,
    customStyle: atomStyle,
    isWorking: isAtomWorking,
    onClick: onClick,
    showSample: showSample,
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
          import(
            `atom/Atom/${renderAtomAtomList?.[atom?.type || "text"]}`
          ).catch((err) => {
            console.error("Error loading atom:", err);
            return () => <>{children}</>;
          }),
        {
          ssr: false,
          // suspense: true,
        }
      ),
    []
  );

  //showposition=1 байвал position байрлал харуулаад дуусгана.
  if (showPosition)
    return (
      <RenderAtomPosition
        item={{ value: _.get(item, "rawConfig?.positionname") }}
        customClassName={atomClassName}
      />
    );

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
    <RenderAtomWrapper
      positionnemgoo={positionnemgoo}
      label={label}
      isAtomWorking={isAtomWorking}
      pageLoading={pageLoading}
      url={url}
      atomProps={atomProps}
      isShowPageLoading={isShowPageLoading}
      form={form}
      tooltip={tooltip}
      clipboard={clipboard}
      value={value}>
      {RenderComponentWithFallback(atomProps, children)}
    </RenderAtomWrapper>
  );
}
