import styled from 'styled-components';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { IndentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { LinkSecondary } from 'src/lib/element/link';
import { BasicCardList } from 'src/lib/element/card-list';

export function PopularMasterClassesComponent({ items }) {
  return (
    <IndentLayout>
      <FlexContainer>
        <TitleText tid="HOME.POPULAR_MASTER_CLASSES_TITLE" />
        <ViewAllLink tid="HOME.VIEW_ALL" path={'/'} />
      </FlexContainer>
      <BasicCardList items={items} actions={['OTHER.PURCHASED', 'OTHER.BUY']} />
    </IndentLayout>
  );
}

const FlexContainer = styled.div`
  display: flex;
`;
const TitleText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const ViewAllLink = styled(LinkSecondary)`
  margin-left: auto;
`;
