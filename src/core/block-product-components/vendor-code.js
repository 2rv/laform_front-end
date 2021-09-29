import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { TextPrimary } from '../../lib/element/text';

export const ProductVendorCode = (props) => {
  const { vendorCode } = props;
  if (!vendorCode) return null;
  return (
    <Container>
      <TextPrimary tid="OTHER.VENDOR_CODE" />
      <Text>{vendorCode}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(1)};
`;

const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
