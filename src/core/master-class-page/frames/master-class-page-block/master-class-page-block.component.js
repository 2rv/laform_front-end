import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import styled from 'styled-components';
import { TextSecondary } from '../../../../lib/element/text';

export function MasterClassPageBlockComponent(props) {
  const {
    block: { title, content, description },
    altType = false,
  } = props;
  return (
    <Container type={altType}>
      {title && <BlockTitle tid={title} />}
      <BlockContent>
        <Content tid={content} />
      </BlockContent>
      {description && <Description type={altType}>{description}</Description>}
    </Container>
  );
}

const Description = styled(TextSecondary)`
  color: ${({ type }) =>
    type ? THEME_COLOR.SECONDARY : THEME_COLOR.FIELD.TEXT_PRIMARY};
  ${({ type }) => type && `font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};`}
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 28px;
`;
const Container = styled.div`
  display: grid;
  gap: 15px;
  width: ${({ type }) => (type ? `555px` : `100%`)};
`;
const BlockTitle = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY};
`;
const Content = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const BlockContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 360px;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;
