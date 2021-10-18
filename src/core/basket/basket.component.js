import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { SignComponent, FormContainer } from './frames';
import { Table } from 'src/lib/common/block-table';

export function BasketComponent(props) {
  const {
    pageLoading,
    IsEmpty,
    isAuth,
    //--------------
    promocode,
    discount,
    price,
    //--------------
    userInfoErrorMessage,
    userInfoError,
    userInfoPending,
    userInfoSuccess,
    //--------------
    orderErrorMessage,
    orderError,
    orderPending,
    orderSuccess,
    //--------------
    promoCodeErrorMessage,
    promoCodeError,
    promoCodePending,
    promoCodeSuccess,
    //--------------
    sendEmailCodePending,
    sendEmailCodeSuccess,
    //--------------
    emailConfirmedState,
    confirmEmailForOrderErrorMessage,
    confirmEmailForOrderError,
    confirmEmailForOrderPending,
    confirmEmailForOrderSuccess,
    //--------------
    onSubmit,
    initialValues,
    validation,
    diliveryOptions,
    paymentMethodOptions,
    setPurchaseTotalPrice,
    //--------------
    changeItem,
    deleteItem,
    checkPromoCode,
    //--------------
    headersGoods,
    headersMaster,
    headersPatterns,
    //--------------
    sewingProducts,
    masterProducts,
    patternProducts,
  } = props;

  return (
    <SectionLayout>
      <Title tid="BASKET.TITLE" />
      {IsEmpty ? (
        <TextSecondary tid="BASKET.CART_IS_EMPTY" />
      ) : (
        <>
          <Table
            changeItem={changeItem}
            deleteItem={deleteItem}
            headers={headersGoods}
            items={sewingProducts}
          />
          <Table
            changeItem={changeItem}
            deleteItem={deleteItem}
            headers={headersPatterns}
            items={patternProducts}
          />
          <Table
            changeItem={changeItem}
            deleteItem={deleteItem}
            headers={headersMaster}
            items={masterProducts}
          />
          <FormContainer
            isAuth={isAuth}
            promocode={promocode}
            discount={discount}
            price={price}
            userInfoErrorMessage={userInfoErrorMessage}
            userInfoError={userInfoError}
            userInfoPending={userInfoPending}
            userInfoSuccess={userInfoSuccess}
            orderErrorMessage={orderErrorMessage}
            orderError={orderError}
            orderPending={orderPending}
            orderSuccess={orderSuccess}
            sendEmailCodePending={sendEmailCodePending}
            sendEmailCodeSuccess={sendEmailCodeSuccess}
            emailConfirmedState={emailConfirmedState}
            confirmEmailForOrderErrorMessage={confirmEmailForOrderErrorMessage}
            confirmEmailForOrderError={confirmEmailForOrderError}
            confirmEmailForOrderPending={confirmEmailForOrderPending}
            confirmEmailForOrderSuccess={confirmEmailForOrderSuccess}
            diliveryOptions={diliveryOptions}
            paymentMethodOptions={paymentMethodOptions}
            setPurchaseTotalPrice={setPurchaseTotalPrice}
            onSubmit={onSubmit}
            checkPromoCode={checkPromoCode}
            initialValues={initialValues}
            validation={validation}
            promoCodeErrorMessage={promoCodeErrorMessage}
            promoCodeError={promoCodeError}
            promoCodePending={promoCodePending}
            promoCodeSuccess={promoCodeSuccess}
          />
        </>
      )}
      {!isAuth && <SignComponent title="OTHER.GET_PURCHASES_HISTORY" />}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
