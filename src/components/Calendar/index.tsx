import { Dayjs } from "dayjs";
import MonthCalendar from "./MonthCalendar";
import "./index.scss";
import { CSSProperties } from "react";
import Header from "./Header";

export interface CalendarProps {
  value: Dayjs;
  className?: string | string[];
  styles?: CSSProperties;
}

function Calendar(props: CalendarProps) {
  return (
    <div className='zu-calendar'>
      <Header />
      <MonthCalendar {...props} />
    </div>
  );
}

export default Calendar;
