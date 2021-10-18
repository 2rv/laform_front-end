import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { purchaseProductLoadData } from './purchase-products.action';
import { PURCHASE_PRODUCTS_STORE_NAME } from './purchase-products.constant';

import { PurchaseProductsComponent } from './purchase-products.component';

export function PurchaseProductsContainer() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(3);
  const { purchaseProductsLoadData, pageLoading } = useSelector((state) => ({
    purchaseProductsLoadData:
      state[PURCHASE_PRODUCTS_STORE_NAME].purchaseProductsLoadData,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  useEffect(() => dispatch(purchaseProductLoadData()), []);
  const data = getRequestData(purchaseProductsLoadData, null);

  const getTabAppropriateData = (activeTab) => {
    switch (activeTab) {
      case 0:
        return {
          purchasedProducts: data?.sewingProduct,
          headers: headersGoods,
        };
      case 1:
        return {
          purchasedProducts: data?.masterProduct,
          headers: headersMaster,
        };
      case 2:
        return {
          purchasedProducts: data?.patternPrintProduct,
          headers: headersPatternsAnalogue,
        };
      case 3:
        return {
          purchasedProducts: data?.patternElectronicProduct,
          headers: headersPatternsDigital,
        };
      default:
        return null;
    }
  };

  return (
    <PurchaseProductsComponent
      products={getTabAppropriateData(activeTab)}
      isPending={isRequestPending(purchaseProductsLoadData)}
      tabItems={tabItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      pageLoading={pageLoading}
    />
  );
}

const tabItems = [
  { name: 'PURCHASED_PRODUCTS.TABS.PATTERN_DIGITAL', type: 3 },
  { name: 'PURCHASED_PRODUCTS.TABS.PATTERN_ANALOGUE', type: 2 },
  { name: 'PURCHASED_PRODUCTS.TABS.MASTER_CLASS', type: 1 },
  { name: 'PURCHASED_PRODUCTS.TABS.SEWING_PRODUCTS', type: 0 },
];

const headersGoods = [
  'PURCHASED_PRODUCTS.HEADERS.SEWING_PRODUCTS.NAME',
  'PURCHASED_PRODUCTS.HEADERS.SEWING_PRODUCTS.DETAILS',
  'PURCHASED_PRODUCTS.HEADERS.SEWING_PRODUCTS.DELIVERY_DATA',
  'PURCHASED_PRODUCTS.HEADERS.SEWING_PRODUCTS.PRICE',
  'PURCHASED_PRODUCTS.HEADERS.SEWING_PRODUCTS.STATUS',
];
const headersMaster = [
  'PURCHASED_PRODUCTS.HEADERS.MASTER_CLASS.NAME',
  'PURCHASED_PRODUCTS.HEADERS.MASTER_CLASS.DETAILS',
  'PURCHASED_PRODUCTS.HEADERS.MASTER_CLASS.DELIVERY_DATA',
  'PURCHASED_PRODUCTS.HEADERS.MASTER_CLASS.PRICE',
];
const headersPatternsDigital = [
  'PURCHASED_PRODUCTS.HEADERS.PATTERN_PRODUCTS_DIGITAL.NAME',
  'PURCHASED_PRODUCTS.HEADERS.PATTERN_PRODUCTS_DIGITAL.DETAILS',
  'PURCHASED_PRODUCTS.HEADERS.PATTERN_PRODUCTS_DIGITAL.DELIVERY_DATA',
  'PURCHASED_PRODUCTS.HEADERS.PATTERN_PRODUCTS_DIGITAL.PRICE',
];
const headersPatternsAnalogue = [
  'PURCHASED_PRODUCTS.HEADERS.PATTERN_PRODUCTS_ANALOGUE.NAME',
  'PURCHASED_PRODUCTS.HEADERS.PATTERN_PRODUCTS_ANALOGUE.DETAILS',
  'PURCHASED_PRODUCTS.HEADERS.PATTERN_PRODUCTS_ANALOGUE.DELIVERY_DATA',
  'PURCHASED_PRODUCTS.HEADERS.PATTERN_PRODUCTS_ANALOGUE.PRICE',
  'PURCHASED_PRODUCTS.HEADERS.PATTERN_PRODUCTS_ANALOGUE.STATUS',
];
