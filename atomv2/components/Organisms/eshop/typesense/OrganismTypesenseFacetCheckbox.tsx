import { Checkbox } from "antd";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import { BlockSkeleton } from "atomv2/components/Blocks/BlockSkeleton";
import TextBody from "atomv2/components/Text/TextBody";
import { usePostToMotoApi } from "atomv2/hooks/api/usePostToMotoApi";
import { find, isEmpty, last, map, sortBy, split } from "lodash";
import { useEffect } from "react";
import { useRefinementList, UseRefinementListProps } from "react-instantsearch";

export const revalidate = 3600;

export default function OrganismTypesenseFacetCheckbox({
  attribute,
  title,
  refCategory,
}: {
  attribute: string;
  title?: string;
  refCategory?: string; // newstype, newssource гэх мэт
}) {
  // category байхгүй бол attribute-аас ref_ хэсгийг хасч category гаргаж авна
  const categoryReady = refCategory || last(split(attribute, "ref_"));

  const { items, refine } = useRefinementList({
    attribute,
  } as UseRefinementListProps);

  const { data: refData, send, loading } = usePostToMotoApi();

  useEffect(() => {
    if (!isEmpty(categoryReady)) {
      send(
        { apicommand: "universal", category: categoryReady },
        {
          path: "moto-ref-v2",
          toast: { mute: true },
        }
      );
    }
  }, [categoryReady]);

  if (loading) {
    return <BlockSkeleton variant="text" className="mt-4" />;
  }

  const itemsSorted = sortBy(items, (item) => {
    const index = refData?.findIndex(
      (refItem: any) => String(refItem.id) === String(item.value)
    );
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  });

  return (
    <BlockFlexCol className="gap-3">
      <TextBody value={title} className="font-semibold" />

      <BlockFlexCol className="gap-2">
        {map(itemsSorted, (item, index) => {
          const itemRef = find(
            refData,
            (refitem) => String(refitem.id) === String(item.value)
          );

          return (
            <BlockFlexRow
              key={item?.value || index}
              className="justify-between gap-2 cursor-pointer w-full">
              <Checkbox
                checked={item.isRefined}
                onChange={() => refine(item.value)}>
                <TextBody
                  value={itemRef?.title ?? item.label}
                  className="text-sm"
                />
              </Checkbox>

              <TextBody
                value={`(${item.count})`}
                className="text-gray-400 text-sm ml-auto"
              />
            </BlockFlexRow>
          );
        })}
      </BlockFlexCol>
    </BlockFlexCol>
  );
}
