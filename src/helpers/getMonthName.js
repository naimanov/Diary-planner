export const getMonthName = (monthNumber) => {
  const months = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октярь',
    10: 'Ноябрь',
    11: 'Декабрь',
  };
  return months[monthNumber];
};
