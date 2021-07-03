import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { EditCompilationListItemComponent } from './edit-compilation-list-item.component';
import { TitlePrimary } from '../../../../lib/element/title';

export function EditCompilationListComponent(props) {
  const { title, items } = props;
  return (
    <Container>
      <Title tid={title} />
      <Content>
        {items.map((item, index) => {
          return (
            <EditCompilationListItemComponent
              key={item?.key || index}
              {...item}
            />
          );
        })}
      </Content>
    </Container>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;
const Content = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
