import { Dayjs } from "dayjs";
import { useMemo } from "react";
import { getAllDays } from "./utils";
import { CalendarProps } from ".";
import cs from "classnames";

interface MonthCalendarProps extends CalendarProps {
  crtMonth: Dayjs;
  selectHandler: (date: Dayjs) => void;
}

function MonthCalendar(props: MonthCalendarProps) {
  const { crtMonth, value, selectHandler, dateRender, dateInnerContent } =
    props;
  const weekList: string[] = useMemo(() => {
    return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  }, []);
  const allDays = getAllDays(crtMonth);
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
            key={i * 7 + j}
            onClick={() => selectHandler(day.date)}
          >
            {dateRender ? (
              dateRender(day.date)
            ) : (
              <div className='zu-calendar-month-body-cell-date'>
                <div
                  className={cs(
                    "zu-calendar-month-body-cell-date-value",
                    day.date.format("YYYY-MM-DD") ===
                      value.format("YYYY-MM-DD")
                      ? "zu-calendar-month-body-cell-date-selected"
                      : ""
                  )}
                >
                  {day.date.date()}
                </div>
                <div className='zu-calendar-month-body-cell-date-content'>
                  {dateInnerContent?.(day.date)}
                </div>
              </div>
            )}
          </div>
        );
      }
      rows.push(row);
    }

    return rows.map((row, idx) => (
      <div className='zu-calendar-month-body-row' key={idx}>
        {row}
      </div>
    ));
  };
  return (
    <div className='zu-calendar-month'>
      <div className='zu-calendar-month-week'>
        {weekList.map((week) => (
          <div className='zu-calendar-month-week-item' key={week}>
            {week}
          </div>
        ))}
      </div>
      <div className='zu-calendar-month-body'>{renderDays(allDays)}</div>
    </div>
  );
}

export default MonthCalendar;
