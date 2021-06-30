import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';
import { BasicCardList } from 'src/lib/element/card-list';

export function PopularMasterComponent({ items }) {
  return (
    <IndentLayout>
      <FlexContainer>
        <TitleText tid="HOME.POPULAR_MASTER.TITLE" />
        <ViewAllLink tid="HOME.POPULAR_GODS.VIEW_ALL" path={'/'} />
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
