import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { SliderListItemComponent } from './slider-list-item.component';
import { TitlePrimary } from '../../../../lib/element/title';

export function SliderListComponent(props) {
  const { items } = props;
  return (
    <Container>
      <Content>
        {items.map((item, index) => {
          return <SliderListItemComponent key={item?.key || index} {...item} />;
        })}
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;
const Content = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
