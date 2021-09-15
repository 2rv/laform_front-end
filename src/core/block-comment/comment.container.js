import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { COMMENT_STORE_NAME } from './comment.constant';
import {
  commentUpload,
  commentCreate,
  subCommentCreate,
  commentDelete,
  subCommentDelete,
} from './comment.actions.js';
import { CommentComponent } from './comment.component.js';
import { convertForCreateComment } from './comment.convert';

export function CommentContainer(props) {
  const dispatch = useDispatch();
  const { id = false, type = false } = props;

  const { comments, create } = useSelector((state) => ({
    comments: state[COMMENT_STORE_NAME].commentState,
    create: state[COMMENT_STORE_NAME].createState,
  }));
  useEffect(() => {
    if (type !== false && id !== false) {
      dispatch(commentUpload(id, type));
    }
  }, [id, type]);

  const textareaRef = useRef(null);
  const [text, setValue] = useState(null);
  const [subUser, setSubUser] = useState(null);
  const onChange = (e) => setValue(e.target.value);

  const onSubmit = () => {
    if (Boolean(!text) || text.length <= 0) return alert('COMMENTS.WRITE_MESSAGE');
    const convertedData = convertForCreateComment(
      id,
      type,
      text,
      subUser?.commentId,
    );
    if (subUser) {
      dispatch(subCommentCreate(convertedData));
    } else {
      dispatch(commentCreate(convertedData));
    }
    textareaRef.current.value = '';
  };

  const onSubmitEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSubmit();
      e.target.value = '';
    }
  };

  const handleSetSubUser = (user, commentId) => setSubUser({ user, commentId });

  const handleDeleteComment = (id) => dispatch(commentDelete(id));
  const handleDeleteSubComment = (id, subId) =>
    dispatch(subCommentDelete(id, subId));

  return (
    <CommentComponent
      comments={getRequestData(comments, [])}
      //--------------------------------------------------------------------
      onSubmit={onSubmit}
      onSubmitEnter={onSubmitEnter}
      handleChange={onChange}
      textareaRef={textareaRef}
      //--------------------------------------------------------------------
      subUser={subUser}
      handleDeleteComment={handleDeleteComment}
      handleDeleteSubComment={handleDeleteSubComment}
      handleSetSubUser={handleSetSubUser}
      setSubUser={setSubUser}
      //--------------------------------------------------------------------
      uploadErrorMessage={getRequestErrorMessage(comments)}
      uploadError={isRequestError(comments)}
      uploadSuccess={isRequestSuccess(comments)}
      uploadPending={isRequestPending(comments)}
      //--------------------------------------------------------------------
      createErrorMessage={getRequestErrorMessage(create)}
      createError={isRequestError(create)}
      createSuccess={isRequestSuccess(create)}
      createPending={isRequestPending(create)}
    />
  );
}
