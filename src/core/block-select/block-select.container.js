import { useEffect, useState } from 'react';
import { BlockSelectComponent } from './block-select.component';

export function BlockSelect(props) {
  const {
    getValues,
    selectOptions,
    initialValue,
    pending,
    success,
    error,
    errorMessage,
  } = props;
  if (!selectOptions) return 'не переданы опции селектов';
  if (!initialValue) return 'не переданы значения инициализации';
  if (!getValues) return 'не передана функция принимающая изменения';
  const [values, setSelect] = useState(initialValue);

  const handleChange = (event, codeName) => {
    const copyValues = { ...values };
    copyValues[codeName] = Number(event.target.value);
    setSelect(copyValues);
  };
  useEffect(() => getValues(values), [values]);
  return (
    <BlockSelectComponent
      handleChange={handleChange}
      values={values}
      selectOptions={selectOptions}
    />
  );
}

// const initialValue = () => {
//   return selectOptions.reduce((acc, { codeName }) => {
//     acc[codeName] = 0;
//     return acc;
//   }, {});
// };
// const selectOptions = [
//   {
//     name: 'Размер',
//     codeName: 'size',
//     tooltip: true,
//     options: [
//       { id: 0, tid: `Детский` },
//       { id: 1, tid: `Подростковый` },
//       { id: 2, tid: `Взрослый` },
//     ],
//   },
//   {
//     name: 'Цвет',
//     codeName: 'color',
//     tooltip: false,
//     options: [
//       { id: 0, tid: `Синий` },
//       { id: 1, tid: `Красный` },
//       { id: 2, tid: `Зелёный` },
//     ],
//   },
// ];
