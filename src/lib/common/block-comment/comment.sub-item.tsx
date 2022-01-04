import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { ReactComponent as ChangeIcon } from 'src/asset/svg/change.svg';
import { Divider } from 'src/lib/element/divider';
import { ConvertTime } from 'src/lib/common/time';
import { SubCommentItemProps } from './comment.type';

export function SubCommentItem(props: SubCommentItemProps) {
  const { parentId, data, isAdmin, onRemove, onEdit, currentUserId } = props;
  const { id, text, createDate, userId } = data;

  return (
    <Wrapper key={id}>
      <Container>
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
        {isAdmin ||
          (currentUserId === userId.id && (
            <Button onClick={() => onRemove(parentId, id)}>
              <RemoveIcon />
            </Button>
          ))}
        {isAdmin ||
          (currentUserId === userId.id && (
            <Button
              onClick={() =>
                onEdit({
                  value: text,
                  id: parentId,
                  subId: id,
                })
              }
            >
              <ChangeIcon />
            </Button>
          ))}
      </ActionsCase>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
  align-items: center;
  padding: 0 ${spacing(8)};
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
