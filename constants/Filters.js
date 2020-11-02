import filter from "./Filter";

const dataB = [
  {
    title: "Rango De Precios",
    icon: "tagso",
    sizeIcon: 25,
    key: filter.ACTIVE_PRICE,
    route: "Price",
    filter: null,
  },
  {
    title: "Top",
    icon: "null",
    key: filter.ACTIVE_TOP,
    route: "",
    filter: filter.TOP,
  },
  {
    title: "Mas Popular",
    icon: "up",
    key: filter.ACTIVE_POPULAR,
    sizeIcon: 15,
    route: "",
    filter: filter.POPULAR,
  },
  {
    title: "Tipos De Dietas",
    icon: "hearto",
    sizeIcon: 15,
    key: filter.ACTIVE_DIET,
    route: "Diet",
    filter: null,
  },
];

export default dataB;
