import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { BasicField } from 'src/lib/element/field';
import { ButtonBasic } from 'src/lib/element/button';
import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { ReactComponent as CommentIcon } from 'src/asset/svg/arrow-for-comment.svg';
import { ReactComponent as SendIcon } from 'src/asset/svg/message-send-icon.svg';

export function ArticlePageCommentComponent({ items }) {
  return (
    <Container>
      <TitlePrimary tid="Отзывы" />
      <ListComment>
        {items.map((item, index) => {
          return <ProductCommentItem key={index} {...item} />;
        })}
        <SecondTitle tid="Написать отзыв" />
      </ListComment>
      <BasicField placeholderTid="Введите свой отзыв" />
    </Container>
  );
}

const SecondTitle = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
`;
const ListComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;

export function ProductCommentItem(props) {
  const { me = false, id = null, username, date, message } = props;
  return (
    <CommentItemContainer>
      <CommentHeaderContainer>
        {me && <IconButton icon={CommentIcon} />}
        <SecondTitle tid={username} />
        <TextSecondary tid={date} />
        {!me && <IconButton icon={CommentIcon} />}
      </CommentHeaderContainer>
      <CommentText me={me} tid={message} />
      <Divider />
    </CommentItemContainer>
  );
}

const IconButton = styled(ButtonBasic)`
  padding: 0;
  margin: 0 ${spacing(3)};
`;
const CommentHeaderContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(3)};
`;
const CommentItemContainer = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;
const CommentText = styled(TextSecondary)`
  line-height: ${THEME_SIZE.FONT.LARGE};
  ${({ me }) => me && `margin-left: ${spacing(12.3)}`}
`;
