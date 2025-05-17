import { Popover } from "antd";
import _ from "lodash";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import BlockDiv from "../../Block/BlockDiv";
import RenderAtom from "../RenderAtom";

export default function AtomLabelV2({
  label,
  children,
}: {
  label: {
    title?: string;
    outerClassName?: string;
    outerStyle?: Object;
    className?: string;
    style?: Object;
    helper?: any;
  };
  children: any;
}) {
  if (!label?.title) return children;

  const helper = label?.helper;

  // if (!_.isEmpty(helper)) {
  //   llog("DDDDDDDDDDDDD", helper);
  // }

  return (
    <BlockDiv
      className={label?.outerClassName}
      style={label?.outerStyle}
      divNumber="AtomLabelOuter">
      <BlockDiv
        type="span"
        className={label?.className}
        style={label?.style}
        divNumber="AtomLabelInner">
        <ReactMarkdown
          children={label?.title}
          rehypePlugins={[rehypeRaw]}
          components={{
            p: ({ children }) => <>{children}</>,
          }}
        />

        <Helper helper={helper} />
      </BlockDiv>
      {children}
    </BlockDiv>
  );
}

const Helper = ({ helper }: any) => {
  if (_.isEmpty(helper)) return null;

  return (
    <Popover
      content={
        <RenderAtom
          item={helper?.body}
          renderType="text"
          // className="text-[{colorPrimary}] text-base text-center"
          customProps={{ type: "html" }}
        />
      }
      trigger="click"
      arrow={true}>
      <RenderAtom
        item={`fal fa-${helper?.icon || "circle-info"}`}
        renderType="icon"
        className={"ml-2 text-slate-500 cursor-pointer"}
      />
    </Popover>
  );
};
