// src/config/utils/dayjs.ts

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { ConfigType } from "dayjs";

// Plugin-уудыг идэвхжүүлж байна
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const locale = {
  name: "mn",
  weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
  weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
  weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
  months:
    "1-р сар_2-р сар_3-р сар_4-р сар_5-р сар_6-р сар_7-р сар_8-р сар_9-р сар_10-р сар_11-р сар_12-р сар".split(
      "_"
    ),
  monthsShort:
    "1-р сар_2-р сар_3-р сар_4-р сар_5-р сар_6-р сар_7-р сар_8-р сар_9-р сар_10-р сар_11-р сар_12-р сар".split(
      "_"
    ),
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: "%s дотор",
    past: "%s өмнө",
    s: "хэдэн секунд",
    m: "1 минут",
    mm: "%d минут",
    h: "1 цаг",
    hh: "%d цаг",
    d: "1 өдөр",
    dd: "%d өдөр",
    M: "1 сар",
    MM: "%d сар",
    y: "1 жил",
    yy: "%d жил",
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "D MMMM YYYY",
    LLL: "YYYY оны MMMM-ын D HH:mm",
    LLLL: "YYYY оны MMMM-ын D, dddd HH:mm",
  },
  ordinal: (n: number): string => `${n}-р`,
};

dayjs.locale(locale, undefined, true);
dayjs.locale("mn");

export default dayjs;

// Utility function (type-safe)
export const yearMonth = (myDate: ConfigType): string => {
  return dayjs(myDate).format("YYYY.MM");
};
