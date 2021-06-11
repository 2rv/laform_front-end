import styled from 'styled-components';

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
      <Select name={name} value={value} onChange={onChange}>
        {options.map(({ id, tid, tvalue }) => (
          <option key={id} value={id}>
            {text(tid, tvalue)}
          </option>
        ))}
      </Select>
    </IndentLayout>
  );
}

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const Select = styled.select`
  padding: ${spacing(3)};
  background: ${THEME_COLOR.BACKGROUND.GRAY};
  border: 0;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.SECONDARY_DARK};

  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='8' height='7' viewBox='0 0 8 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535899 2C0.150999 1.33333 0.632124 0.499999 1.40192 0.499999L6.59808 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z' fill='%23808080'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 21px;
`;
