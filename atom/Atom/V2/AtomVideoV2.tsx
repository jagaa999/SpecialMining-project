import { twMergeUtil } from "../../engineBox/util/atomHelper";
import useResponsiveBreakpoint from "../../middleware/hooks/custom/useResponsiveBreakpoint";
import _ from "lodash";
import ReactPlayer from "react-player";

export default function AtomVideoV2({
  item,
  theme,
  customClassName = "",
  customStyle,
  onClick = null,
  showSample = false,
  customDivNumber = "DivVideo",
  divNamePrefix = "",
  divNumberV2,
  id,
}: {
  item: any;
  theme?: any;
  customClassName?: string;
  customStyle?: any;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
  divNumberV2?: string;
  id?: string;
}) {
  const { breakpoint } = useResponsiveBreakpoint();

  const value = String(
    !showSample
      ? item?.value
      : "https://www.cars-data.com/pictures/mercedes/mercedes-benz-g-class_4266_24.jpg"
  );
  const valueClassName = item?.className || "";
  const divNumber = `${divNamePrefix}${customDivNumber}`;

  const cdnMotoConfig = {
    volume: 0,
    muted: true,
    controls: false,
    loop: true,
    playing: true,
    playbackRate: 1,
    pip: true,
    width: breakpoint === "sm" ? "100%" : "auto",
    height: "100%",
    config: {
      file: {
        attributes: {
          style: {
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            objectFit: "cover",
          },
        },
      },
    },
  };

  const youtubeConfig = {
    volume: 1,
    muted: true,
    controls: true,
    loop: true,
    playing: true,
    playbackRate: 1,
    pip: true,
    width: breakpoint === "sm" ? "100%" : "auto",
    height: "700px",
    config: {
      youtube: {
        playerVars: { showinfo: 0, autoplay: 1, controls: 0 },
        embedOptions: {},
      },
    },
  };

  let myConfig;

  if (_.includes(value, "cdn.moto.mn")) myConfig = cdnMotoConfig;
  if (_.includes(value, "youtu")) myConfig = youtubeConfig;

  if (_.isEmpty(value)) return null;

  return (
    <ReactPlayer
      id={id}
      url={value}
      className={twMergeUtil(
        theme,
        "w-full h-auto",
        customClassName,
        valueClassName
      )}
      style={customStyle}
      onClick={onClick}
      div-name={divNumber}
      div-name-v2={divNumberV2}
      {...myConfig}
    />
  );
}
