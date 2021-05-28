import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';

export function InformationItemComponent(props) {
  const { icon: Icon, title, path } = props;

  return (
    <LinkPrimary path={path}>
      <Container>
        <Icon />
        <TitleText tid={title} />
      </Container>
    </LinkPrimary>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
  height: 100%;
  padding: ${spacing(7)};
  justify-items: center;
  align-content: center;
  text-align: center;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const TitleText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5em;
`;
