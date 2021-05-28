import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';

export function CatalogItemComponent(props) {
  const { title, description, backgroundImage, path } = props;

  return (
    <LinkPrimary path={path}>
      <Container>
        <BackgroundImage src={backgroundImage} />
        <ContentContainer>
          <TitleText tid={title} />
          <DescriptionText tid={description} />
        </ContentContainer>
      </Container>
    </LinkPrimary>
  );
}

const Container = styled.div`
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  padding: ${spacing(9)} ${spacing(6)};
  justify-content: center;
  background-color: ${THEME_COLOR.BACKGROUND_TRANSPARENT.PRIMARY_75};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const TitleText = styled(TextPrimary)`
  color: ${THEME_COLOR.TEXT.WHITE};
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: 600;
  line-height: 1.25em;
`;

const DescriptionText = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.WHITE_75};
  line-height: 1.5em;
`;
