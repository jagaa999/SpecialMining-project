import { twMergeUtil } from "atom/engineBox/util/atomHelper";
import _ from "lodash";

export default function AtomIconV2({
  item,
  checked = false,
  color = "cozy",
  theme,
  hoverSolid = true,
  customClassName = "",
  customStyle,
  onClick,
  showSample = false,
  customDivNumber = "DivIcon",
  divNamePrefix = "",
  divNumberV2,
  id,
}: {
  item: any;
  checked?: boolean;
  color?: string;
  theme?: any;
  hoverSolid?: boolean;
  customClassName?: string;
  customStyle?: any;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
  divNumberV2?: string;
  id?: string;
}) {
  const value = String(!showSample ? item?.value || "" : "far fa-smile");
  const valueClassName = item?.className || "";

  if (_.isEmpty(value)) return null;

  let myIcon = value;
  if (hoverSolid && checked) {
    myIcon = _.replace(myIcon, "far", "fas");
    myIcon = _.replace(myIcon, "fal", "fas");
  }

  const divNumber = `${divNamePrefix}${customDivNumber}`;

  return (
    <i
      id={id}
      className={twMergeUtil(
        theme,
        myIcon,
        customClassName,
        checked && `text-${color}`,

        valueClassName
      )}
      style={customStyle}
      onClick={onClick}
      div-name={divNumber}
      div-name-v2={divNumberV2}
    />
  );
}
