import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { FieldPrimary } from 'src/lib/element/field';
import { ButtonBasic } from 'src/lib/element/button';
import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { ReactComponent as CommentIcon } from 'src/asset/svg/arrow-for-comment.svg';
const items = [
  {
    me: false,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей.
	Очень удгобная и хорошая вещь, спасибо! Хотелось бы сказать что вещь правда хороашая и дошла очень быстро, буду заказывать ещё. Из минусов – дороговато, всё таки.`,
  },
  {
    me: false,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
  },
  {
    me: true,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
  },
];

export function ProductCommentComponent() {
  return (
    <Container>
      <TitlePrimary tid="Отзывы" />
      <ListComment>
        {items.map((item, index) => {
          return <ProductCommentItem key={item?.id || index} {...item} />;
        })}
        <SecondTitle tid="Написать отзыв" />
      </ListComment>
      <FieldPrimary />
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
// Formik!!!!!!
// Сделать на длинный текст проверку
// Background color есть но его вообще еле видно оставить????
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
