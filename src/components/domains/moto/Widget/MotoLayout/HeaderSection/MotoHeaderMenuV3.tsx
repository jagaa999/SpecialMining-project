import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockMobileDesktop from "atomv2/components/Blocks/BlockMobileDesktop";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";

export default function MotoHeaderMenuV3({
  itemList,
  defaultValue,
}: {
  itemList: Array<any>;
  defaultValue: string;
}) {
  return (
    <BlockDiv
      className="flex flex-row gap-6"
      data-block="MotoHeaderV2HeaderMenuOuter">
      {itemList.map((item: any, index: number) => {
        return (
          <MenuItem
            key={item?.id || index}
            item={item}
            defaultValue={defaultValue}
          />
        );
      })}
    </BlockDiv>
  );
}

const MenuItem = ({ item, defaultValue }: any) => {
  const isActive = defaultValue === item?.link;
  return (
    <BlockDiv className="flex flex-col gap-1.5 items-center justify-start pt-2">
      <BlockMobileDesktop>
        <RenderAtom
          item={{
            value: `fal fa-${item.icon}`,
            positionnemgoo: {
              url: {
                path: `/${item?.link}`,
              },
            },
          }}
          type="icon"
          className={`text-lg uppercase ${
            isActive ? "text-moto fas" : "text-white"
          }`}
        />
        <RenderAtom
          item={{
            value: item.title,
            positionnemgoo: {
              url: {
                path: `/${item?.link}`,
              },
            },
          }}
          type="text"
          className={`text-[13px] uppercase ${
            isActive ? "text-moto font-semibold" : "text-white font-light"
          }`}
        />
      </BlockMobileDesktop>
      {isActive && (
        // <BlockDiv className="w-5 h-0.5 bg-moto rounded"></BlockDiv>
        <BlockDiv className="w-5 h-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded animate-pulse animate-duration-3s"></BlockDiv>
      )}
    </BlockDiv>
  );
};
