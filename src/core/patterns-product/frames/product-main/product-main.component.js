import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { BlockSelect } from '../../../block-select';
import { TitlePrimary } from '../../../../lib/element/title';
import { Divider } from '../../../../lib/element/divider';
import { TextBlock } from '../../../block-text';
import { CardActions } from '../../../../lib/element/card/card-actions';
import { ProductPriceComponent } from './product-price.component';
import { patternsProductSendPdfToMail } from '../../patterns-product.action';
import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';

export function ProductMainComponent(props) {
  const {
    title,
    shortDescription,
    fullDescription,
    bestSeller,
    price,
    discount,
    like,
    select,
    selectOptions,
    initialValueForSelectOptions,
    setValueSelectOption,
    product,
  } = props;

  const dispatch = useDispatch();

  const productPdfUrl = product?.filePdf?.fileUrl;

  const sendPdfToMail = () => {
    dispatch(patternsProductSendPdfToMail({
      productName: product?.titleRu,
      productPdfUrl,
    }));
  };

  const redirectToPdfLink = () => {
    window.open(productPdfUrl, '_blank');
  };

  return (
    <Container>
      <TitleCase>
        <Title tid={title} />
        {bestSeller && <Modifier alt tid={'Хит!'} />}
        {discount && <Modifier tid={'Скидка!'} />}
      </TitleCase>
      <ShortDescriptionText tid={shortDescription} />
      <Divider />
      <TextBlock text={fullDescription} />
      <Divider />
      <BlockSelect
        selectOptions={selectOptions}
        initialValue={initialValueForSelectOptions}
        getValues={setValueSelectOption}
      />
      <Divider />
      <FooterCase>
        <ProductPriceComponent price={price} discount={discount} />
        <CardActions type={2} like={like} select={select} />
      </FooterCase>
      <DownloadPdfContainer>
        <SendEmailButton tid="Отправить на Email" onClick={sendPdfToMail} />
        <DownloadButton tid="Скачать" onClick={redirectToPdfLink} />
      </DownloadPdfContainer>
    </Container>
  );
}
const ShortDescriptionText = styled(TextSecondary)`
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
const FooterCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;

const TitleCase = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
const Modifier = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  color: ${({ alt }) => (alt ? THEME_COLOR.PRIMARY_DARK : THEME_COLOR.PRIMARY)};
`;
const Title = styled(TitlePrimary)`
  font-size: 1.5;
`;
const Container = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;

const DownloadPdfContainer = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;

const SendEmailButton = styled(ButtonSecondary)`
  width: 200px;
`;

const DownloadButton = styled(ButtonPrimary)`
  width: 120px;
`;
