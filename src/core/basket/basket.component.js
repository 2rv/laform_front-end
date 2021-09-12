import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { TableList } from '../block-table-list';
import { TextSecondary } from '../../lib/element/text';
// import { ReactComponent as DeleteIcon } from '../../asset/svg/cancel-delete-icon.svg';
// import { FormalizationOrderingContainer } from './frames';
// import { EditProductComponent } from '../../lib/element/edit';

export function BasketComponent(props) {
  const {
    pageLoading,
    backetData,
    //--------------
    changeItem,
    countMethods,
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
      <TableList
        headers={headersGoods}
        items={itemsGoods}
        changeItem={changeItem}
        countMethods={countMethods}
      />
      <TableList headers={headersPatterns} items={itemsPatterns} />
      <TableList headers={headersMaster} items={itemsMaster} />
      <TextSecondary tid="BASKET.CART_IS_EMPTY" />
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
