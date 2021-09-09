import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { TextareaField } from '../../lib/element/field';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ReactComponent as SendIcon } from '../../asset/svg/message-send-icon.svg';
import { SectionLayout } from '../../lib/element/layout';
import { IconButton } from '../../lib/element/button';
import { CommentItem } from './comment.item';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';

export function CommentComponent(props) {
  const {
    comments,
    //------------------------------
    onSubmit,
    onSubmitEnter,
    handleChange,
    value,
    //------------------------------
    uploadErrorMessage,
    uploadError,
    uploadSuccess,
    uploadPending,
    //------------------------------
    createErrorMessage,
    createError,
    createSuccess,
    createPending,
  } = props;
  return (
    <SectionLayout>
      {createPending && <LoaderPrimary />}
      <TitlePrimary tid="Отзывы" />
      {uploadPending ? (
        <SpinnerCase>
          <Spinner />
        </SpinnerCase>
      ) : (
        <ListComment>
          {comments.map((data, index) => (
            <CommentItem key={index} data={data} />
          ))}
        </ListComment>
      )}
      <SectionLayout type="SMALL">
        <Title tid="Написать отзыв" />
        <Content>
          <TextareaField
            disabled={createPending}
            onChange={handleChange}
            onKeyDown={onSubmitEnter}
            value={value}
            maxHeight={200}
            placeholderTid="Введите свой отзыв"
          />
          <Button onClick={onSubmit} disabled={uploadPending || createPending}>
            <SendIcon />
          </Button>
        </Content>
      </SectionLayout>
    </SectionLayout>
  );
}
const SpinnerCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled(IconButton)`
  position: absolute;
  background: none;
  right: ${spacing(1)};
`;
const Content = styled.div`
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
