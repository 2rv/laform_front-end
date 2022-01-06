import styled from 'styled-components';
import { ReactComponent as CommentIcon } from 'src/asset/svg/arrow-for-comment.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { ReactComponent as ChangeIcon } from 'src/asset/svg/change.svg';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { ConvertTime } from 'src/lib/common/time';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';
import { Divider } from 'src/lib/element/divider';
import { CommentItemProps } from './comment.type';
import { SubCommentItem } from './comment.sub-item';

export function CommentItem(props: CommentItemProps) {
  const { data, isAdmin, onRemove, onEdit, onSubComment, currentUserId } =
    props;
  const { id, text, createDate, userId, subComment } = data;

  return (
    <Container>
      <Content>
        <HeaderCase>
          <Case>
            <TitleCase>
              <Title tid={userId.login} />
              <TextLight tid={ConvertTime(createDate)} />
            </TitleCase>
            <Button onClick={() => onSubComment({ commentId: id, ...userId })}>
              <CommentIcon />
            </Button>
          </Case>
          <ActionsCase>
            {(isAdmin || currentUserId === userId.id) && (
              <Button onClick={() => onRemove(id)}>
                <RemoveIcon />
              </Button>
            )}
            {(isAdmin || currentUserId === userId.id) && (
              <Button onClick={() => onEdit({ id: id, value: text })}>
                <ChangeIcon />
              </Button>
            )}
          </ActionsCase>
        </HeaderCase>
        <Text tid={text} />
        <Divider />

        <List>
          {subComment.map((data, key) => (
            <SubCommentItem
              key={data?.id || key}
              parentId={id}
              isAdmin={isAdmin}
              currentUserId={currentUserId}
              data={data}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          ))}
        </List>
      </Content>
    </Container>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 100%;
`;
const Text = styled(TextSecondary)`
  word-break: break-word;
`;
const Case = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(2)};
`;
const TitleCase = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(2)};
  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 0;
  }
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: baseline;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(1)};
  line-height: 1.5;
  width: 100%;
  padding-right: ${spacing(6)};
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  ::first-letter {
    text-transform: uppercase;
  }
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
const ActionsCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
