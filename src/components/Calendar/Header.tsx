import { Dayjs } from "dayjs";

interface HeaderProps {
  value: Dayjs;
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}

function Header(props: HeaderProps) {
  const { value, prevMonthHandler, nextMonthHandler, todayHandler } = props;
  return (
    <div className='zu-calendar-header'>
      <div className='zu-calendar-header-left'>
        <div className='zu-calendar-header-icon' onClick={prevMonthHandler}>
          &lt;
        </div>
        <div className='zu-calendar-header-value'>
          {value.format("YYYY 年 MM 月")}
        </div>
        <div className='zu-calendar-header-icon' onClick={nextMonthHandler}>
          &gt;
        </div>
        <button className='zu-calendar-header-btn' onClick={todayHandler}>
          今天
        </button>
      </div>
    </div>
  );
}

export default Header;
