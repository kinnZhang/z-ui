import ZHCN from "./zh-CN";
import ENUS from "./en-US";
import CalendarLocaleType from "./types";

const allLocale: Record<string, CalendarLocaleType> = {
  "zh-CN": ZHCN,
  "en-US": ENUS,
};

export default allLocale;
