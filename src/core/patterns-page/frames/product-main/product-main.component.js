import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { Divider } from '../../../../lib/element/divider';
import { TextBlock } from '../../../block-text';
import { ProductPriceComponent } from './product-price.component';
import { ProductOptionInfo } from './product-option-info.component';
import { ProductAction } from './product-action.component';
import { patternProductSendPdfToMail } from '../../patterns-page.action';

export function ProductMainComponent(props) {
  const {
    title,
    shortDescription,
    fullDescription,
    price,
    discount,
    discountPrice,
    diliveryPrice,
    optionInfo,
    type,
    filePdf,
  } = props;

  const dispatch = useDispatch();
  const sendPdfToMail = () => {
    dispatch(
      patternProductSendPdfToMail({
        productName: title,
        productPdfUrl: filePdf,
      }),
    );
  };
  const redirectToPdfLink = () => {
    window.open(filePdf, '_blank');
  };

  return (
    <Container>
      <Title tid={title} />
      <ShortDescriptionText tid={shortDescription} />
      <Divider />
      <TextBlock text={fullDescription} />
      <Divider />
      <ProductOptionInfo optionInfo={optionInfo} />
      <Divider />
      <ProductPriceComponent
        discountPrice={discountPrice}
        diliveryPrice={diliveryPrice}
        price={price}
        discount={discount}
      />
      <Divider />
      {type === 1 && <ProductAction sendPdfToMail={sendPdfToMail} redirectToPdfLink={redirectToPdfLink} />}
    </Container>
  );
}

const Title = styled(TitlePrimary)`
  font-size: 1.5;
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
const ShortDescriptionText = styled(TextSecondary)`
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
const Container = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;
