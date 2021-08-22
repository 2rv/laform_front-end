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

import {
  incrementSewingProduct,
  incrementPatternProduct,
  incrementMasterClass,
  decrementSewingProduct,
  decrementPatternProduct,
  decrementMasterClass,
  deleteSewingProduct,
  deletePatternProduct,
  deleteMasterClass,
} from '../../lib/common/cart';

export function BasketComponent(props) {
  const {
    isNotEmpty,
    discount,
    total,
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

    isPromoCodePending,
    isPromoCodeError,
    isPromoCodeSuccess,
    promoCodeErrorMessage,
  } = props;
  const dispatch = useDispatch();

  return (
    <SectionLayout>
      <Title tid="BASKET.TITLE" />

      {isNotEmpty ? (
        <>
          {sewingProduct.length ? (
            <TableList
              incrementCount={incrementSewingProduct}
              decrementCount={decrementSewingProduct}
              headers={headersGoods}
              items={sewingProduct}
              count={true}
              type={BLOCK_TABLE_LIST_ROW_TYPE.SEWING_PRODUCT}
            >
              {(id) => {
                return (
                  <>
                    <Button>
                      <EditIcon />
                    </Button>
                    <Button>
                      <DeleteIcon
                        onClick={() => dispatch(deleteSewingProduct(id))}
                      />
                    </Button>
                  </>
                );
              }}
            </TableList>
          ) : null}

          {patternProduct.length ? (
            <TableList
              type={BLOCK_TABLE_LIST_ROW_TYPE.PATTERN_PRODUCT}
              headers={headersPatterns}
              items={patternProduct}
              incrementCount={incrementPatternProduct}
              decrementCount={decrementPatternProduct}
              count={true}
            >
              {(id) => {
                return (
                  <>
                    <Button>
                      <EditIcon />
                    </Button>
                    <Button>
                      <DeleteIcon
                        onClick={() => dispatch(deletePatternProduct(id))}
                      />
                    </Button>
                  </>
                );
              }}
            </TableList>
          ) : null}

          {masterClass.length ? (
            <TableList
              headers={headersMaster}
              items={masterClass}
              incrementCount={incrementMasterClass}
              decrementCount={decrementMasterClass}
              type={BLOCK_TABLE_LIST_ROW_TYPE.MASTER_CLASS}
            >
              {(id) => {
                return (
                  <>
                    <Button>
                      <EditIcon />
                    </Button>
                    <Button>
                      <DeleteIcon
                        onClick={() => dispatch(deleteMasterClass(id))}
                      />
                    </Button>
                  </>
                );
              }}
            </TableList>
          ) : null}

          <FormalizationOrderingContainer
            total={total}
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
      ) : (
        <TextSecondary tid="BASKET.CART_IS_EMPTY" />
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
