import dynamic from "next/dynamic";

const renderAtomMap = {
  text: dynamic(() => import("../component/Atoms/AtomTextV2"), { ssr: false }),
  image: dynamic(() => import("../component/Atoms/AtomImageV2"), {
    ssr: false,
  }),
  button: dynamic(() => import("../component/Atoms/AtomButtonV2"), {
    ssr: false,
  }),
  // Дараа нь бусад atom нэмнэ: "label", "checkbox", г.м
};

export default renderAtomMap;
