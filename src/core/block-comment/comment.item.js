import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { TextSecondary } from '../../lib/element/text';
import { ButtonBasic } from '../../lib/element/button';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ReactComponent as CommentIcon } from '../../asset/svg/arrow-for-comment.svg';
import { ReactComponent as DeleteIcon } from '../../asset/svg/delete-cancel-icon.svg';
import { SectionLayout } from '../../lib/element/layout';
import { Divider } from '../../lib/element/divider';
import moment from 'moment';
import { SubComment } from './comment.sub-item';

export function CommentItem(props) {
  const { handleSetSubUser, handleDeleteComment, handleDeleteSubComment } =
    props;
  const { id, text, createDate, userId, subComment = [] } = props.data;
  const createSubComment = () => handleSetSubUser(userId, id);
  const removeSubComment = (subId) => handleDeleteSubComment(id, subId);
  return (
    <Container>
      <Content>
        <HeaderCase>
          <Case>
            <Title tid={userId.login} />
            <TextLight
              tid={moment(createDate).locale('ru').startOf('hour').fromNow()}
            />
            <Button onClick={createSubComment}>
              <CommentIcon />
            </Button>
          </Case>
          <Button onClick={() => handleDeleteComment(id)}>
            <DeleteIcon />
          </Button>
        </HeaderCase>
        <TextSecondary tid={text} />
        <Divider />
        <SubComment
          handleDeleteSubComment={removeSubComment}
          createSubComment={createSubComment}
          subComment={subComment}
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
