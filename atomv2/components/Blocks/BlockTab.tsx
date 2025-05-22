"use client";

import _ from "lodash";
import React from "react";
import { useCounter } from "react-use";
import BlockAffix from "./BlockAffix";
import BlockDiv from "./BlockDiv";
import RenderAtom from "../system/RenderAtom";
import BlockSlider from "./BlockSlider";

interface BlockTabProps {
  titleList?: any[];
  activeNumber?: number;
  customProps?: {
    titleBlockClassName?: string;
    normalTabClassName?: string;
    activeTabClassName?: string;
  };
  titleAffix?: boolean;
  children: React.ReactNode;
}

export default function BlockTab({
  titleList = [],
  activeNumber = 0,
  customProps = {},
  titleAffix = true,
  children,
}: BlockTabProps) {
  const [number, { set: setNumber }] = useCounter(
    activeNumber,
    React.Children.count(children) - 1,
    0
  );

  const BlockTabTitleBlockClassName = `w-full flex flex-row gap-x-7 items-center justify-center border-b border-gray-100 pt-2 ${customProps?.titleBlockClassName}`;

  const normalTabClassName = `relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-transparent after:transition-all after:duration-700 ${customProps?.normalTabClassName}`;
  const activeTabClassName = `relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-moto after:transition-all after:duration-700 ${customProps?.activeTabClassName}`;

  const myChildren = React.Children.toArray(children);

  const titleListReady = _.isEmpty(titleList)
    ? _.map(myChildren, (item: any) => {
        return { title: item?.props?.title, loading: item?.props?.loading };
      })
    : titleList;

  return (
    <>
      <BlockAffix isActive={titleAffix}>
        <BlockDiv
          className={BlockTabTitleBlockClassName}
          data-block="BlockTabTitleBlock">
          <BlockSlider
            type="mini"
            divNumber="headerBanner"
            customProps={{
              slickslideRawClass: { padding: "0 25px 0 0" },
              slicklistRawClass: { margin: "0" },
            }}>
            {_.map(titleListReady, (item: any, index: number) => (
              <RenderAtom
                key={item?.id || index}
                item={item?.title}
                type="title"
                className={`pb-3 cursor-pointer font-robotocondensed ${
                  number === index ? activeTabClassName : normalTabClassName
                }`}
                customProps={{ type: "html" }}
                onClick={() => setNumber(index)}
                isAtomWorking={item?.loading}
              />
            ))}
          </BlockSlider>
        </BlockDiv>
      </BlockAffix>

      {myChildren[number]}
    </>
  );
}
