import dynamic from "next/dynamic";
// import { AtomRegistryItem } from "./atom.registry.types";

const atomRegistry = {
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
    category: "Basic",
    description: "Image буюу зураг үзүүлнэ",
  },
  button: {
    type: "button",
    component: dynamic(() => import("../components/Atoms/AtomButtonV2"), {
      ssr: false,
    }),
    displayName: "Товч",
    icon: "ButtonIcon",
    category: "Basic",
    description: "Click үйлдэлтэй товч",
  },
  icon: {
    type: "icon",
    component: dynamic(() => import("../components/Atoms/AtomIconV2"), {
      ssr: false,
    }),
    displayName: "Icon",
    icon: "fa6-regular:star",
    category: "Basic",
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
    category: "Basic",
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
  inputantd: {
    type: "input",
    component: dynamic(() => import("../components/Atoms/AtomInputAntdV2"), {
      ssr: false,
    }),
    displayName: "Input Antd",
    icon: "mdi:text-box-outline",
    category: "Form",
    description: "Text input field with Antd",
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
  textareaantd: {
    type: "textarea",
    component: dynamic(() => import("../components/Atoms/AtomTextareaAntdV2"), {
      ssr: false,
    }),
    displayName: "Textarea Antd",
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
  selectantd: {
    type: "select",
    component: dynamic(() => import("../components/Atoms/AtomSelectAntdV2"), {
      ssr: false,
    }),
    displayName: "Select Antd",
    icon: "mdi:form-dropdown",
    category: "Form",
    description: "Dropdown сонголтын талбар - Antd",
  },
  checkbox: {
    type: "checkbox",
    component: dynamic(() => import("../components/Atoms/AtomCheckBoxV2"), {
      ssr: false,
    }),
    displayName: "Checkbox",
    icon: "mdi:checkbox-marked-outline",
    category: "Form",
    description: "Олон сонголт бүхий checkbox жагсаалт",
  },
  checkboxantd: {
    type: "checkbox",
    component: dynamic(() => import("../components/Atoms/AtomCheckboxAntdV2"), {
      ssr: false,
    }),
    displayName: "Checkbox Antd",
    icon: "mdi:checkbox-marked-outline",
    category: "Form",
    description: "Олон сонголт бүхий checkbox жагсаалт",
  },

  radio: {
    type: "radio",
    component: dynamic(() => import("../components/Atoms/AtomRadioV2"), {
      ssr: false,
    }),
    displayName: "Radio",
    icon: "mdi:radiobox-marked",
    category: "Form",
    description: "Нэг сонголт бүхий radio жагсаалт",
  },
  radioantd: {
    type: "radio",
    component: dynamic(() => import("../components/Atoms/AtomRadioAntdV2"), {
      ssr: false,
    }),
    displayName: "Radio Antd",
    icon: "mdi:radiobox-marked",
    category: "Form",
    description: "Нэг сонголт бүхий radio жагсаалт",
  },
} as const;

export type AtomType = keyof typeof atomRegistry;
export type FormAtomType = keyof {
  [K in keyof typeof atomRegistry as (typeof atomRegistry)[K]["category"] extends "Form"
    ? K
    : never]: any;
};
export default atomRegistry;

// const dddd: AtomType = "image";
// const dddrerw: FormAtomType = "select";
// console.log("dfdf", dddd);
