import { Dayjs } from "dayjs";
import { useMemo } from "react";
import { getAllDays } from "./utils";
import { CalendarProps } from ".";

interface MonthCalendarProps extends CalendarProps {

}

function MonthCalendar(props: MonthCalendarProps) {
  const { value } = props;
  const weekList: string[] = useMemo(() => {
    return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  }, []);
  const allDays = getAllDays(value)
  const renderDays = (
    days: Array<{
      date: Dayjs;
      currentMonth: boolean;
    }>
  ) => {
    const rows = [];
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        const day = days[i * 7 + j];
        row[j] = (
          <div
            className={
              "zu-calendar-month-body-cell " +
              (day.currentMonth ? "zu-calendar-month-body-cell-current" : "")
            }
          >
            {day.date.date()}
          </div>
        );
      }
      rows.push(row);
    }

    return rows.map((row) => (
      <div className='zu-calendar-month-body-row'>{row}</div>
    ));
  };
  return (
    <div className='zu-calendar-month'>
      <div className='zu-calendar-month-week'>
        {weekList.map((week) => (
          <div className='zu-calendar-month-week-item'>{week}</div>
        ))}
      </div>
      <div className='zu-calendar-month-body'>{renderDays(allDays)}</div>
    </div>
  );
}

export default MonthCalendar;
