import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import { PatternsSubMenuComponent } from './frames';
import { BasicCard as ItemCard } from 'src/lib/element/card';
import { PatternsFormFilterContainer } from './frames';
import { TextSecondary } from 'src/lib/element/text';
import {
  PATTERNS_FILTER_CATEGORY_OPTIONS,
  PATTERNS_FILTER_TAGS_OPTIONS,
} from './patterns.constant';
import {
  PATTERNS_FORM_FILTER_FIELD_NAME,
  PATTERNS_FILTER_FIELD_NAME,
} from './patterns.type';

export function PatternsComponent(props) {
  const { items, menuItems, activePath } = props;
  const patternsFormFilterGetInitialValue = () => {
    const rawData = false; //getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [PATTERNS_FILTER_FIELD_NAME.CATEGORY]:
          PATTERNS_FILTER_CATEGORY_OPTIONS[0].id,
        [PATTERNS_FILTER_FIELD_NAME.TAGS]: PATTERNS_FILTER_TAGS_OPTIONS[0].id,
      };
    }
  };
  return (
    <Container>
      <Content>
        <IndentLayout>
          <Title tid="PATTERNS.PATTERNS.TITLE" />
          <PatternsSubMenuComponent items={menuItems} activePath={activePath} />
          <PatternsFormFilterContainer
            categoryOptions={PATTERNS_FILTER_CATEGORY_OPTIONS}
            tagsOptions={PATTERNS_FILTER_TAGS_OPTIONS}
            initialValue={patternsFormFilterGetInitialValue()}
            fieldName={PATTERNS_FORM_FILTER_FIELD_NAME}
          />
          <List>
            {items.map((item) => (
              <ItemCard
                key={item.id}
                actions={['OTHER.SELECTED', 'OTHER.SELECT']}
                {...item}
              />
            ))}
          </List>
        </IndentLayout>
      </Content>
    </Container>
  );
}
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
  @media screen and (min-width: 721px) and (max-width: 1259px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;
