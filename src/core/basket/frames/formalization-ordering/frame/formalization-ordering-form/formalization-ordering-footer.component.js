import styled from 'styled-components';

import { TextSecondary } from 'src/lib/element/text';
import { ButtonPrimary, ButtonSecondary, ButtonBasic } from 'src/lib/element/button';

import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function FormalizationOrderingFooterComponent() {
  return (
    <FooterContainer>
      <div>
        <FooterInfoContainer>
          <FooterInfoContent>
            <TextPrimary tid="BASKET.FORM.FOOTER.DISCOUNT_PRICE" />
            <div>
              <TextDark>299</TextDark>&nbsp;
              <TextPrimary tid="OTHER.VALUTE" />.&nbsp;
              <TextDiscount>-15%</TextDiscount>
            </div>
          </FooterInfoContent>
          <FooterInfoContent>
            <TextPrimary tid="BASKET.FORM.FOOTER.SHIPPING_PRICE" />
            <div>
              <TextDark>299</TextDark>&nbsp;
              <TextPrimary tid="OTHER.VALUTE" />.
            </div>
          </FooterInfoContent>
          <VerticalLine />
          <FooterInfoContent>
            <TextPrimary tid="BASKET.FORM.FOOTER.TOTAL_ORDER_PRICE" />
            <div>
              <TextDark fontSize={THEME_SIZE.FONT.LARGE}>3,200</TextDark>&nbsp;
              <TextPrimary tid="OTHER.VALUTE" />.
            </div>
          </FooterInfoContent>
        </FooterInfoContainer>
        <ButtonsContent>
          <ButtonPrimary tid="BASKET.FORM.FOOTER.CONFIRM_ORDER" type="submit" />
        </ButtonsContent>
      </div>
      <div>
        <InfoText tid="BASKET.FORM.FOOTER.INFO" />
        <ButtonsContent>
          <ButtonSecondary tid="BASKET.FORM.FOOTER.SIGN_UP" type="submit" />
          <ButtonBasic tid="BASKET.FORM.FOOTER.SIGN_IN" type="submit" />
        </ButtonsContent>
      </div>
    </FooterContainer>
  );
}

const TextPrimary = styled(TextSecondary)`
  line-height: 24px;
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
`;

const TextDark = styled(TextSecondary)`
  line-height: 24px;
  font-size: ${(props) => props.fontSize ?? THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;

const TextDiscount = styled(TextSecondary)`
  line-height: 24px;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;

const InfoText = styled(TextSecondary)`
  line-height: 24px;
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(3)};
`;

const FooterInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FooterInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-right: ${spacing(4)};
  }
`;

const ButtonsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: ${spacing(2)};
`;

const VerticalLine = styled.hr`
  margin: 0 ${spacing(5)};
  width: 5px;
  height: 51px;
  border: none;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;
