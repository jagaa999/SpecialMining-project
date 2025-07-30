export interface FacetConfig {
  title: string;
  icon?: string;
  className?: string;
  isShow?: boolean;
}

const facetConfigurations: Record<string, FacetConfig> = {
  ref_newstype: {
    title: "Төрөл",
    icon: "fas fa-list", // Жишээ: FontAwesome icon
    className: "",
    isShow: true,
  },
  ref_newssource: {
    title: "Эх сурвалж",
    icon: "fas fa-newspaper",
    className: "",
    isShow: true,
  },
  ref_carfirm: {
    title: "Машины фирм",
    icon: "fas fa-car",
    className: "",
    isShow: true,
  },
  ref_carmark: {
    title: "Машины марк",
    icon: "fas fa-tag",
    className: "",
    isShow: true,
  },
  ref_brand: {
    title: "Брэнд",
    icon: "fas fa-tag",
    className: "",
    isShow: true,
  },
  ref_productcategory: {
    title: "Категори",
    icon: "fas fa-tag",
    className: "",
    isShow: true,
  },
  look_company: {
    title: "Компани",
    icon: "fas fa-tag",
    className: "",
    isShow: true,
  },
  look_user: {
    title: "Хэрэглэгч",
    icon: "fas fa-tag",
    className: "",
    isShow: true,
  },
  isspecial: {
    title: "Онцгой эсэх",
    icon: "fas fa-tag",
    className: "",
    isShow: true,
  },
  inactive: {
    title: "Идэвхтэй эсэх",
    icon: "fas fa-tag",
    className: "",
    isShow: true,
  },
};

export const getFacetConfig = (name: string): FacetConfig => {
  return (
    facetConfigurations[name] || {
      title: name,
      icon: "",
      className: "",
      isShow: true,
    }
  );
};
