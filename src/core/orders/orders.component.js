import styled from 'styled-components';
import { THEME_SIZE, spacing } from '../../lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { OrdersListComponent, OrdersSubMenuComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function OrdersComponent(props) {
  const { activePath, subMenu, ordersData } = props;
  return (
    <Container>
      <Content>
        <IndentLayout>
          <TitlePrimary tid="Заказы" />
          <OrdersSubMenuComponent activePath={activePath} items={subMenu} />
          <OrdersListComponent items={ordersData} />
        </IndentLayout>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
