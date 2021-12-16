import styled from 'styled-components';
import { useState } from 'react';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { ReactComponent as CommentIcon } from 'src/asset/svg/arrow-for-comment.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { ReactComponent as ChangeIcon } from 'src/asset/svg/change.svg';
import { ReactComponent as ArrowDownOutlined } from 'src/asset/svg/arrow-down-outlined.svg';
import { ReactComponent as ArrowUpOutlined } from 'src/asset/svg/arrow-up-outlined.svg';
import { SectionLayout } from 'src/lib/element/layout';
import { Divider } from 'src/lib/element/divider';
import { ConvertTime } from 'src/lib/common/time';
import { USER_ROLE } from 'src/lib/common/auth';

export function SubComment(props) {
  const [view, setView] = useState(true);
  const {
    subComment,
    createSubComment,
    handleDeleteSubComment,
    handleEditComment,
    setSubUser,
    userId,
    user,
  } = props;

  const editComment = (id, text) => {
    setSubUser(null);
    handleEditComment(id, text, 'subComment');
  };

  if (subComment.length === 0) return null;
  return (
    <List>
      {/* <ButtonText onClick={() => setView(!view)}>
        {view ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
      </ButtonText> */}
      {view &&
        subComment.map((data, index) => {
          const { id, text, createDate, userId } = data;
          return (
            <Wrapper key={id}>
              <Container>
                {Boolean(user) && (
                  <Button onClick={createSubComment}>
                    <CommentIcon />
                  </Button>
                )}
                <Content>
                  <HeaderCase>
                    <Title tid={userId.login} />
                    <TextLight tid={ConvertTime(createDate)} />
                  </HeaderCase>
                  <TextSecondary tid={text} />
                  <Divider />
                </Content>
              </Container>
              <ActionsCase>
                {(userId?.id === user?.id ||
                  user?.role === USER_ROLE.ADMIN) && (
                  <Button onClick={() => handleDeleteSubComment(id)}>
                    <RemoveIcon />
                  </Button>
                )}
                {userId?.id === user?.id && (
                  <Button onClick={() => editComment(id, text)}>
                    <ChangeIcon />
                  </Button>
                )}
              </ActionsCase>
            </Wrapper>
          );
        })}
    </List>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
  align-items: center;
  padding: 0 ${spacing(8)};
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 100%;
`;
const ButtonText = styled.div`
  width: fit-content;
  padding: 0;
  cursor: pointer;
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
const TextLight = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Button = styled(ButtonBasic)`
  width: fit-content;
  background-color: transparent;
  height: fit-content;
  padding: 0;
`;
const ActionsCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
