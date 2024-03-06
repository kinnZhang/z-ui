function Header() {
  return (
    <div className='zu-calendar-header'>
      <div className='zu-calendar-header-left'>
        <div className='zu-calendar-header-icon'>&lt;</div>
        <div className='zu-calendar-header-value'>2023 年 11 月</div>
        <div className='zu-calendar-header-icon'>&gt;</div>
        <button className='zu-calendar-header-btn'>今天</button>
      </div>
    </div>
  );
}

export default Header;
