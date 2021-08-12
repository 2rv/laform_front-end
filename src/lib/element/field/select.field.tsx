import styled from 'styled-components';

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
    width = 180,
    auto = false,
  } = props;

  return (
    <Container width={width} auto={auto}>
      {titleTid && <Title tid={titleTid} />}
      <InputContainer>
        <Select name={name} value={value} onChange={onChange} onBlur={onBlur}>
          {options.map(({ id, tid, tvalue }) => (
            <option key={id} value={id}>
              {text(tid, tvalue)}
            </option>
          ))}
        </Select>
        <ArrowDownIcon />
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: ${(p: { width: number; auto: boolean }) => {
    if (p.auto) return 'auto';
    return p.width + 'px';
  }};
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
