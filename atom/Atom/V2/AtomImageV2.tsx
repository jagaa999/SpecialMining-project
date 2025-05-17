import { twMergeUtil } from "atom/engineBox/util/atomHelper";
import {
  imageRootFix,
  processCloudinaryImage,
  processResponsiveCDNImage,
} from "atom/engineBox/util/imageHelper";

import _ from "lodash";
import AtomVideoV2 from "./AtomVideoV2";
import { isYouTubeVideo, isVideoFile } from "atom/engineBox/util/widgetHelper";

export default function AtomImageV2({
  item,
  theme,
  customClassName = "",
  customStyle,
  cloudinaryParam,
  alt,
  onClick = null,
  showSample = false,
  customDivNumber = "DivImage",
  divNamePrefix = "",
  divNumberV2,
  id,
}: {
  item: any;
  theme?: any;
  customClassName?: string;
  customStyle?: any;
  alt?: string;
  cloudinaryParam?: string; //w_200,h_150,c_scale
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
  divNumberV2?: string;
  id?: string;
}) {
  // const { widgetnemgooReady } = useContext(WidgetWrapperContext);

  const value = String(
    !showSample
      ? item?.value
      : "https://cdn.moto.mn/moto/news/2024/06/7b2ea8fb-e149-41d0-b673-ec7498e45a99.jpg"
  );
  const valueClassName = item?.className || "";

  //storage гэсэн замтай ирвэл өмнө нь домэйнийг залгаж өгөх ёстой.
  // const ganboldProvider = widgetnemgooReady?.metaverse?.provider || "cozy"; //dev
  const ganboldProvider = "cozy"; //dev

  // const imageRootUrl = imageRootEnv[_.upperCase(ganboldProvider)];

  // const imgSrc = _.startsWith(value, "storage/")
  //   ? `${imageRootUrl}${value}`
  //   : value;

  const imgSrc = imageRootFix(value, ganboldProvider);

  const imgSrcReady: any = processCloudinaryImage(
    imgSrc,
    // `fl_progressive${!_.isEmpty(cloudinaryParam) ? `,${cloudinaryParam}` : ""}` //w_200,h_150,c_scale гэх мэтээр өгч болно.
    cloudinaryParam
    //w_50 w_250 w_500
  );

  const divNumber = `${divNamePrefix}${customDivNumber}`;

  if (_.isEmpty(value)) return null;

  if (isYouTubeVideo(value) || isVideoFile(value)) {
    return (
      <AtomVideoV2
        item={item}
        theme={theme}
        customClassName={customClassName}
        customStyle={customStyle}
        // alt={alt}
        onClick={onClick}
        showSample={showSample}
        customDivNumber={customDivNumber}
        divNamePrefix={divNamePrefix}
        id={id}
      />
    );
  }

  const imgResponsiveProps: any = processResponsiveCDNImage(imgSrcReady);
  // const imgResponsiveProps: any = imgSrcReady;

  return (
    <img
      id={id}
      src={imgSrcReady}
      loading="lazy"
      onError={({ currentTarget }) => {
        console.log("errorrrr", { currentTarget });
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = "/images/icon-no-image_tcse9o.svg";
      }}
      className={twMergeUtil(
        theme,
        "w-full h-auto",
        customClassName,
        // widgetnemgooReady?.design?.[divNumber]?.className ||
        //   widgetnemgooReady?.[divNumber]?.className ||
        //   "",
        valueClassName
      )}
      style={{
        // ...widgetnemgooReady?.design?.[divNumber]?.style,
        ...customStyle,
      }}
      alt={alt || imgSrc}
      role="img"
      onClick={onClick}
      div-name={divNumber}
      div-name-v2={divNumberV2}
      {...imgResponsiveProps}
    />
  );
}
