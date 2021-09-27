import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { Divider } from 'src/lib/element/divider';
import { THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { convertUsersOrderData } from 'src/core/orders/orders.convert';
import { TableList } from 'src/core/block-table-list';

export function PurchasesComponent({ purchases }) {
  return (
    <SectionLayout type="SMALL">
      <Title tid="PROFILE.PURCHASES" />
      <Divider />
      {Boolean(purchases?.length > 0) ? (
        <TableList items={purchases.map(convertUsersOrderData)} />
      ) : (
        <TextSecondary tid="PROFILE.NOT_HAVE_PURCHASES" />
      )}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
