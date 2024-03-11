import dayjs, { Dayjs } from "dayjs";
import MonthCalendar from "./MonthCalendar";
import "./index.scss";
import { CSSProperties, ReactNode, useState } from "react";
import Header from "./Header";
import cs from "classnames";
import CalendarLocaleContext from "./Locale/LocaleContext";

export interface CalendarProps {
  value: Dayjs;
  className?: string | string[];
  style?: CSSProperties;
  dateRender?: (date: Dayjs) => ReactNode;
  dateInnerContent?: (date: Dayjs) => ReactNode;
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const { value, className, style, locale, onChange } = props;

  const [crtValue, setCrtValue] = useState(value);
  const [crtMonth, setCrtMonth] = useState(value);

  const classNames = cs("zu-calendar", className);

  const changeValue = (date: Dayjs) => {
    setCrtMonth(date);
    setCrtValue(date);
    onChange?.(date);
  };

  const selectHandler = (date: Dayjs) => {
    changeValue(date);
  };

  const prevMonthHandler = () => {
    setCrtMonth(crtMonth.subtract(1, "month"));
  };

  const nextMonthHandler = () => {
    setCrtMonth(crtMonth.add(1, "month"));
  };

  const todayHandler = () => {
    const today = dayjs(Date.now());
    changeValue(today);
  };

  return (
    <CalendarLocaleContext.Provider
      value={{
        locale: locale || navigator.language,
      }}
    >
      <div className={classNames} style={style}>
        <Header
          value={crtMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCalendar
          {...props}
          crtMonth={crtMonth}
          value={crtValue}
          selectHandler={selectHandler}
        />
      </div>
    </CalendarLocaleContext.Provider>
  );
}

export default Calendar;
