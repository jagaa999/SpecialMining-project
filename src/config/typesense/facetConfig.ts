export interface FacetConfig {
  title: string;
  icon?: string;
  className?: string;
  isShow?: boolean;
  sortAscTitle?: string; // ✅ Sort asc title
  sortDescTitle?: string; // ✅ Sort desc title
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

  // ✅ Sort-тай талбарууд
  createddate: {
    title: "Үүссэн огноо",
    icon: "fas fa-calendar",
    isShow: true,
    sortAscTitle: "Хуучин эхэнд",
    sortDescTitle: "Шинэ эхэнд",
  },
  modifieddate: {
    title: "Засварласан огноо",
    icon: "fas fa-calendar",
    isShow: true,
    sortAscTitle: "Өмнө шинэчилсэн",
    sortDescTitle: "Сүүлд шинэчилсэн",
  },
  title: {
    title: "Гарчиг",
    icon: "fas fa-heading",
    isShow: true,
    sortAscTitle: "Гарчиг A-Z",
    sortDescTitle: "Гарчиг Z-A",
  },
  price: {
    title: "Үнэ",
    icon: "fas fa-dollar-sign",
    isShow: true,
    sortAscTitle: "Хямд эхэнд",
    sortDescTitle: "Үнэтэй эхэнд",
  },
  views: {
    title: "Үзсэн тоо",
    icon: "fas fa-eye",
    isShow: true,
    sortAscTitle: "Цөөн үзсэн",
    sortDescTitle: "Их үзсэн",
  },
  rating: {
    title: "Үнэлгээ",
    icon: "fas fa-star-half-alt",
    isShow: true,
    sortAscTitle: "Бага үнэлгээ",
    sortDescTitle: "Өндөр үнэлгээ",
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
