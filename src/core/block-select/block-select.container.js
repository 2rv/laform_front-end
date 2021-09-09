import { useEffect, useState } from 'react';
import { BlockSelectComponent } from './block-select.component';

export function BlockSelect(props) {
  const {
    name,
    selectName,
    selectOptions,
    intialValues,
    getValues,
    isTooltip,
  } = props;
  const initialValueOrDefault = intialValues || {
    [selectName]: 0,
  };
  const [values, setSelect] = useState(initialValueOrDefault);

  const handleChange = (event) => {
    const copyValues = { ...values };
    copyValues[selectName] = Number(event.target.value);
    setSelect(copyValues);
  };

  useEffect(() => {
    console.log(values);
    getValues(selectOptions[values[selectName]]);
  }, [values]);

  return (
    <BlockSelectComponent
      isTooltip={isTooltip}
      name={name}
      selectName={selectName}
      handleChange={handleChange}
      values={values}
      selectOptions={selectOptions}
    />
  );
}
