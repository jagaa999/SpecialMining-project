import dynamic from "next/dynamic";
import { AtomRegistryItem } from "./atom.registry.types";

const atomRegistry: Record<string, AtomRegistryItem> = {
  text: {
    type: "text",
    component: dynamic(() => import("../components/Atoms/AtomTextV2"), {
      ssr: false,
    }),
    displayName: "Текст",
    icon: "TextIcon",
    category: "Basic",
    description: "Энгийн текст харагдуулна",
  },
  image: {
    type: "image",
    component: dynamic(() => import("../components/Atoms/AtomImageV2"), {
      ssr: false,
    }),
    displayName: "Зураг",
    icon: "ImageIcon",
    category: "Media",
    description: "Image буюу зураг үзүүлнэ",
  },
  button: {
    type: "button",
    component: dynamic(() => import("../components/Atoms/AtomButtonV2"), {
      ssr: false,
    }),
    displayName: "Товч",
    icon: "ButtonIcon",
    category: "Action",
    description: "Click үйлдэлтэй товч",
  },
  icon: {
    type: "icon",
    component: dynamic(() => import("../components/Atoms/AtomIconV2"), {
      ssr: false,
    }),
    displayName: "Icon",
    icon: "fa6-regular:star",
    category: "Utility",
    description: "Iconify дээр суурилсан icon renderer",
  },
  line: {
    type: "line",
    component: dynamic(() => import("../components/Atoms/AtomLineV2"), {
      ssr: false,
    }),
    displayName: "Тусгаарлагч шугам",
    icon: "mdi:minus",
    category: "Layout",
    description: "Тусгаарлагч line элемент",
  },
};

export type AtomType = keyof typeof atomRegistry;
export default atomRegistry;
