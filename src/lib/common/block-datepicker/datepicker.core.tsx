import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.min.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { DatepickerHeader } from './datepicker.header';
import { DatepickerInput } from './datepicker.input';
import { DatepickerContainer } from './datepicker.container';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

const minDate = new Date('2014/00/01');
const maxDate = new Date();

export function DatepickerCore() {
  const [startDate, setStartDate] = useState(new Date('2021/01/01'));
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    registerLocale('ru', ru);
  }, []);

  return (
    <Container>
      <DatePicker
        customInput={<DatepickerInput />}
        renderCustomHeader={DatepickerHeader}
        calendarContainer={DatepickerContainer}
        onChange={(date: any) => setStartDate(date)}
        locale="ru"
        dateFormat="dd-MM-yyyy"
        withPortal
        selectsStart
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        minDate={minDate}
        maxDate={maxDate}
      />
      <DatePicker
        customInput={<DatepickerInput />}
        renderCustomHeader={DatepickerHeader}
        calendarContainer={DatepickerContainer}
        onChange={(date: any) => setEndDate(date)}
        locale="ru"
        dateFormat="dd-MM-yyyy"
        withPortal
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        selected={endDate}
        minDate={startDate}
        maxDate={maxDate}
      />
    </Container>
  );
}

const Container = styled.div`
  gap: ${spacing(3)};
  width: 100%;

  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  && > div {
    display: contents;
  }
  /* .react-datepicker {}  это задний фон - контейнер квадратиков */
  .react-datepicker__header {
    border: none;
    display: grid;
    gap: ${spacing(2)};
    background-color: ${THEME_COLOR.WHITE};
  }

  .react-datepicker__day-names {
    padding-top: ${spacing(2)};
    border-top: 2px solid ${THEME_COLOR.GRAY};
  }

  .react-datepicker__day-name {
    line-height: 1;
  }

  .react-datepicker__day {
    padding: ${spacing(1)};
    border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
    color: ${THEME_COLOR.DARK_GRAY};
    background-color: ${THEME_COLOR.GRAY};
    border: 1px solid transparent;
  }
  .react-datepicker__day--in-selecting-range {
    background-color: ${THEME_COLOR.TEXT.SUCCESS};
    color: ${THEME_COLOR.WHITE};
  }
  .react-datepicker__day:hover {
    background-color: ${THEME_COLOR.TEXT.INFO};
  }
`;
