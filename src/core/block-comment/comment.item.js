import styled from 'styled-components';
import { ReactComponent as CommentIcon } from 'src/asset/svg/arrow-for-comment.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { ReactComponent as ChangeIcon } from 'src/asset/svg/change.svg';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { ConvertTime } from 'src/lib/common/time';
import { USER_ROLE } from 'src/lib/common/auth';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';
import { SectionLayout } from 'src/lib/element/layout';
import { Divider } from 'src/lib/element/divider';
import { SubComment } from './comment.sub-item';

export function CommentItem(props) {
  const {
    handleSetSubUser,
    handleDeleteComment,
    handleDeleteSubComment,
    handleEditComment,
    cancelEditing,
    setSubUser,
    user,
  } = props;
  const { id, text, createDate, userId, subComment = [] } = props.data;
  const createSubComment = () => {
    handleSetSubUser(userId, id);
    cancelEditing();
  };
  const removeSubComment = (subId) => handleDeleteSubComment(id, subId);
  const editComment = () => {
    handleEditComment(id, text, 'comment');
    setSubUser(null);
  };

  return (
    <Container>
      <Content>
        <HeaderCase>
          <Case>
            <TitleCase>
              <Title tid={userId.login} />
              <TextLight tid={ConvertTime(createDate)} />
            </TitleCase>
            {Boolean(user) && (
              <Button onClick={createSubComment}>
                <CommentIcon />
              </Button>
            )}
          </Case>
          <ActionsCase>
            {(userId?.id === user?.id || user?.role === USER_ROLE.ADMIN) && (
              <Button onClick={() => handleDeleteComment(id)}>
                <RemoveIcon />
              </Button>
            )}
            {userId?.id === user?.id && (
              <Button onClick={editComment}>
                <ChangeIcon />
              </Button>
            )}
          </ActionsCase>
        </HeaderCase>
        <TextSecondary tid={text} />
        <Divider />
        <SubComment
          handleDeleteSubComment={removeSubComment}
          handleEditComment={handleEditComment}
          createSubComment={createSubComment}
          subComment={subComment}
          setSubUser={setSubUser}
          userId={userId}
          user={user}
        />
      </Content>
    </Container>
  );
}
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
