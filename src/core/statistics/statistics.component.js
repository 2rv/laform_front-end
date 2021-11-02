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
import VictoryLine from './frames/victory-line';

export function StatisticstComponent(props) {
  const {
    pending,
    success,
    error,
    errorMessage,
    statistics,
    pageLoading,
    activeTab,
  } = props;
  return (
    <SectionLayout>
      {pageLoading && <LoaderPrimary />}
      <StatisticsTabs pageLoading={pageLoading} activeTab={activeTab} />
      {activeTab === null && <TotalStats statistics={statistics} />}
      {activeTab === 'master-class' && (
        <MasterClassStats statistics={statistics} />
      )}
      {activeTab === 'pattern-print' && (
        <PatternPrintStats statistics={statistics} />
      )}
      {activeTab === 'pattern-electronic' && (
        <PatternElectronicStats statistics={statistics} />
      )}
      {activeTab === 'sewing-good' && (
        <SewingGoodStats statistics={statistics} />
      )}
      <VictoryLine data={statistics.chartOrders} />
    </SectionLayout>
  );
}
