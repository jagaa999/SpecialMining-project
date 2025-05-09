// Mongolian [mn]
import dayjs, { ConfigType } from "dayjs";
import type { OpUnitType, QUnitType } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const mongolianLocale: any = {
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
    s: "хэдэн секундийн",
    m: "1 минутын",
    mm: "%d минутын",
    h: "1 цагийн",
    hh: "%d цагийн",
    d: "1 өдрийн",
    dd: "%d өдрийн",
    M: "1 сарын",
    MM: "%d сарын",
    y: "1 жилийн",
    yy: "%d жилийн",
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "D MMMM YYYY",
    LLL: "YYYY оны MMMM-ын D  HH:mm",
    LLLL: "YYYY оны MMMM-ын D, dddd HH:mm",
  },
  ordinal: (n: number): string => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`;
  },
};

dayjs.locale(mongolianLocale, undefined, true);
dayjs.locale("mn");

export default dayjs;

/**
 * Жилийн болон сарын форматаар буцаана. Жишээ нь: 2024.04
 */
export const yearMonth = (myDate: ConfigType): string => {
  return dayjs(myDate).format("YYYY.MM");
};

/**
 * `fromNow` функц: өгсөн огнооноос одоогийн мөч хүртэл хугацааг харуулна
 */
export const fromNow = (myDate: ConfigType): string => {
  return dayjs(myDate).fromNow();
};

/**
 * `formatDate` функц: өөрийн форматаар огноо форматлана
 */
export const formatDate = (
  myDate: ConfigType,
  format = "YYYY-MM-DD"
): string => {
  return dayjs(myDate).format(format);
};

/**
 * `diffIn` функц: хоёр огнооны ялгааг буцаана (өдөр, сар гэх мэт)
 */
export const diffIn = (
  date1: ConfigType,
  date2: ConfigType,
  unit: QUnitType | OpUnitType = "day"
): number => {
  return dayjs(date1).diff(dayjs(date2), unit);
};
