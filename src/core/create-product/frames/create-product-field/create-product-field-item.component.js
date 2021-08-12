import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { LinkPrimary } from 'src/lib/element/link';
import { BasicField, FieldSelect } from 'src/lib/element/field';

export function CreateProductFieldItemComponent(props) {
  const {
    type,
    title,
    options,
    name,
    fullWidth,
    value,
    handleChange,
    handleBlur,
    errors,
  } = props;
  const getFieldError = (name) => {
    return errors[name] && errors[name];
  };

  if (type === 'select') {
    return (
      <Container fw={fullWidth}>
        <FieldSelect
          titleTid={title}
          name={name}
          options={options}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Container>
    );
  }
  if (type === 'input') {
    return (
      <Container fw={fullWidth}>
        <BasicField
          titleTid={title}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(name)}
        />
      </Container>
    );
  }
}
const Container = styled.div`
  ${({ fw }) => fw && `grid-column: 1 / -1;`};
`;
