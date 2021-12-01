import styled from 'styled-components';
import Select from 'react-select';
import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { ErrorField } from '../error';
import { TextSecondary } from '../text';
import { ReactSelectFieldProps } from './field.type';

const styles = {
  control: (provided: any) => {
    return {
      ...provided,
      height: '46px',
      backgroundColor: THEME_COLOR.GRAY,
      borderRadius: THEME_SIZE.RADIUS.DEFAULT,
      borderColor: 'transparent',
      fontSize: THEME_SIZE.FONT.SMALL,
      boxShadow: undefined,
      '&:hover': {
        borderColor: THEME_COLOR.LIGHT_GRAY,
      },
    };
  },
  menu: (provided: any) => {
    return {
      ...provided,
      borderColor: THEME_COLOR.LIGHT_GRAY,
    };
  },
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? THEME_COLOR.WHITE : 'transparent',
  }),
};

export function ReactSelectField(props: ReactSelectFieldProps) {
  const {
    titleTid,
    placeholderTid,
    noResults,
    value,
    onChange,
    onInputChange,
    error,
    options,
    isClearable = true,
    isDisabled = false,
    components,
  } = props;

  return (
    <Container>
      {titleTid && <Title tid={titleTid} />}
      <Select
        placeholder={text(placeholderTid)}
        styles={styles}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled}
        isClearable={isClearable}
        noOptionsMessage={noResults}
        options={options}
        onInputChange={onInputChange}
        components={components}
      />
      {error && <ErrorField errorTid={error} />}
    </Container>
  );
}
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
  width: 100%;
`;
