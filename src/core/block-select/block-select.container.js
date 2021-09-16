import { useEffect, useState } from 'react';
import { BlockSelectComponent } from './block-select.component';

export function BlockSelect(props) {
  const { name, selectOptions, handleChange, isTooltip } = props;

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value !== 0) {
      handleChange(selectOptions.find((i) => i.id === value));
    }
  }, [value]);

  const onChange = (event) => setValue(event.target.value);

  return (
    <BlockSelectComponent
      isTooltip={isTooltip}
      name={name}
      onChange={onChange}
      value={value}
      selectOptions={selectOptions}
    />
  );
}
