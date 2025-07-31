"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import { ObjectButton } from "atomv2/types/objectTypes";
import { isEmpty, size } from "lodash";
import { useToggle } from "react-use";
import { useConfig } from "src/config/context/ConfigContext";
import BlockDiv from "../../Blocks/BlockDiv";
import BlockDrawer from "../../Blocks/BlockDrawer";
import OrganismBasketDrawer from "./OrganismBasketDrawer";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";

export default function OrganismBasketPanel({
  basketButton,
}: {
  basketButton?: ObjectButton;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useToggle(false);

  return (
    <>
      {/* Сагсны чих */}
      <BasketTriggerButton setIsOpenSidebar={setIsOpenSidebar} />

      {/* Хажуугаас урсах Сагсны Drawer */}
      <BlockDrawer
        isShowDrawer={isOpenSidebar}
        setIsShowDrawer={setIsOpenSidebar}
        width={"490px"}
        placement="right"
        CloseButtonObject={{
          className: "-left-14 top-20 text-4xl",
        }}
        BlockDrawerOuter={{
          className: "p-0",
        }}>
        <OrganismBasketDrawer basketButton={basketButton} />
      </BlockDrawer>
    </>
  );
}

const BasketTriggerButton = ({ setIsOpenSidebar }: any) => {
  const { localConfig } = useConfig();
  const datasrc = localConfig?.basketList;
  const totalCount = size(datasrc);
  return (
    <BlockDiv className={`fixed left-0 top-48 z-50 block`}>
      <BlockDiv className={`relative rounded-r-lg z-50 w-fit h-fit`}>
        <BlockFlexCol
          className={`py-2 px-4 ${
            isEmpty(datasrc) ? "bg-gray-300" : "bg-brand"
          } shadow-md rounded-r-lg cursor-pointer focus:outline-none text-bg z-50 transition-all duration-300 items-center gap-1`}
          onClick={() => {
            setIsOpenSidebar(true);
          }}>
          <RenderAtom
            value={
              isEmpty(datasrc)
                ? "material-symbols:shopping-cart-outline"
                : "material-symbols:shopping-cart"
            }
            type="icon"
          />
          <RenderAtom
            value={isEmpty(datasrc) ? "Сагс" : `Сагс (${totalCount})`}
            type="text"
            className={`text-xs`}
          />
        </BlockFlexCol>
        {!isEmpty(datasrc) && (
          <BlockDiv className="absolute inset-0 w-full h-full bg-brand rounded-r-lg opacity-75 animate-ping-soft1 transition-all duration-700 -z-10" />
        )}
      </BlockDiv>
    </BlockDiv>
  );
};
