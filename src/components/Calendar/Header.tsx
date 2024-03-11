import { Dayjs } from "dayjs";
import { useContext } from "react";
import CalendarLocaleContext from "./Locale/LocaleContext";
import allLocale from "./Locale";

interface HeaderProps {
  value: Dayjs;
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}

function Header(props: HeaderProps) {
  const { value, prevMonthHandler, nextMonthHandler, todayHandler } = props;
  const context = useContext(CalendarLocaleContext);
  const CalendarLocale = allLocale[context.locale];
  return (
    <div className='zu-calendar-header'>
      <div className='zu-calendar-header-left'>
        <div className='zu-calendar-header-icon' onClick={prevMonthHandler}>
          &lt;
        </div>
        <div className='zu-calendar-header-value'>
          {value.format(CalendarLocale.formatMonth)}
        </div>
        <div className='zu-calendar-header-icon' onClick={nextMonthHandler}>
          &gt;
        </div>
        <button className='zu-calendar-header-btn' onClick={todayHandler}>
          {CalendarLocale.today}
        </button>
      </div>
    </div>
  );
}

export default Header;
