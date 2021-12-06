import { FieldSelect } from 'src/lib/element/field';

export function TimeSelect(props) {
  const { onChange, value, options } = props;

  return (
    <FieldSelect
      onChange={onChange}
      value={value}
      tid="Период"
      options={options}
    />
  );
}
