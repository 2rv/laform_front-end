import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { ReactComponent as EditIcon } from '../../asset/svg/change-icon.svg';
import { ReactComponent as DeleteIcon } from '../../asset/svg/cancel-delete-icon.svg';
import { TableList, BLOCK_TABLE_LIST_ROW_TYPE } from '../block-table-list';
import { FormalizationOrderingContainer } from './frames';
import { IconButton } from '../../lib/element/button';
import { TextSecondary } from '../../lib/element/text';

import { Popup } from '../../lib/element/popup';
import { EditProductComponent } from '../../lib/element/edit';
import { BASKET_DATA_KEY } from './basket.type';

import {
  updateProduct,
  deleteProduct,
  CHANGE_PARAMS_PRODUCTS,
} from '../../lib/common/cart';

export function BasketComponent(props) {
  const {
    isEmpty,
    discount,
    token,
    cartPriceWithoutShipping,
    shippingPrice,
    cartPrice,

    isPending,
    isError,
    isSuccess,
    errorMessage,
    isUserInfoLoadPending,
    pageLoading,
    initialValue,
    validation,
    onSubmitForm,
    fieldName,
    headersGoods,
    headersMaster,
    headersPatterns,
    sewingProduct,
    patternProduct,
    masterClass,
    promoCodeInitialValue,
    onSubmitPromoCode,
    validationPromoCode,
    basketData,

    isPromoCodePending,
    isPromoCodeError,
    isPromoCodeSuccess,
    promoCodeErrorMessage,
  } = props;
  const dispatch = useDispatch();

  return (
    <SectionLayout>
      <Title tid="BASKET.TITLE" />

      {isEmpty ? (
        <TextSecondary tid="BASKET.CART_IS_EMPTY" />
      ) : (
        <>
          {basketData && basketData[BASKET_DATA_KEY.SEWING_PRODUCT]?.length ? (
            <TableList
              incrementCount={(id, quantity) =>
                updateProduct(id)({
                  [CHANGE_PARAMS_PRODUCTS.QUANTITY]: quantity + 1,
                })
              }
              decrementCount={(id, quantity) =>
                quantity >= 2
                  ? updateProduct(id)({
                      [CHANGE_PARAMS_PRODUCTS.QUANTITY]: quantity - 1,
                    })
                  : console.log('UNABLE TO DECREMENT')
              }
              headers={headersGoods}
              items={basketData[BASKET_DATA_KEY.SEWING_PRODUCT]}
              count={true}
              type={BLOCK_TABLE_LIST_ROW_TYPE.SEWING_PRODUCT}
            >
              {(id, data) => {
                return (
                  <>
                    <Popup
                      content={(setVisible) => (
                        <EditProductComponent
                          setVisible={setVisible}
                          type="SEWING"
                          data={data}
                          saveAction={updateProduct(id)}
                        />
                      )}
                      children={
                        <Button>
                          <EditIcon />
                        </Button>
                      }
                    />
                    <Button>
                      <DeleteIcon onClick={() => dispatch(deleteProduct(id))} />
                    </Button>
                  </>
                );
              }}
            </TableList>
          ) : null}

          <FormalizationOrderingContainer
            discount={discount}
            token={token}
            cartPriceWithoutShipping={cartPriceWithoutShipping}
            shippingPrice={shippingPrice}
            cartPrice={cartPrice}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            isUserInfoLoadPending={isUserInfoLoadPending}
            pageLoading={pageLoading}
            initialValue={initialValue}
            validation={validation}
            onSubmitForm={onSubmitForm}
            fieldName={fieldName}
            promoCodeInitialValue={promoCodeInitialValue}
            onSubmitPromoCode={onSubmitPromoCode}
            validationPromoCode={validationPromoCode}
            isPromoCodePending={isPromoCodePending}
            isPromoCodeError={isPromoCodeError}
            isPromoCodeSuccess={isPromoCodeSuccess}
            promoCodeErrorMessage={promoCodeErrorMessage}
          />
        </>
      )}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: 28px;
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const Button = styled(IconButton)`
  padding: 0;
`;
