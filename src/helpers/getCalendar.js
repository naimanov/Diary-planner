export const getCalendar = (year, month) => {
  const date = new Date(year, month);
  const calendarDays = [];

  for (let i = date.getDay() - 1; i > 0; i--) {
    const prevDate = new Date(year, month);
    prevDate.setDate(prevDate.getDate() - i);
    calendarDays.push({
      date: prevDate,
      month: 'prevMonth',
      dateNumber: prevDate.getDate(),
    });
  }

  while (String(date.getMonth()) === String(month)) {
    const currentDate = new Date(date);
    calendarDays.push({
      date: currentDate,
      month: 'currentMonth',
      dateNumber: currentDate.getDate(),
    });
    date.setDate(date.getDate() + 1);
  }

  while (calendarDays.length < 42) {
    const nextDate = new Date(date);
    calendarDays.push({
      date: nextDate,
      month: 'nextMonth',
      dateNumber: nextDate.getDate(),
    });
    date.setDate(date.getDate() + 1);
  }

  return calendarDays;
};
