import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { MyLikesSubMenuComponent } from './frames';
import { BasicCardList } from '../../lib/element/card-list';

export function MyLikesComponent(props) {
  const { items, menuItems, activePath } = props;
  return (
    <Container>
      <Content>
        <IndentLayout>
          <Title tid="MY_LIKES.MY_LIKES.TITLE" />
          <MyLikesSubMenuComponent items={menuItems} activePath={activePath} />
          <BasicCardList
            items={items}
            actions={['OTHER.SELECTED', 'OTHER.SELECT']}
          />
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
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
