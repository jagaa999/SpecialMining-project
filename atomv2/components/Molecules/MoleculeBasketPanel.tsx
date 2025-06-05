import _ from "lodash";
import { useToggle } from "react-use";
import { useConfig } from "src/config/context/ConfigContext";
import BlockDiv from "../Blocks/BlockDiv";
import BlockDrawer from "../Blocks/BlockDrawer";
import OrganismBasketDrawer from "../Organisms/OrganismBasketDrawer";

export default function MoleculeBasketPanel({}: {}) {
  const [isOpenSidebar, setIsOpenSidebar] = useToggle(false);

  const { localConfig } = useConfig();
  const datasrc = localConfig?.basketList;
  const totalCount = _.size(datasrc);

  return (
    <>
      <BlockDiv
        className={`py-4 px-5 ${
          _.isEmpty(datasrc) ? "bg-gray-500" : "bg-slate-200"
        } fixed left-0 top-48 flex flex-col items-center justify-center shadow rounded-r-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[{colorPrimary}] text-base z-[9999] transition-all duration-500 ${
          isOpenSidebar ? "" : "block"
        }`}
        onClick={() => {
          setIsOpenSidebar(true);
        }}>
        Сагс ({totalCount})
      </BlockDiv>

      <BlockDrawer
        isShowDrawer={isOpenSidebar}
        setIsShowDrawer={setIsOpenSidebar}
        width={"45%"}
        placement="right"
        CloseButtonObject={{
          className: "-left-20 top-20 text-7xl",
        }}
        BlockDrawerOuter={{
          className: "p-0",
        }}>
        <OrganismBasketDrawer />
      </BlockDrawer>
    </>
  );
}
