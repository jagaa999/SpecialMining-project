import { Collapse, ConfigProvider } from "antd";
import {
  workingOnHTMLDetailCollapsible,
  workingOnHTMLDetailCollapsibleH3,
  workingOnHTMLDetailHeadingH3,
  workingOnHTMLLightBoxItems,
} from "atomv2/util/atomHelperV2";
import { toBoolean } from "atomv2/util/widgetHelper";
// import BlockLightbox2 from "atom/Block/BlockLightbox2";
import { decode } from "html-entities";
import parse from "html-react-parser";
import { forEach, isEmpty, kebabCase, map } from "lodash";
import React, { useEffect, useRef } from "react";
import BlockDiv from "../Blocks/BlockDiv";
import BlockLightbox2 from "../Blocks/BlockLightbox2";

export default function AtomClobV2({
  value,
  className = "",
  style,
  customStyle,
  thumbTitle = "",
  onClick = null,
  showSample = false,
  customDivNumber = "DivText",
  divNamePrefix = "",
  children,
  id,
  detailHeading = false,
  setHeadingList = () => {},
  collapsible = "0",
  isCollapseAll,
}: {
  value: any;
  style?: any;
  customStyle?: any;
  className?: string;
  thumbTitle?: string;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
  children?: any;
  id?: string;
  detailHeading?: any;
  setHeadingList?: any;
  collapsible?: any;
  isCollapseAll?: boolean;
}) {
  // const isClient = useClientOnly();
  const valueReady: string = String(
    !showSample
      ? // ? decodeURIComponent(item?.value) || ""
        decode(value) || ""
      : "Sample Text"
  );
  // const [valueReady, setValueReady] = useState(value);

  if (isEmpty(valueReady)) return null;

  const containerRef: any = useRef(null);
  const isDetailHeading = toBoolean(detailHeading);

  useEffect(() => {
    if (!isEmpty(valueReady)) {
      const valueAfter1 = workingOnHTMLLightBoxItems({ value: valueReady });
      const { resultHtml: valueAfter2, headingList }: any = isDetailHeading
        ? workingOnHTMLDetailHeadingH3({
            value: valueAfter1,
          })
        : { resultHtml: valueAfter1, headingList: [] };
      setHeadingList(headingList);

      const valueAfter3 = toBoolean(collapsible)
        ? workingOnHTMLDetailCollapsibleH3({ value: valueAfter2 })
        : valueAfter2;

      const valueAfter4 = workingOnHTMLDetailCollapsible({
        value: valueAfter3,
      });

      // setValueReady(valueAfter4);
      if (containerRef.current) {
        containerRef.current.innerHTML = valueAfter4 || "";
      }

      // containerRef.current.innerHTML = valueAfter4 || "";
    } else {
      setHeadingList();
    }
  }, [valueReady]);

  /* ------------------ snap хэрэгжүүлэх ------------------ */
  const myMainClass =
    "h-screen snap-y snap-proximity scroll-smooth overflow-y-auto";
  const myHeaderClass = "bg-[#222222]";
  useEffect(() => {
    //first main element
    const sectionsDiv = document.querySelector(
      '[div-name="bodyMain"]'
    ) as HTMLElement;
    if (sectionsDiv) {
      sectionsDiv?.classList.add(...myMainClass.split(" "));
    }

    //header menu
    const headerDiv = document.querySelector(
      '[div-name="MotoHeaderTopV3Outer"]'
    ) as HTMLElement;
    if (headerDiv) {
      headerDiv?.classList.add(...myHeaderClass.split(" "));
    }

    return () => {
      sectionsDiv?.classList.remove(...myMainClass.split(" "));
      headerDiv?.classList.remove(...myHeaderClass.split(" "));
    };
  }, []);

  return (
    <BlockDiv
      className={`${className}`}
      style={{ ...customStyle, style }}
      data-block={`${divNamePrefix}${customDivNumber}`}
      onClick={onClick}
      id={id}>
      <BlockDiv className="atomClobBody">
        <BlockLightbox2 title={thumbTitle} htmlContent={value}>
          <div ref={containerRef}></div>
        </BlockLightbox2>
        <style>
          {`
                .atomClobBody h3,
                .atomClobBody h3 span { 
                  font-size:26px !important;
                  line-height: 35px !important;
                  font-weight: 500 !important;
                  color: #585858 !important;
                  font-family: Roboto !important;
                  margin: 5px 0 10px !important;
                  display: block !important;
                }
                
                .atomClobBody span,
                .atomClobBody div,
                .atomClobBody p,
                .atomClobBody blockquote,
                .atomClobBody figcaption {
                  font-size:14px !important; 
                  line-height: 28px !important; 
                  color: #585858 !important;
                  font-family: Roboto !important;
                  margin: 3px 0 !important; 
                  overflow-wrap: break-word !important;
                }

                .atomClobBody hr {
                  margin: 28px 0 !important; 
                }

                .atomClobBody .img-wrapper-span {
                  margin: auto !important;
                  max-width: 500px !important;
                  display: block !important;
                  position: relative !important;
                }
  
                .atomClobBody img {
                  margin: 2px 0 !important;
                  max-width:100% !important;
                  height: auto !important;
                  border-radius: 10px !important;
                  display: flow;
                }

                .atomClobBody table {
                  width: auto;
                  border-collapse: collapse;
                  border: 1px solid #d1d1d1;
                  font-size: 90% !important;
                }

                .atomClobBody table tr {
                }
              
                .atomClobBody table td {
                  border: 1px solid #d1d1d1;
                  padding: 5px 9px;
                }

                .atomClobBody table th {
                  border: 1px solid #d1d1d1;
                  padding: 5px 9px;
                }

                .atomClobBody .moto-wrap-flex {
                  display: flex;
                  flex-direction: row;
                  gap: 1.75rem;
                }

                @media (max-width: 640px) {
                  .atomClobBody .moto-wrap-flex {
                    gap: 0.35rem;
                  }
                }

                .atomClobBody ul {
                  list-style-type: disc;
                  padding-left: 25px;
                }

                .atomClobBody ol {
                  list-style-type: decimal;
                  padding-left: 25px;
                }



                .atomClobBody .moto-half-block {
                  width: 50%;
                  display: block;
                  margin: 0 !important; 
                }

                .atomClobBody .moto-third-block {
                  width: 33.3%;
                  display: block;
                  margin: 0 !important; 
                }

                .atomClobBody .moto-third-block {
                  width: 33.3%;
                  display: block;
                  margin: 0 !important; 
                }

                

              
                
                .atomClobBody .toggle-input {
                  display: none;
                }

                .atomClobBody h3.toggle-header,
                .atomClobBody div.toggle-header {
                  cursor: pointer;
                  display: flex !important;
                  align-items: center !important;
                }

                .atomClobBody h3 label,
                .atomClobBody .toggle-header label {
                  display: flex !important;
                  align-items: center !important;
                }

                .atomClobBody h3 span.toggle-arrow,
                .motoDocsBodyWrapper .atomClobBody h3 span.toggle-arrow,
                .atomClobBody .toggle-header span.toggle-arrow,
                .motoDocsBodyWrapper .atomClobBody .toggle-header span.toggle-arrow {
                  display: block !important;
                  margin: 0 25px 0 0 !important;
                  margin-top: 0 !important;
                  transition: transform 0.3s;
                }

                .atomClobBody .toggle-input:checked + h3 .toggle-arrow i,
                .atomClobBody .toggle-input:checked + .toggle-header .toggle-arrow i {
                  transform: rotate(90deg);
                  transition: transform 0.5s;
                }

                .atomClobBody .toggle-header label {
                  cursor: pointer;
                }

                .atomClobBody .toggle-body {
                  display: none;
                }

                .atomClobBody .toggle-input:checked + h3 + .toggle-body,
                .atomClobBody .toggle-input:checked + .toggle-header + .toggle-body {
                  display: block;
                }

                .atomClobBody .toggle-body {
                  transition: all 0.3s ease;
                }

                .atomClobBody .toggle-body {
                  display: ${isCollapseAll ? "block" : "none"};
                  margin-left: 20px;
                  animation: fadeIn 0.8s ease-in-out; /* Apply the fade-in effect */
                }

                .atomClobBody div.moto-carousel-header .toggle-arrow {
                  color: rgb(6 182 212) !important;
                }
                
                .atomClobBody div.moto-carousel-header label {
                  color: rgb(6 182 212) !important;
                  font-size: 120% !important;
                  font-weight: 500 !important;
                }

                .atomClobBody .moto-carousel-body {
                  background: rgb(236 254 255) !important;
                  border-radius: 10px !important;
                  padding: 7px 18px !important;
                }


                .atomClobBody .moto-snap-slide {
                  scroll-snap-align: start !important;          /* snap-start */
                  scroll-snap-type: y mandatory !important;     /* snap-always, assuming vertical snap */
                  overflow: hidden !important;
                  height: 100vh !important;
                  // background: #d1d1d1 !important;
                  display: flex !important;                     /* flex */
                  flex-direction: column !important;            /* flex-col (sets flex direction to column) */
                  justify-content: center !important;           /* justify-center (centers items vertically) */
                  background-color: #f8fafc !important;         /* bg-slate-50 */
                  padding: 30px !important;
                }

                .moto-image-gallery p {
                  display: flex !important;                    /* flex */
                  flex-direction: row !important;              /* flex-col (sets flex direction to column) */
                  flex-wrap: wrap !important;
                  gap: 0.75rem !important;
                }

                .motoNewsBodyWrapper .atomClobBody div.moto-image-gallery p span.img-wrapper-span {
                  width: 250px !important;
                  height: 250px !important;
                  margin: unset !important;
                }

                .motoNewsBodyWrapper .atomClobBody div.moto-image-gallery p span.img-wrapper-span img {
                  width: 100% !important;
                  height: 100% !important;
                  object-fit: cover !important;
                  object-position: center !important;
                }

                .motoNewsBodyWrapper .atomClobBody div.full-image .img-wrapper-span {
                  width: 100% !important;
                  height: 100vh !important;
                  max-width: 100vw !important;
                  margin: 0 !important;
                  scroll-snap-align: start !important;          /* snap-start */
                  scroll-snap-type: y mandatory !important;     /* snap-always, assuming vertical snap */
                  overflow: hidden !important;
                }

                .motoNewsBodyWrapper .atomClobBody div.full-image .img-wrapper-span img {
                  width: 100% !important;
                  height: 100vh !important;
                  object-fit: cover !important;
                  object-position: center !important;
                  margin: 0 !important;
                }

                @keyframes fadeIn {
                  0% {
                    opacity: 0;
                    transform: translateY(20px); /* Slight upward movement */
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0); /* Reset the position */
                  }
                }

                .atomClobBody table.moto-spec {
                  background: #94A3B8;
                  color:#fff;
                  font-family: Roboto Condensed;
                  font-weight: 300;
                  border-collapse: collapse; /* Merge borders for cleaner look */
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
                  border-radius: 8px; /* Smooth rounded corners */
                  overflow: hidden; /* Ensure rounding applies to all contents */
                  animation: fadeIn 0.8s ease-in-out; /* Apply the fade-in effect */
                }

                .atomClobBody table.moto-spec tr {
                  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth hover transition */
                }

                .atomClobBody table.moto-spec tr:hover {
                  --tw-brightness: brightness(.9);
                  filter: brightness(0.9);
                  background: #8592A5;
                  transform: scale(1.01); /* Subtle zoom-in effect */
                }

                .atomClobBody table.moto-spec td {
                  border: 1px solid #fff;
                  padding: 6px 12px;
                  color:#fff;
                  font-family: Roboto Condensed;
                  font-weight: 300;
                  text-align: left;
                  vertical-align: middle; /* Align text nicely */
                  transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition for color */
                }

                .atomClobBody table.moto-spec td:first-child {
                  font-weight: 400; /* Highlight the first column */
                  color: #f1f1f1; /* Slightly lighter text color for first column */
                }

                .atomClobBody table.moto-spec td:hover {
                  background-color: rgba(255, 255, 255, 0.1); /* Add subtle hover effect on cells */
                }

                .atomClobBody table.moto-spec td:before {
                  content: ""; /* Optional content for further customization */
                }

                .atomClobBody table.moto-spec td img {
                  max-width: 100px;
                  height: auto;
                  display: block;
                  margin: 0 auto;
                  border-radius: 4px;
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Light shadow around images */
                }

                .atomClobBody table.moto-spec th {
                  font-weight: 500;
                  color: #E5E7EB; /* Lighter slate color */
                  padding: 14px 16px;
                  text-transform: uppercase; /* Add uppercase for headers */
                  letter-spacing: 1px;
                  border-bottom: 2px solid #fff; /* Clearer header separation */
                  background-color: #4B5563; /* Slate 500-like background for headers */
                }


                

                
              
                


                
              `}
        </style>
        {children}
      </BlockDiv>
    </BlockDiv>
  );
}

export function CollapsibleContent({ html }: any) {
  const transformHtmlToCollapsible = (htmlString: any) => {
    const elements: any = parse(htmlString);
    const panels: any = [];

    let currentHeader: any = null;
    let currentBody: any = [];

    forEach(elements, (item) => {
      if (item?.type === "h3") {
        if (currentHeader) {
          const sanitizedId = kebabCase(currentHeader);
          panels.push({
            key: panels.length.toString(),
            label: <h3 id={sanitizedId}>{currentHeader}</h3>,
            children: map(currentBody, (bodyElement, idx) => (
              <React.Fragment key={idx}>{bodyElement}</React.Fragment>
            )),
          });
        }
        currentHeader = item?.props?.children;
        currentBody = [];
      } else {
        currentBody.push(item);
      }
    });

    // Add the last panel
    if (currentHeader) {
      const sanitizedId = kebabCase(currentHeader);
      panels.push({
        key: panels.length.toString(),
        label: <h3 id={sanitizedId}>{currentHeader}</h3>,
        children: map(currentBody, (bodyElement, idx) => (
          <React.Fragment key={idx}>{bodyElement}</React.Fragment>
        )),
      });
    }

    // llog("XXXXXXXXXXXXXX", { panels });

    return panels;
  };

  const items = transformHtmlToCollapsible(html);

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            /* here is your component tokens */
            contentPadding: 0,
            headerPadding: 0,
          },
        },
      }}>
      <Collapse
        items={items}
        ghost={true}
        accordion={false}
        bordered={false}
        size="small"
      />
    </ConfigProvider>
  );
}
