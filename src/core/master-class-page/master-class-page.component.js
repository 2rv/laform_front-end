import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { MediaBlock } from '../block-media';
import { TitlePrimary } from '../../lib/element/title';

export function MasterClassPageComponent(props) {
  const { name, descriptions, date, content } = props.data;

  return (
    <SectionLayout>
      <HeaderCase>
        <Title tid={name} />
        <Date tid={date} />
      </HeaderCase>
      <MediaBlock content={content[0]} />
      <SectionLayout type="SMALL">
        {descriptions.map((text, index) => (
          <Description key={index} tid={text} />
        ))}
      </SectionLayout>
      <MediaBlock content={content[1]} />
      <ImageLayout>
        <MediaBlock content={content[2]} />
        <MediaBlock content={content[3]} />
      </ImageLayout>
    </SectionLayout>
  );
}
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const Date = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
`;
const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.5;
`;
const Description = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
`;
const ImageLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing(6)};
`;
