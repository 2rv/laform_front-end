import { SectionLayout } from 'src/lib/element/layout';
import { LoaderPrimary } from 'src/lib/element/loader';
import { TextCurrency, TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';
import React, { useState } from 'react';
import {
  StatisticsTabs,
  TotalStats,
  MasterClassStats,
  PatternPrintStats,
  PatternElectronicStats,
  SewingGoodStats,
} from './frames';
import { ChartPrice, ChartOrders } from './frames/victory-line';
import { CustomChart } from './frames/test-victory';

export function StatisticstComponent(props) {
  const {
    pending,
    success,
    error,
    errorMessage,
    purchasedProductsCountAndPrice,
    statistics,
    ordersCount,
    price,
    pageLoading,
    activeTab,
  } = props;
  return (
    <SectionLayout>
      {pageLoading && <LoaderPrimary />}
      <StatisticsTabs pageLoading={pageLoading} activeTab={activeTab} />
      {activeTab === null && (
        <TotalStats statistics={purchasedProductsCountAndPrice} />
      )}
      {activeTab === 'master-class' && (
        <MasterClassStats statistics={purchasedProductsCountAndPrice} />
      )}
      {activeTab === 'pattern-print' && (
        <PatternPrintStats statistics={purchasedProductsCountAndPrice} />
      )}
      {activeTab === 'pattern-electronic' && (
        <PatternElectronicStats statistics={purchasedProductsCountAndPrice} />
      )}
      {activeTab === 'sewing-good' && (
        <SewingGoodStats statistics={purchasedProductsCountAndPrice} />
      )}
      <CustomChart data={price.data} />
      <CustomChart data={ordersCount.data} />
    </SectionLayout>
  );
}
