import BlockDiv from "atom/Block/BlockDiv";
import BlockMobileDesktop from "atom/Block/BlockMobileDesktop";
import _ from "lodash";
import { useContext } from "react";
import { useWindowScroll } from "react-use";
import MotoHeaderMenuV3 from "./MotoHeaderMenuV3";

// import { useCloud } from "atom/middleware/hooks/use-cloud";
// import BlockDiv from "atom/Block/BlockDiv";
// import BlockMobileDesktop from "atom/Block/BlockMobileDesktop";
// import WidgetWrapperContext from "atom/engineBox/Wrapper/WidgetUniversalWrapper";
// import { useWindowScroll } from "react-use";
// import MotoCustomerV3 from "../Customer/MotoCustomerV3";
// import MotoHeaderBackArrowV3 from "./MotoHeaderBackArrowV3";
// import MotoHeaderMenuV3 from "./MotoHeaderMenuV3";
// import MotoHeaderMiddleLogoV3 from "./MotoHeaderMiddleLogoV3";
// import MotoHeaderRightSectionV3 from "./MotoHeaderRightSectionV3";

export default function MotoHeaderTopV3() {
  // const { readyDatasrc } = useContext(WidgetWrapperContext);
  // const cloudContext = useCloud();
  // const menuDefaultValue = _.split(cloudContext?.hostObject?.pageSlug, "/")[0]; //slug-ийн эхнийхийг авна.

  const { y: scrollY1 } = useWindowScroll();

  const headerEffect: string = `${
    scrollY1 < 100
      ? "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-xs"
      : "bg-[#222222] backdrop-blur-none"
  }`;

  // const staticItem1 = _.values(readyDatasrc?.[0]);
  // const staticItem2 = _.values(readyDatasrc?.[1]);

  const headerHeight = "h-[54px]";

  return (
    <BlockDiv
      className={`w-full fixed z-40 ${headerEffect} transition-all duration-1000 ease-in-out`}
      divNumber="MotoHeaderTopV3Outer">
      <BlockDiv
        className="w-full {mainContainer}"
        divNumber="MotoHeaderTopV3Inner">
        <BlockMobileDesktop>
          {/* <BlockDiv
            className={`flex flex-row justify-between items-center w-full ${headerHeight}`}>
            <BlockDiv className="flex flex-row items-center gap-6">
              <MotoHeaderBackArrowV3 />
              <MotoHeaderMenuV3
                itemList={staticItem1}
                defaultValue={menuDefaultValue}
              />
            </BlockDiv>
            <MotoHeaderRightSectionV3 />
          </BlockDiv> */}
          <BlockDiv>Одоогоор хоосон</BlockDiv>

          <BlockDiv
            className={`flex flex-row justify-between items-center w-full ${headerHeight}`}>
            <MotoHeaderMenuV3
              itemList={staticItem1}
              defaultValue={menuDefaultValue}
            />
            <MotoHeaderMiddleLogoV3 itemList={staticItem2} />
            <BlockDiv
              className={`flex flex-row justify-end items-center ${headerHeight}`}>
              <MotoHeaderRightSectionV3 />
              <MotoCustomerV3 />
            </BlockDiv>
          </BlockDiv>
        </BlockMobileDesktop>
      </BlockDiv>
    </BlockDiv>
  );
}
