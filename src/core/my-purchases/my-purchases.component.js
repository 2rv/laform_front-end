import styled from 'styled-components';

import { TabsComponent, TableComponent } from './frames';

import { PURCHASES_LIST } from './my-purchases.constant';

import { ContentLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing } from 'src/lib/theme';

export function MyPurchasesComponent() {
  return (
    <Container>
      <Content>
        <TitlePrimary tid="PURCHASE.SEЕWING_GOODS.MY_PURCHASES" />
        <TabsComponent />
        <TableComponent purchasesList={PURCHASES_LIST} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(ContentLayout)`
  padding: 0 ${spacing(2)};
`;
