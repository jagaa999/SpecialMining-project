import _ from "lodash";
import { useToggle } from "react-use";
import { useConfig } from "src/config/context/ConfigContext";
import BlockDiv from "../../Blocks/BlockDiv";
import BlockDrawer from "../../Blocks/BlockDrawer";
import OrganismBasketDrawer from "./OrganismBasketDrawer";
import { ObjectButton } from "atomv2/types/objectTypes";

export default function OrganismBasketPanel({
  basketButton,
}: {
  basketButton?: ObjectButton;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useToggle(false);

  const { localConfig } = useConfig();
  const datasrc = localConfig?.basketList;
  const totalCount = _.size(datasrc);

  return (
    <>
      <BlockDiv className={`fixed left-0 top-48 z-50 block`}>
        <BlockDiv className={`relative rounded-r-lg z-50 w-fit h-fit`}>
          <BlockDiv
            className={`py-3 px-5 ${
              _.isEmpty(datasrc) ? "bg-muted" : "bg-brand"
            } flex flex-col items-center justify-center shadow-md rounded-r-lg cursor-pointer focus:outline-none text-bg z-50 transition-all duration-700 `}
            onClick={() => {
              setIsOpenSidebar(true);
            }}>
            Сагс ({totalCount})
          </BlockDiv>
          {!_.isEmpty(datasrc) && (
            <BlockDiv className="absolute inset-0 w-full h-full bg-brand rounded-r-lg opacity-75 animate-ping-soft1 transition-all duration-700 -z-10" />
          )}
        </BlockDiv>
      </BlockDiv>

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
