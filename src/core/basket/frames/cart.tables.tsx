import { SectionLayout } from 'src/lib/element/layout';
import { Table } from 'src/lib/common/block-table';
import { CartTablesProps } from '../basket.type';

export function CartTables(props: CartTablesProps) {
  const {
    changeItem,
    deleteItem,
    sewingProducts,
    masterProducts,
    patternProducts,
  } = props;
  return (
    <SectionLayout>
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
    </SectionLayout>
  );
}
const headersGoods = [
  'BASKET.FORM.CART_TABLES.SEWING_GOODS',
  'BASKET.FORM.CART_TABLES.PARAMETERS',
  'BASKET.FORM.CART_TABLES.QUANTITY',
  'BASKET.FORM.CART_TABLES.TOTAL_PRICE',
];
const headersMaster = [
  'BASKET.FORM.CART_TABLES.MASTER_CLASSES',
  'BASKET.FORM.CART_TABLES.PARAMETERS',
  'BASKET.FORM.CART_TABLES.TOTAL_PRICE',
];
const headersPatterns = [
  'BASKET.FORM.CART_TABLES.PATTERNS',
  'BASKET.FORM.CART_TABLES.PARAMETERS',
  'BASKET.FORM.CART_TABLES.QUANTITY',
  'BASKET.FORM.CART_TABLES.TOTAL_PRICE',
];
