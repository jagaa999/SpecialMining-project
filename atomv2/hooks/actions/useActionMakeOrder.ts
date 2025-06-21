import { usePostToMotoApi } from "atomv2/hooks/api/usePostToMotoApi";
import { generateMemorable5DigitId } from "atomv2/util/widgetHelper";
import { useConfig } from "src/config/context/ConfigContext";
import { useDomain } from "src/config/context/DomainContext";

interface OrderPayload {
  basketList?: any[];
  orderInfo?: {
    customername?: { value: string };
    customerphone?: { value: string };
    customeremail?: { value: string };
    shippingaddress?: { value: string };
    [key: string]: any;
  };
  total?: number;
  code?: string;
  [key: string]: any;
}

export function useActionMakeOrder() {
  const { send } = usePostToMotoApi();
  const domain = useDomain();
  const { localConfig } = useConfig();

  const actionMakeOrder = async (item?: OrderPayload) => {
    const basketList = item?.basketList || localConfig.basketList || [];
    const orderInfo = item?.orderInfo || localConfig.orderInfo || {};
    const total =
      item?.total ||
      basketList.reduce((sum: number, item: any) => sum + (item.price || 0), 0);

    const sendData = {
      domain: domain.domain,
      code: item?.code || generateMemorable5DigitId(),
      price: total,
      ref_orderstatus: 1697100604808041,
      customername: orderInfo?.customername?.value,
      customerphone: orderInfo?.customerphone?.value,
      customeremail: orderInfo?.customeremail?.value,
      shippingaddress: orderInfo?.shippingaddress?.value,
      json: { ...basketList },
      ...item,
    };

    const result = await send(sendData, {
      path: "moto-order-v2",
      query: { apicommand: "insert" },
      toast: {
        loading: "Захиалга үүсгэж байна...",
        success: "Захиалга амжилттай үүссэн!",
        error: "Захиалга үүсгэхэд алдаа гарлаа.",
        mute: false,
      },
    });

    return result;
  };

  return { actionMakeOrder };
}
