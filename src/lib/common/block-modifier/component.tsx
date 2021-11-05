import { FieldLayout } from '../../element/layout';
import { ModifierComponentProps } from './type';
import { BasicField, FieldSelect } from 'src/lib/element/field';

export function ModifierComponent(props: ModifierComponentProps) {
  const {
    titleTid,
    placeholderTid,
    colorTitleTid,
    name,
    colorName,
    values,
    error,
    handleChange,
    handleBlur,
    colors,
  } = props;

  return (
    <FieldLayout type="double" adaptive>
      <BasicField
        titleTid={titleTid}
        placeholderTid={placeholderTid}
        name={name}
        value={values[name]}
        error={error}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FieldSelect
        titleTid={colorTitleTid}
        name={colorName}
        value={values[colorName]}
        options={colors}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FieldLayout>
  );
}
