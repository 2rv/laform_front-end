import styled from 'styled-components';
import { ReactComponent as SendIcon } from 'src/asset/svg/send.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { TitlePrimary } from 'src/lib/element/title';
import { TextareaField } from 'src/lib/element/field';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { ButtonBasic, IconButton } from 'src/lib/element/button';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { SignComponent } from '../block-comments/comment.sign';
import { CommentComponentProps } from './comment.type';
import { CommentItem } from './comment.item';
import { CenteredSpinner } from 'src/lib/element/spinner';

export function CommentComponent(props: CommentComponentProps) {
  const {
    state: { comments, getPending, createPending },
    isAdmin,
    isAuth,
    onSubmit,
    onSubmitEnter,
    onChange,
    onRemove,
    onEdit,
    value,
    textareaRef,
    isEdit,
    subUser,
    onSubComment,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="COMMENTS.REVIEWS" />
      {getPending && <CenteredSpinner />}
      {isAuth ? null : <SignComponent />}

      {comments.map((data, key) => (
        <CommentItem
          key={data?.id || key}
          data={data}
          isAdmin={isAdmin}
          onRemove={onRemove}
          onEdit={onEdit}
          subUser={subUser}
          onSubComment={onSubComment}
        />
      ))}

      <SectionLayout type="SMALL">
        <HeaderCase>
          <Title tid="COMMENTS.WRITE_REVIEW" />
          {typeof subUser !== 'undefined' && (
            <Line>
              <div>
                <LightText tid="COMMENTS.REPLY_USER" />
                &nbsp;
                <SubTitle tid={subUser.login} />
              </div>
              &nbsp;
              <CancelButton
                tid="COMMENTS.CANCEL"
                onClick={() => onSubComment()}
              />
            </Line>
          )}
        </HeaderCase>

        <Content>
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            onKeyDown={onSubmitEnter}
            maxHeight={200}
            placeholderTid="COMMENTS.WRITE_YOUR_REVIEW"
            disabled={createPending}
          />
          <TextareaActionButtons>
            {Boolean(isEdit.id) && (
              <Button onClick={() => onEdit()}>
                <RemoveIcon />
              </Button>
            )}
            <Button onClick={onSubmit} disabled={getPending || createPending}>
              <SendIcon />
            </Button>
          </TextareaActionButtons>
        </Content>
      </SectionLayout>

      {/* <TextSecondary tid="COMMENTS.NO_REVIEWS" /> */}

      {/* <ListComment>
        <div ref={messageRef} />
      </ListComment>
      */}
    </SectionLayout>
  );
}

const Line = styled.div`
  display: flex;
`;
const CancelButton = styled(ButtonBasic)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  background-color: transparent;
  padding: 0;
  border-radius: 0px;
  width: fit-content;
  height: fit-content;
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
const TextareaActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  right: ${spacing(5)};
  position: absolute;
`;
const Textarea = styled(TextareaField)`
  padding-right: ${spacing(10)};
`;
const Button = styled(IconButton)`
  padding: 0;
  background-color: transparent;
  height: fit-content;
  width: fit-content;
  min-width: fit-content;
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
const SubTitle = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  ::first-letter {
    text-transform: uppercase;
  }
`;
// const ListComment = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: ${spacing(3)};
//   overflow: auto;
//   max-height: 450px;
//   scroll-behavior: smooth;
// `;

//   const messageRef = useRef(null);

//   useEffect(() => {
//     if (messageRef.current) {
//       messageRef.current.parentNode.scrollTop = messageRef.current.offsetTop;
//     }
//   }, [comments]);

//   const cancelEditing = () => {
//     setEditComment({ id: null, type: null });
//     textareaRef.current.value = '';
//   };

//   const cancelReplying = () => {
//     setSubUser(null);
//     cancelEditing();
//   };
//   if (!id || type === null || type === undefined)
//     return <TextPrimary tid="COMMENTS.EMPTY_REVIEW" />;
