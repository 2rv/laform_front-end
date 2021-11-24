import styled from 'styled-components';
import AsyncSelect from 'react-select/async';
import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { ErrorField } from '../error';
import { TextSecondary } from '../text';

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
    backgroundColor: state.isSelected ? THEME_COLOR.SECONDARY : 'transparent',
  }),
};
export function AsyncReactSelect(props: any) {
  const {
    titleTid,
    placeholderTid,
    noResults,
    value,
    onChange,
    error,
    loadOptions,
    cacheOptions = true,
  } = props;
  return (
    <Container>
      {titleTid && <Title tid={titleTid} />}
      <AsyncSelect
        cacheOptions={cacheOptions}
        styles={styles}
        value={value}
        onChange={onChange}
        noOptionsMessage={noResults}
        placeholder={text(placeholderTid)}
        loadOptions={loadOptions}
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
