import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { TextareaField } from '../../lib/element/field';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ReactComponent as SendIcon } from '../../asset/svg/message-send-icon.svg';
import { ReactComponent as CancelIcon } from '../../asset/svg/cancel-delete-icon.svg';
import { SectionLayout } from '../../lib/element/layout';
import { IconButton, TextButton } from '../../lib/element/button';
import { CommentItem } from './comment.item';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';
import { useEffect, useRef } from 'react';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { SignComponent } from './comment.sign';

export function CommentComponent(props) {
  const {
    user,
    isAuth,
    comments,
    //------------------------------
    onSubmit,
    onSubmitEnter,
    handleChange,
    value,
    textareaRef,
    //------------------------------
    editComment,
    setEditComment,
    handleModesToInitialState,
    subUser,
    handleSetSubUser,
    setSubUser,
    handleDeleteComment,
    handleDeleteSubComment,
    handleEditComment,
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
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.parentNode.scrollTop = messageRef.current.offsetTop;
    }
  }, [comments]);

  const cancelEditing = () => {
    setEditComment({ id: null, type: null });
    textareaRef.current.value = '';
  };

  const cancelReplying = () => {
    setSubUser(null);
    cancelEditing();
  };

  return (
    <SectionLayout>
      {createPending && <LoaderPrimary />}
      <TitlePrimary tid="COMMENTS.REVIEWS" />
      {uploadPending ? (
        <SpinnerCase>
          <Spinner />
        </SpinnerCase>
      ) : Boolean(comments.length > 0) ? (
        <ListComment>
          {comments?.map((data, index) => (
            <CommentItem
              handleDeleteComment={handleDeleteComment}
              handleDeleteSubComment={handleDeleteSubComment}
              handleEditComment={handleEditComment}
              cancelEditing={cancelEditing}
              setSubUser={setSubUser}
              key={data?.id}
              data={data}
              handleSetSubUser={handleSetSubUser}
              user={user}
            />
          ))}
          <div ref={messageRef} />
        </ListComment>
      ) : (
        <TextSecondary tid="COMMENTS.NO_REVIEWS" />
      )}
      {isAuth ? (
        <SectionLayout type="SMALL">
          <HeaderCase>
            <Title tid="COMMENTS.WRITE_REVIEW" />
            {Boolean(subUser) && (
              <Line>
                <div>
                  <LightText tid="COMMENTS.REPLY_USER" />
                  &nbsp;
                  <SubTitle tid={subUser?.user?.login} />
                </div>
                &nbsp;
                <CancelButton tid="COMMENTS.CANCEL" onClick={cancelReplying} />
              </Line>
            )}
          </HeaderCase>
          <Content>
            <TextareaField
              ref={textareaRef}
              disabled={createPending}
              onChange={handleChange}
              onKeyDown={onSubmitEnter}
              value={value}
              maxHeight={200}
              placeholderTid="COMMENTS.WRITE_YOUR_REVIEW"
            />
            <TextareaActionButtons>
              {Boolean(editComment.id) && (
                <Button onClick={cancelEditing}>
                  <CancelIcon />
                </Button>
              )}
              <Button
                onClick={onSubmit}
                disabled={uploadPending || createPending}
              >
                <SendIcon />
              </Button>
            </TextareaActionButtons>
          </Content>
        </SectionLayout>
      ) : (
        <SignComponent />
      )}
    </SectionLayout>
  );
}
const Line = styled.div`
  display: flex;
`;
const CancelButton = styled(TextButton)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  width: fit-content;
  padding: 0;
`;
const HeaderCase = styled.div`
  display: flex;
  gap: ${spacing(1)};
  align-items: baseline;
  flex-wrap: wrap;
`;
const LightText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const SubTitle = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  ::first-letter {
    text-transform: uppercase;
  }
`;
const SpinnerCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextareaActionButtons = styled.div`
  display: flex;
  gap: ${spacing(1)};
  position: absolute;
  right: ${spacing(4)};
`;
const Button = styled(IconButton)`
  width: inherit;
  padding: 0;
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
  max-height: 450px;
  scroll-behavior: smooth;
`;
