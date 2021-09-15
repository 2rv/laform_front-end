import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { TextSecondary } from '../../lib/element/text';
import { ButtonBasic, TextButton } from '../../lib/element/button';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ReactComponent as CommentIcon } from '../../asset/svg/arrow-for-comment.svg';
import { ReactComponent as DeleteIcon } from '../../asset/svg/delete-cancel-icon.svg';
import { SectionLayout } from '../../lib/element/layout';
import { Divider } from '../../lib/element/divider';
import moment from 'moment';
import { useState } from 'react';

export function SubComment(props) {
  const [view, setView] = useState(false);
  const { subComment, createSubComment, handleDeleteSubComment } = props;

  if (subComment.length === 0) return null;
  return (
    <List>
      <ButtonText
        onClick={() => setView(!view)}
        tid={view ? 'Закрыть' : 'Открыть'}
      />
      {view &&
        subComment.map((data, index) => {
          const { id, text, createDate, userId } = data;
          return (
            <Wrapper>
              <Container key={id}>
                <Button onClick={createSubComment}>
                  <CommentIcon />
                </Button>
                <Content key={index}>
                  <HeaderCase>
                    <Title tid={userId.login} />
                    <TextLight
                      tid={moment(createDate)
                        .locale('ru')
                        .startOf('hour')
                        .fromNow()}
                    />
                  </HeaderCase>
                  <TextSecondary tid={text} />
                  <Divider />
                </Content>
              </Container>
              <Button onClick={() => handleDeleteSubComment(id)}>
                <DeleteIcon />
              </Button>
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
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 100%;
`;
const ButtonText = styled(TextButton)`
  width: fit-content;
  padding: 0;
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
  width: 100px;
  background-color: transparent;
  height: fit-content;
  padding: 0;
`;