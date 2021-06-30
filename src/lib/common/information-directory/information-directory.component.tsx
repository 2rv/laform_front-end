import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';

import { InformationDirectoryPropsType } from './information-directory.type';

export function InformationDirectoryComponent(
  props: InformationDirectoryPropsType,
) {
  const { icon: Icon, tid, tvalue, onClick } = props;

  return (
    <Container onClick={onClick}>
      <Icon />
      <TitleText tid={tid} tvalue={tvalue} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
  padding: ${spacing(7)};
  justify-items: center;
  align-content: center;
  text-align: center;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  cursor: pointer;
`;

const TitleText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5em;
`;
