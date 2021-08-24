import { TitlePrimary } from '../../lib/element/title';
import { TextareaField } from '../../lib/element/field';
import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ReactComponent as SendIcon } from '../../asset/svg/message-send-icon.svg';
import { SectionLayout } from '../../lib/element/layout';
import { IconButton } from '../../lib/element/button';
import { CommentItem } from './comment-item';

export function BlockComments(props) {
  const { items } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Отзывы" />
      <ListComment>
        {items.map((data, index) => (
          <CommentItem key={index} data={data} />
        ))}
      </ListComment>
      <SectionLayout type="SMALL">
        <Title tid="Написать отзыв" />
        <IconWrapper>
          <TextareaField maxHeight={200} placeholderTid="Введите свой отзыв" />
          <Button>
            <SendIcon />
          </Button>
        </IconWrapper>
      </SectionLayout>
    </SectionLayout>
  );
}

const Button = styled(IconButton)`
  position: absolute;
  background: none;
  right: ${spacing(1)};
`;
const IconWrapper = styled.div`
  display: grid;
  width: 100%;
  position: relative;
  align-items: center;
  opacity: 1;
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const ListComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  overflow: auto;
  max-height: 250px;
`;
