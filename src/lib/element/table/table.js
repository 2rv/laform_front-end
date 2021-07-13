import styled from 'styled-components';

import { ButtonBasic } from 'src/lib/element/button';

import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';

export const Table = styled.table`
  width: 100%;
  margin-bottom: ${spacing(5)};
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: ${({ columns }) => columns ?? 'none'};
  align-items: center;
  grid-gap: ${spacing(2)};
  border-bottom: 3px solid ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: 1.5px;
`;

export const TableHeader = styled.th`
  padding-bottom: ${spacing(2)};
  span {
    font-size: ${THEME_SIZE.FONT.DEFAULT};
    color: ${THEME_COLOR.SECONDARY_DARK};
  }

  &:not(:last-child) {
    text-align: start;
  }

  &:last-child {
    text-align: end;
  }
`;

export const TableData = styled.td`
  padding: ${spacing(2)} 0;
  vertical-align: middle;
  line-height: 24px;

  &:last-child {
    text-align: end;
  }

  ${(props) =>
    props.verticalMiddle &&
    `
    display: flex;
    align-items: center;
  `}
`;

export const TableImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 5px;
  margin-right: ${spacing(3)};
`;

export const TableActionButton = styled(ButtonBasic)`
  width: 45px;
  height: 45px;
  padding: ${spacing(2.4)};
`;
