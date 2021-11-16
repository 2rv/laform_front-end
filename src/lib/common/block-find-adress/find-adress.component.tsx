import { BasicField } from 'src/lib/element/field';

export function FindAdressComponent(props: any) {
  const { hints, value, handleChange } = props;
  return (
    <div>
      <BasicField
        list="data"
        titleTid="Адрес"
        value={value}
        onChange={handleChange}
      />
      <datalist id="data">
        {hints.map((item: string, key: number) => (
          <option value={item} key={key} />
        ))}
      </datalist>
    </div>
  );
}
