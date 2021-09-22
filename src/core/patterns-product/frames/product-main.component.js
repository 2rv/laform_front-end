import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../lib/theme';
import { TextSecondary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
import { CardActions } from '../../../lib/element/card/card-actions';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import { ProductPriceComponent } from './product-price.component';
import { BlockSelect } from '../../block-select';
import { TextBlock } from '../../block-text';
import { patternsProductSendPdfToMail } from '../patterns-product.action';

export function ProductMainComponent(props) {
  const {
    id,
    type,
    modifier,
    discount,
    name,
    description,
    categories,
    images,
    sizes,
    materials,
    price,
    complexity,
    cart,
    filePdf,
    addToCart,
  } = props;

  const dispatch = useDispatch();
  const [size, setSize] = useState(
    sizes?.length > 0 ? sizes[0] : { id: 0, tid: 0, price: 0, vendorCode: 0 },
  );

  //   const productPdfUrl = filePdf?.fileUrl;
  //   const sendPdfToMail = () => {
  //     dispatch(
  //       patternsProductSendPdfToMail({
  //         productName: name,
  //         productPdfUrl,
  //       }),
  //     );
  //   };
  //   const redirectToPdfLink = () => {
  //     window.open(productPdfUrl, '_blank');
  //   };
  {
    /* <DownloadPdfContainer>
        <SendEmailButton tid="PATTERNS.SEND_TO_EMAIL" onClick={sendPdfToMail} />
        <DownloadButton tid="PATTERNS.DOWNLOAD" onClick={redirectToPdfLink} />
      </DownloadPdfContainer> */
  }

  const handleAddToCart = (_, __, inCart) => {
    addToCart(inCart, { id, type, size: size.id });
  };

  return (
    <Container>
      <HeaderCase>
        <Title tid={name} />
        {Boolean(modifier) && <Modifier alt tid={modifier} />}
        {discount !== 0 && <Modifier tid="PRODUCT_PRICE.STOCK" />}
      </HeaderCase>
      <div>
        {categories?.map((category, key) => (
          <React.Fragment key={key}>
            <LigthText
              tid={categories.length > 1 ? category + ',' : category}
            />
            &nbsp;
          </React.Fragment>
        ))}
      </div>
      <Divider />
      <TextBlock text={description} />
      <Divider />
      <LineCase>
        <Text tid="PATTERNS.CREATE.FORM.COMPLEXITY" />
        <Complexity>
          {[1, 2, 3, 4, 5].map((rate, index) => (
            <ComplexityDot key={index} act={rate <= complexity ? 1 : 0} />
          ))}
        </Complexity>
      </LineCase>
      {Boolean(sizes?.length > 0) && (
        <>
          <Divider />
          <BlockSelect
            name="PRODUCT_PRICE.SIZE"
            selectOptions={sizes}
            handleChange={setSize}
            isTooltip
          />
        </>
      )}
      <Divider />
      <FooterCase>
        <ProductPriceComponent
          price={price ? price : size?.price}
          discount={discount}
        />
        <CardActions cart={cart} onSetCart={handleAddToCart} />
      </FooterCase>
    </Container>
  );
}
const Text = styled(TextSecondary)`
  min-width: max-content;
`;
const Complexity = styled.div`
  display: flex;
  gap: ${spacing(2)};
  height: 46px;
  width: 100%;
  align-items: center;
  padding: ${spacing(3)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
`;
const ComplexityDot = styled.div`
  width: 16px;
  min-width: 16px;
  height: 16px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${(p) =>
    p.act ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
`;
const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const FooterCase = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;
const HeaderCase = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
const Modifier = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  ::first-letter {
    text-transform: uppercase;
  }
  color: ${({ alt }) => (alt ? THEME_COLOR.PRIMARY_DARK : THEME_COLOR.PRIMARY)};
`;
const Title = styled(TitlePrimary)`
  font-size: 1.5;
  ::first-letter {
    text-transform: uppercase;
  }
`;
const LigthText = styled(TextSecondary)`
  ::first-letter {
    text-transform: uppercase;
  }
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
