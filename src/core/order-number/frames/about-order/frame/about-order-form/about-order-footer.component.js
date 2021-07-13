import styled from 'styled-components';

import { TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { FieldSelect } from 'src/lib/element/field';
import { ButtonPrimary, ButtonSecondary, ButtonBasic } from 'src/lib/element/button';

import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function AboutOrderFooterComponent({ values, handleChange, fieldOrderStatus }) {
  return (
    <FooterContainer>
      <div>
        <FooterInfoContainer>
          <FooterInfoContent>
            <TextPrimary tid="ORDER_NUMBER.FORM.FOOTER.DISCOUNT_PRICE" />
            <div>
              <TextDark>299</TextDark>&nbsp;
              <TextPrimary tid="OTHER.VALUTE" />.&nbsp;
              <TextDiscount>-15%</TextDiscount>
            </div>
          </FooterInfoContent>
          <FooterInfoContent>
            <TextPrimary tid="ORDER_NUMBER.FORM.FOOTER.SHIPPING_PRICE" />
            <div>
              <TextDark>299</TextDark>&nbsp;
              <TextPrimary tid="OTHER.VALUTE" />.
            </div>
          </FooterInfoContent>
          <VerticalLine />
          <FooterInfoContent>
            <TextPrimary tid="ORDER_NUMBER.FORM.FOOTER.TOTAL_ORDER_PRICE" />
            <div>
              <TextDark fontSize={THEME_SIZE.FONT.LARGE}>3,200</TextDark>&nbsp;
              <TextPrimary tid="OTHER.VALUTE" />.
            </div>
          </FooterInfoContent>
        </FooterInfoContainer>
      </div>
      <div>
        <AboutOrderText tid="ORDER_NUMBER.FORM.TITLE" />
        <FieldContainer>
          <FieldSelect
            titleTid="ORDER_NUMBER.FORM.FOOTER.ORDER_STATUS"
            options={[{ id: 1, tid: 'ORDER_NUMBER.FORM.FOOTER.DELIVERED' }]}
            name={fieldOrderStatus}
            value={values[fieldOrderStatus]}
            onChange={handleChange}
          />
          <SaveDataButton>
            <SaveDataText tid="ORDER_NUMBER.FORM.FOOTER.SAVE_DATA" />
          </SaveDataButton>
        </FieldContainer>
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

const SaveDataText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.TEXT.WHITE};
`;

const AboutOrderText = styled(TitlePrimary)`
  display: block;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  margin: ${spacing(3)} 0;
`;

const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
`;

const SaveDataButton = styled(ButtonSecondary)`
  height: 45px;
`;

const FooterContainer = styled.div`
  display: grid;
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

const VerticalLine = styled.hr`
  margin: 0 ${spacing(5)};
  width: 5px;
  height: 51px;
  border: none;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;
