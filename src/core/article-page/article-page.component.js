import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { CardListBlock } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { BlockComments } from '../block-comments';
import { MediaBlock } from '../block-media';

export function ArticlePageComponent(props) {
  const { data, listItems, comments } = props;
  const { name, date, content, descriptions } = data;
  return (
    <SectionLayout>
      <HeaderCase>
        <Title tid={name} />
        <Date tid={date} />
      </HeaderCase>
      <MediaBlock content={content[0]} />
      <MediaBlock content={content[1]} />
      {descriptions.map((text, index) => (
        <Description key={index} tid={text} />
      ))}
      <BlockComments items={comments} />
      <CardListBlock
        title="отзывы"
        path="/articles"
        items={listItems}
        cardType="articles"
      />
    </SectionLayout>
  );
}

const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const Description = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
`;
const Date = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.5;
`;
