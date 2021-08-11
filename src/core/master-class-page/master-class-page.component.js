import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ContentLayout, SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { MasterClassPageBlockComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function MasterClassPageComponent(props) {
  const { name, descriptions, date, image, video, images } = props;

  return (
    <SectionLayout>
      <TitleCase>
        <Title tid={name} />
        <Date tid={date} />
      </TitleCase>
      <MasterClassPageBlockComponent block={image} />
      <SectionLayout type="SMALL">
        <Description tid={descriptions[0]} />
        <Description tid={descriptions[1]} />
        <Description tid={descriptions[2]} />
        <Description tid={descriptions[3]} />
        <Description tid={descriptions[4]} />
        <Description tid={descriptions[5]} />
        <Description tid={descriptions[6]} />
        <Description tid={descriptions[7]} />
        <Description tid={descriptions[9]} />
      </SectionLayout>
      <MasterClassPageBlockComponent block={video} />
      <LineCase>
        <MasterClassPageBlockComponent block={images[0]} altType={true} />
        <MasterClassPageBlockComponent block={images[1]} altType={true} />
      </LineCase>
    </SectionLayout>
  );
}
const Description = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
`;
const Date = styled(TextSecondary)`
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Title = styled(TitlePrimary)`
  font-size: 1.5;
`;
const TitleCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(6)};
`;
