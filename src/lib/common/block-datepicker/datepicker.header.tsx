import { getMonth, getYear } from 'date-fns';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import styled from 'styled-components';

function range(startAt: number, endAt: number): number[] {
  const size = endAt - startAt + 1;
  return Array.from(new Array(size), (_, index) => index + startAt);
}

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const years = range(2014, getYear(new Date()));

export function DatepickerHeader(props: ReactDatePickerCustomHeaderProps) {
  const {
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  } = props;

  return (
    <Container>
      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {'<'}
      </button>
      <select
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(+value)}
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={months[getMonth(date)]}
        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {'>'}
      </button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-evenly;
`;
