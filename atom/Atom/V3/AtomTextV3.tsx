import React from "react";
import _ from "lodash";
import { decode } from "html-entities";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Typography } from "antd";
import { useToggle } from "react-use";
import dayjs from "../../engineBox/util/dayjslocale";

export default function AtomTextV3({
  item,
  type = "markdown",
  onMouseEnter,
  className = "",
  style,
  truncateRow = 0,
  maxLength = 9007199254740991,
  onClick = null,
  showSample = false,
  // customDivNumber = "DivText",
  // divNamePrefix = "",
  // divNumberV2,
  children,
  id,
  paragraphProps,
}: {
  item: any;
  type?: "markdown" | "html" | "dateFromNow" | "paragraph";
  link?: string;
  onMouseEnter?: any;
  className?: string;
  style?: any;
  truncateRow?: number;
  maxLength?: number;
  onClick?: any;
  showSample?: boolean;
  // customDivNumber?: string;
  // divNamePrefix?: string;
  // divNumberV2?: string;
  children?: any;
  id?: string;
  paragraphProps?: {
    ellipsis?: any;
  };
}) {
  const [expanded, setExpanded] = useToggle(false);
  const value: string | undefined = !showSample ? item?.value : "Sample Text";
  const valueClassName = item?.className || "";

  //main хэсэг эхэлж байна.
  if (_.isEmpty(String(value))) return null;
  if (value === "undefined") return null;

  const valueReady = decode(String(value).substring(0, maxLength));

  const renderContent = () => {
    switch (type) {
      case "markdown":
        return (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {valueReady}
          </ReactMarkdown>
        );

      case "dateFromNow":
        return <>{dayjs(valueReady).fromNow()}</>;
      case "paragraph":
        return (
          <Typography.Paragraph
            ellipsis={{
              rows: 5,
              expandable: "collapsible",
              expanded: expanded,
              symbol: expanded ? (
                <span className="text-moto font-bold">Хумих</span>
              ) : (
                <span className="text-moto font-bold">Дэлгэрэнгүй</span>
              ),
              onExpand: (_: any, info: any) => setExpanded(info?.expanded),
              ...paragraphProps?.ellipsis,
            }}>
            {valueReady}
          </Typography.Paragraph>
        );
      default:
        return <div dangerouslySetInnerHTML={{ __html: valueReady }} />;
    }
  };

  return (
    <span
      className={`${className} ${valueClassName}`}
      style={style}
      // divNumber={`${divNamePrefix}${customDivNumber}`}
      // divNumberV2={divNumberV2}
      // type="span"
      onClick={onClick}
      id={id}>
      <span className={`line-clamp-${truncateRow}`} onMouseEnter={onMouseEnter}>
        {renderContent()}
        {children}
      </span>
    </span>
  );
}
