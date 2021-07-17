import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { CompilationListItemComponent } from './compilation-list-item.component';

export function CompilationListComponent(props) {
  const { items } = props;
  return (
    <Container>
      {items.map((item, index) => {
        return (
          <CompilationListItemComponent key={item?.key || index} {...item} />
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
