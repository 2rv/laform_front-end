import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { AboutOrderFormContainer } from './frames';
import { TableList } from '../block-table-list';

export function OrderNumberComponent(props) {
  const {
    headersTable,
    itemsTable,
    onSubmit,
    initialValue,
    validate,
    orderNumberDetails,
  } = props;

  const convertedPurchasedProductsData = orderNumberDetails.purchaseProducts?.map((product) => ({
      name: product.purchaseProductName,
      price: product.total,
      image:
        'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
      params: [
        { name: product?.color    && 'Цвет',       value: product?.color    },
        { name: product?.size     && 'Размер',     value: product?.size     },
        { name: product?.type     && 'Категория',  value: product?.type     },
        { name: product?.quantity && 'Количество', value: product?.quantity },
      ],
    }));

  return (
    <SectionLayout>
      <div>
        <TitlePrimary tid="ORDER_NUMBER.TABLE.TITLE" />
        &nbsp;
        <BoldTitle tid={orderNumberDetails?.orderNumber} />
      </div>
      <TableList items={convertedPurchasedProductsData} headers={headersTable} />
      <AboutOrderFormContainer
        orderNumberDetails={orderNumberDetails}
        onSubmit={onSubmit}
        initialValue={initialValue}
        validate={validate}
      />
    </SectionLayout>
  );
}

const BoldTitle = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
