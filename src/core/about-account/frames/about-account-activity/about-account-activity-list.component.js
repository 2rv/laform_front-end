import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';

export function AboutAccountActivityListComponent(props) {
  const {
    dataItems: { title, items },
    children,
  } = props;
  return (
    <Container>
      <Title tid={title} />
      <Content>
        {items.map((item, index) => children({ item, key: item?.id || index }))}
        <ViewAll tid="Посмотреть всё..." />
      </Content>
    </Container>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const ViewAll = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  text-decoration: underline;
`;
const Content = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;
