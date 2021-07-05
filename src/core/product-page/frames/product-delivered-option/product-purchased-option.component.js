import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';

export function ProductDeliveredOptionComponent(props) {
  const { deliveredItem } = props;

  return deliveredItem.map(({ title, value, status }, index) => {
    const { statusColor, statusText } = ConvertStatus(status);
    return (
      <Container key={index}>
        <Line>
          <TextSecondary>{title}:</TextSecondary>
          <TextPrimary tid={value} />
          {status && <StatusText color={statusColor} tid={statusText} />}
        </Line>
      </Container>
    );
  });
}
const ConvertStatus = (status) => {
  switch (status) {
    case 1:
      return {
        statusColor: THEME_COLOR.SECONDARY_DARK,
        statusText: 'Ожидает доставки',
      };
    case 2:
      return {
        statusColor: THEME_COLOR.TEXT.SUCCESS,
        statusText: 'Доставлено',
      };

    default:
      return {
        statusColor: THEME_COLOR.SECONDARY_DARK,
        statusText: 'Нет данных',
      };
  }
};
const StatusText = styled(TextSecondary)`
  ${({ color }) => `color: ${color};`}
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const TextPrimary = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Line = styled.div`
  display: flex;
  gap: ${spacing(1)};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
