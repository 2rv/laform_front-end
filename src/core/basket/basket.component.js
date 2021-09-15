import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { TableList } from '../block-table-list';
import { TextSecondary } from '../../lib/element/text';
import { SignComponent, FormContainer } from './frames';

export function BasketComponent(props) {
  const {
    pageLoading,
    IsEmpty,
    isAuth,
    //--------------
    onSubmit,
    initialValues,
    validation,
    diliveryOptions,
    paymentMethodOptions,
    //--------------
    changeItem,
    deleteItem,
    //--------------
    headersGoods,
    headersMaster,
    headersPatterns,
    //--------------
    itemsGoods,
    itemsMaster,
    itemsPatterns,
  } = props;

  return (
    <SectionLayout>
      <Title tid="BASKET.TITLE" />
      {IsEmpty ? (
        <TextSecondary tid="BASKET.CART_IS_EMPTY" />
      ) : (
        <>
          <TableList
            changeItem={changeItem}
            deleteItem={deleteItem}
            headers={headersGoods}
            items={itemsGoods}
          />
          <TableList
            changeItem={changeItem}
            deleteItem={deleteItem}
            headers={headersPatterns}
            items={itemsPatterns}
          />
          <TableList
            changeItem={changeItem}
            deleteItem={deleteItem}
            headers={headersMaster}
            items={itemsMaster}
          />
        </>
      )}
      {isAuth ? (
        <FormContainer
          diliveryOptions={diliveryOptions}
          paymentMethodOptions={paymentMethodOptions}
          onSubmit={onSubmit}
          initialValues={initialValues}
          validation={validation}
        />
      ) : (
        <SignComponent />
      )}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
