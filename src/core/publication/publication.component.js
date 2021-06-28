import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import { PublicationFormFilterContainer } from './frames';
import { TextSecondary } from 'src/lib/element/text';
import {
  PUBLICATION_FILTER_CATEGORY_OPTIONS,
  PUBLICATION_FILTER_TAGS_OPTIONS,
} from './publication.constant';
import {
  PUBLICATION_FORM_FILTER_FIELD_NAME,
  PUBLICATION_FILTER_FIELD_NAME,
} from './publication.type';
import { PublicationItemComponent } from './publication-item.component';

export function PublicationComponent(props) {
  const { items } = props;
  const PublicationFormFilterGetInitialValue = () => {
    const rawData = false; //getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [PUBLICATION_FILTER_FIELD_NAME.CATEGORY]:
          PUBLICATION_FILTER_CATEGORY_OPTIONS[0].id,
        [PUBLICATION_FILTER_FIELD_NAME.TAGS]:
          PUBLICATION_FILTER_TAGS_OPTIONS[0].id,
      };
    }
  };
  return (
    <Container>
      <Content>
        <IndentLayout>
          <Title tid="PUBLICATION.PUBLICATION.TITLE" />
          <PublicationFormFilterContainer
            categoryOptions={PUBLICATION_FILTER_CATEGORY_OPTIONS}
            tagsOptions={PUBLICATION_FILTER_TAGS_OPTIONS}
            initialValue={PublicationFormFilterGetInitialValue()}
            fieldName={PUBLICATION_FORM_FILTER_FIELD_NAME}
          />
          <List>
            <List>
              {items.map((item) => (
                <PublicationItemComponent {...item} />
              ))}
            </List>
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
