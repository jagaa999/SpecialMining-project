"use client";

import React from "react";
import { useCounter } from "react-use";
import _, { map } from "lodash";
import BlockAffix from "./BlockAffix";
import BlockDiv from "./BlockDiv";
import RenderAtom from "../Atoms/RenderAtom";

export default function BlockTab({
  titleList = [],
  activeNumber = 0,
  customProps = {},
  titleAffix = true,
  children,
}: {
  titleList?: Array<{ title: string; id?: string; loading?: boolean }>;
  activeNumber?: number;
  customProps?: {
    titleBlockClassName?: string;
    normalTabClassName?: string;
    activeTabClassName?: string;
  };
  titleAffix?: boolean;
  children: React.ReactNode;
}) {
  const [activeIndex, { set: setActiveIndex }] = useCounter(
    activeNumber,
    React.Children.count(children) - 1,
    0
  );

  const childArray = React.Children.toArray(children);

  const derivedTitleList = _.isEmpty(titleList)
    ? childArray.map((child: any) => ({
        title: child?.props?.title ?? "Tab",
        loading: child?.props?.loading,
      }))
    : titleList;

  const tabWrapperClass = `w-full flex flex-row gap-x-7 items-center justify-center border-b border-gray-100 pt-2 ${customProps?.titleBlockClassName}`;
  const normalTabClass = `relative text-brand/60 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-transparent after:transition-all after:duration-700 ${customProps?.normalTabClassName}`;
  const activeTabClass = `relative text-brand after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-brand after:transition-all after:duration-700 ${customProps?.activeTabClassName}`;

  return (
    <>
      <BlockAffix isActive={titleAffix}>
        <BlockDiv className={tabWrapperClass} data-block="BlockTabTitleBlock">
          {map(derivedTitleList, (item: any, index: number) => (
            <RenderAtom
              key={item.id || index}
              item={item.title}
              type="text"
              className={`pb-3 cursor-pointer ${activeIndex} ${index} ${
                activeIndex == index ? activeTabClass : normalTabClass
              }`}
              customProps={{ type: "html" }}
              onClick={() => setActiveIndex(index)}
              isAtomWorking={item.loading}
            />
          ))}
        </BlockDiv>
      </BlockAffix>

      {childArray[activeIndex]}
    </>
  );
}
