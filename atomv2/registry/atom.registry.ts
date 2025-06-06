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
  label: {
    type: "label",
    component: dynamic(() => import("../components/Atoms/AtomLabelV2"), {
      ssr: false,
    }),
    displayName: "Шошго",
    icon: "mdi:label-outline",
    category: "Form",
    description: "Input-ийн шошго",
  },
  input: {
    type: "input",
    component: dynamic(() => import("../components/Atoms/AtomInputV2"), {
      ssr: false,
    }),
    displayName: "Input",
    icon: "mdi:text-box-outline",
    category: "Form",
    description: "Text input field",
  },
  textarea: {
    type: "textarea",
    component: dynamic(() => import("../components/Atoms/AtomTextareaV2"), {
      ssr: false,
    }),
    displayName: "Textarea",
    icon: "mdi:note-text-outline",
    category: "Form",
    description: "Олон мөр текст оруулах талбар",
  },
  select: {
    type: "select",
    component: dynamic(() => import("../components/Atoms/AtomSelectV2"), {
      ssr: false,
    }),
    displayName: "Сонголт",
    icon: "mdi:form-dropdown",
    category: "Form",
    description: "Dropdown сонголтын талбар",
  },
};

export type AtomType = keyof typeof atomRegistry;
export default atomRegistry;
