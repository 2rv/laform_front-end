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
  'BASKET.HEADERS_GOODS.SEWING_GOODS',
  'BASKET.HEADERS_GOODS.PARAMETERS',
  'BASKET.HEADERS_GOODS.QUANTITY',
  'BASKET.HEADERS_GOODS.TOTAL_PRICE',
];
const headersMaster = [
  'BASKET.HEADERS_MASTER.MASTER_CLASSES',
  'BASKET.HEADERS_MASTER.PARAMETERS',
  'BASKET.HEADERS_MASTER.TOTAL_PRICE',
];
const headersPatterns = [
  'BASKET.HEADERS_PATTERNS.PATTERNS',
  'BASKET.HEADERS_PATTERNS.PARAMETERS',
  'BASKET.HEADERS_GOODS.QUANTITY',
  'BASKET.HEADERS_PATTERNS.TOTAL_PRICE',
];
