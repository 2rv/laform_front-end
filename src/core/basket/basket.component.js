import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { SignComponent, FormContainer } from './frames';
import { Table } from 'src/lib/common/block-table';

export function BasketComponent(props) {
  const {
    isEmpty,
    isAuth,
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
    ...formProps
  } = props;
  return (
    <SectionLayout>
      <Title tid="BASKET.TITLE" />
      {isEmpty ? (
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
          <FormContainer isAuth={isAuth} {...formProps} />
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
