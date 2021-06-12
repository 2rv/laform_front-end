import styled from 'styled-components';

import { ReactComponent as ArrowDown } from '../../../asset/svg/arrow-down-solid.svg';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { TextSecondary } from '../text';
import { IndentLayout } from '../layout';

import { SelectPropsType } from './field.type';

export function FieldSelect(props: SelectPropsType) {
  const { titleTid, name, value, options, onChange } = props;

  return (
    <IndentLayout type="text_small">
      {titleTid && <Title tid={titleTid} />}
      <InputContainer>
        <Select name={name} value={value} onChange={onChange}>
          {options.map(({ id, tid, tvalue }) => (
            <option key={id} value={id}>
              {text(tid, tvalue)}
            </option>
          ))}
        </Select>
        <ArrowDownIcon />
      </InputContainer>
    </IndentLayout>
  );
}

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: 100%;
  padding: ${spacing(3)};
  background: ${THEME_COLOR.BACKGROUND.GRAY};
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
