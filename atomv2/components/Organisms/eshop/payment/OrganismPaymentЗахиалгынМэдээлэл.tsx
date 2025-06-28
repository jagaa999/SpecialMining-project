import { Descriptions } from "antd";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import TextH3 from "atomv2/components/Text/TextH3";
import { map } from "lodash";
import { useConfig } from "src/config/context/ConfigContext";

export default function OrganismPaymentЗахиалгынМэдээлэл() {
  const { localConfig } = useConfig();
  const orderInfo = localConfig.orderInfo || {};

  return (
    <BlockFlexCol className="gap-8">
      <TextH3 value="Захиалгын мэдээлэл" />
      <Descriptions
        column={1}
        styles={{
          label: { fontWeight: 400, width: 180 },
        }}>
        {map(orderInfo, (item: any, index: number) => (
          <Descriptions.Item
            key={item?.id || index}
            label={item.label || item?.title || item?.name}>
            {item?.value}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </BlockFlexCol>
  );
}
