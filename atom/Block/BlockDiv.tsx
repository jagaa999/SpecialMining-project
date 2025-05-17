import { ObjectLight } from "../engineBox/types/widgetType";
import { toBoolean, twMergeUtil } from "../engineBox/util/atomHelper";
import useResponsiveBreakpoint from "../middleware/hooks/custom/useResponsiveBreakpoint";

export default function BlockDiv({
  divNumber = "BlockDiv",
  divNumberV2 = "BlockDivV2",
  className,
  style,
  customClassName,
  customStyle,
  type = "div",
  onClick,
  onMouseEnter,
  onMouseLeave,
  divNamePrefix = "",
  ObjectLight,
  extraNemgoo,
  children,
  id,
  ref,
  hideInMobile = false,
  hideInDesktop = false,
  customProps = {},
}: {
  type?:
    | "div"
    | "span"
    | "i"
    | "p"
    | "label"
    | "code"
    | "nav"
    | "ul"
    | "main"
    | "section";
  divNumber?: string;
  divNumberV2?: string;
  className?: string;
  style?: any;
  customClassName?: string;
  customStyle?: any;
  onClick?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  divNamePrefix?: string;
  ObjectLight?: ObjectLight;
  extraNemgoo?: any;
  children?: any;
  id?: string;
  ref?: any;
  hideInMobile?: boolean;
  hideInDesktop?: boolean;
  customProps?: any;
}) {
  // const { widgetnemgooReady } = useContext(WidgetWrapperContext);
  const widgetnemgooReady: any = {};

  // const cloudContext = useCloud();
  const { isMobile, isDesktop } = useResponsiveBreakpoint();

  const myDivNumber: string = `${divNamePrefix}${divNumber}`;

  //global
  const isDefaultTheme: boolean =
    toBoolean(widgetnemgooReady?.isDefaultTheme) || false;

  //! const globalThemeNemgoo = cloudContext?.masterPageNemgooConfig?.theme;
  const globalThemeNemgoo: any = {};

  //! const globalDesignNemgoo = cloudContext?.masterPageNemgooConfig?.design?.[myDivNumber];
  const globalDesignNemgoo: any = {};

  const widgetDesignNemgoo = widgetnemgooReady?.design?.[myDivNumber];
  const extraDesignNemgoo = extraNemgoo?.design?.[myDivNumber];

  const blockProps = {
    id: id,
    ref: ref,
    ["div-name"]: myDivNumber,
    ["div-name-v2"]: divNumberV2,
    className: twMergeUtil(
      globalThemeNemgoo, //солих утгууд
      customClassName || className || "",
      myDivNumber === "divouterblock"
        ? isDefaultTheme
          ? globalDesignNemgoo?.className
          : ""
        : globalDesignNemgoo?.className,
      //! defaultAttribute?.className,
      widgetDesignNemgoo?.className ||
        widgetnemgooReady?.[myDivNumber]?.className ||
        "",
      extraDesignNemgoo?.className || "",
      ObjectLight?.className || ""
    ),
    style: {
      ...ObjectLight?.style,
      ...customStyle,
      ...style,
      ...(myDivNumber === "divouterblock"
        ? isDefaultTheme
          ? globalDesignNemgoo?.style
          : {}
        : globalDesignNemgoo?.style),

      //! ...defaultAttribute?.style,
      ...(widgetDesignNemgoo?.style || widgetnemgooReady?.[myDivNumber]?.style),
      ...(extraDesignNemgoo?.style || {}),
    },
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    ...customProps,
  };

  if (hideInMobile && isMobile) return null;
  if (hideInDesktop && isDesktop) return null;

  switch (type) {
    case "div":
      return <div {...blockProps}>{children}</div>;
    case "span":
      return <span {...blockProps}>{children}</span>;
    case "i":
      return <i {...blockProps}>{children}</i>;
    case "p":
      return <p {...blockProps}>{children}</p>;
    case "label":
      return <label {...blockProps}>{children}</label>;
    case "code":
      return <code {...blockProps}>{children}</code>;
    case "nav":
      return <nav {...blockProps}>{children}</nav>;
    case "ul":
      return <ul {...blockProps}>{children}</ul>;
    case "main":
      return <main {...blockProps}>{children}</main>;
    case "section":
      return <section {...blockProps}>{children}</section>;
    default:
      return <div {...blockProps}>{children}</div>;
  }
}
