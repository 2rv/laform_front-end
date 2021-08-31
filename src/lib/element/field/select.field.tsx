import styled, { css } from 'styled-components';

import { ReactComponent as ArrowDown } from '../../../asset/svg/arrow-down-solid.svg';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { TextSecondary } from '../text';

import { SelectPropsType } from './field.type';

export function FieldSelect(props: SelectPropsType) {
  const {
    titleTid,
    name,
    value,
    options,
    onChange,
    onBlur,
    width,
    disabled,
    adaptive,
    textValue,
  } = props;

  return (
    <Container width={width} adaptive={adaptive}>
      {titleTid && <Title tid={titleTid} />}
      <InputContainer>
        <Select
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          {options.map(({ id, tid, tvalue, hidden }) => (
            <option key={id} value={textValue ? tid : id} hidden={hidden}>
              {text(tid, tvalue)}
            </option>
          ))}
        </Select>
        <ArrowDownIcon />
      </InputContainer>
    </Container>
  );
}

const Container = styled.div<any>`
  display: grid;
  width: ${(p) => {
    if (p.width) return p.width + 'px';
    return '100%';
  }};
  ${(p) => {
    return (
      p.adaptive &&
      css`
        @media screen and (max-width: 720px) {
          width: 100%;
        }
      `
    );
  }}
  gap: ${spacing(1)};
`;

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: inherit;
  height: 46px;
`;

const Select = styled.select`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing(3)};
  background: ${THEME_COLOR.GRAY};
  border: 0;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.SECONDARY_DARK};
  appearance: none;
`;

const ArrowDownIcon = styled(ArrowDown)`
  position: absolute;
  right: ${spacing(3)};
`;
