export const getMonthNameTasks = (monthNumber) => {
  const months = {
    0: 'Января',
    1: 'Февраля',
    2: 'Марта',
    3: 'Апреля',
    4: 'Мая',
    5: 'Июня',
    6: 'Июля',
    7: 'Августа',
    8: 'Сентября',
    9: 'Октяря',
    10: 'Ноября',
    11: 'Декабря',
  };

  return months[monthNumber];
};
