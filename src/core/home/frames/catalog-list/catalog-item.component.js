import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';
import { PageLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';

export function CatalogItemComponent(props) {
  const { title, description, backgroundImage, path } = props.data;

  return (
    <Container path={path}>
      <BackgroundImage src={backgroundImage} />
      <Content>
        <TitleText tid={title} />
        <DescriptionText tid={description} />
      </Content>
    </Container>
  );
}

const Container = styled(LinkPrimary)`
  display: grid;
  position: relative;
`;
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Content = styled.div`
  padding: ${spacing(6)};
  display: flex;
  flex: 1;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing(3)};
  background-color: rgba(47, 42, 44, 0.75);
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const TitleText = styled(TitlePrimary)`
  color: ${THEME_COLOR.WHITE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.5;
`;
const DescriptionText = styled(TextSecondary)`
  color: ${THEME_COLOR.LIGHT_GRAY};
  line-height: 1.5;
`;
