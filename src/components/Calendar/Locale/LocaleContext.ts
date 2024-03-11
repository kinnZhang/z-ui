import { createContext } from "react";

interface CalendarLocaleContextProps {
  locale: string;
}

const CalendarLocaleContext = createContext<CalendarLocaleContextProps>({
  locale: "zh-CN",
});

export default CalendarLocaleContext;
