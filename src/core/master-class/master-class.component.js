import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { MasterClassBlockComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function MasterClassComponent(props) {
  const { name, descriptions, date, image, video, images } = props;

  return (
    <Container>
      <PaddingLayout>
        <IndentLayout type="MEDIUM">
          <IndentLayout>
            <TitleContainer>
              <Title tid={name} />
              <Date tid={date} />
            </TitleContainer>
            <MasterClassBlockComponent block={image} />
            <DescriptionContainer>
              <Description tid={descriptions[0]} />
              <Description tid={descriptions[1]} />
              <Description tid={descriptions[2]} />
              <Description tid={descriptions[3]} />
              <Description tid={descriptions[4]} />
              <Description tid={descriptions[5]} />
              <Description tid={descriptions[6]} />
              <Description tid={descriptions[7]} />
              <Description tid={descriptions[9]} />
            </DescriptionContainer>
            <MasterClassBlockComponent block={video} />
            <FlexContainer>
              <MasterClassBlockComponent block={images[0]} altType={true} />
              <MasterClassBlockComponent block={images[1]} altType={true} />
            </FlexContainer>
          </IndentLayout>
        </IndentLayout>
      </PaddingLayout>
    </Container>
  );
}
const Description = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 28px;
`;
const Date = styled(TextSecondary)`
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Title = styled(TitlePrimary)`
  font-size: 28px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing(12)} ${spacing(6)};
`;
const PaddingLayout = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const FlexContainer = styled.div`
  display: flex;
  gap: ${spacing(6)};
`;
const DescriptionContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;
