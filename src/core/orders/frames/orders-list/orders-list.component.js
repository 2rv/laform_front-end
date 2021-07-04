import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { OrdersListItemComponent } from './orders-list-item.component';
import { IndentLayout } from '../../../../lib/element/layout';
import { ListComponent } from './list.component';
import { TextSecondary } from '../../../../lib/element/text';

export function OrdersListComponent(props) {
  const { items } = props;
  return (
    <Container>
      <GridColumns>
        <PrimaryText tid="Название" />
        <PrimaryText tid="Подробности" />
        <PrimaryText tid="Данные доставки" />
        <PrimaryText tid="Цена товара" />
        <PrimaryText tid="Состояние" />
      </GridColumns>
      <Divider />
      <ListComponent dataItems={items}>
        {({ item, key }) => (
          <>
            <GridColumns key={key}>
              <OrdersListItemComponent {...item} />
            </GridColumns>
            <Divider />
          </>
        )}
      </ListComponent>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
const GridColumns = styled.div`
  display: grid;
  grid-template-columns: 293px 272px 351px 130px auto;
  align-items: center;
`;
const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;
const PrimaryText = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
