import { Dayjs } from "dayjs";

export function getAllDays(date: Dayjs) {
  const startDate = date.startOf("month");
  const day = startDate.day();

  const dateInfo: Array<{
    date: Dayjs;
    currentMonth: boolean;
  }> = new Array(6 * 7);

  for (let i = 0; i < day; i++) {
    dateInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }

  for (let i = day; i < dateInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");
    dateInfo[i] = {
      date: startDate.add(i - day, "day"),
      currentMonth: calcDate.month() === date.month(),
    };
  }

  return dateInfo;
}
