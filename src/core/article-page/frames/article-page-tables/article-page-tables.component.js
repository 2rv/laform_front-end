import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import styled from 'styled-components';
import { TextSecondary } from '../../../../lib/element/text';

export function ArticlesPageTablesComponent({ items }) {
  return items.map(({ title, content, description }, index) => {
    return (
      <Container key={index}>
        <TableTitle tid={title} />
        <Background>
          <BackgroundText tid="Таблица" />
        </Background>
        {description && <Description>{description}</Description>}
      </Container>
    );
  });
}
//Title второй карточки должен быть с жирным laforme
const Description = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 28px;
`;
const Container = styled.div`
  display: grid;
  gap: 15px;
`;
const TableTitle = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY};
`;
const BackgroundText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  color: ${THEME_COLOR.TEXT.LIGHT};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 360px;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;
