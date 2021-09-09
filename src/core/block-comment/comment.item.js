import { TitlePrimary } from '../../lib/element/title';
import { TextSecondary } from '../../lib/element/text';
import { ButtonBasic } from '../../lib/element/button';
import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ReactComponent as CommentIcon } from '../../asset/svg/arrow-for-comment.svg';
import { SectionLayout } from '../../lib/element/layout';
import { Divider } from '../../lib/element/divider';

export function CommentItem(props) {
  const { id, text, createDate, userId, subComment } = props.data;

  return (
    <Container>
      <Content>
        <HeaderCase>
          <Title tid={userId.login} />
          <TextLight tid={createDate} />
          <Button>
            <CommentIcon />
          </Button>
        </HeaderCase>
        <TextSecondary tid={text} />
        <Divider />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: baseline;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(1)};
  line-height: 1.5;
  width: 100%;
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  ::first-letter {
    text-transform: uppercase;
  }
`;
const HeaderCase = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(2)};
`;
const Button = styled(ButtonBasic)`
  padding: 0;
  width: fit-content;
  background-color: transparent;
  height: fit-content;
`;
const TextLight = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
