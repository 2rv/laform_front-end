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
  commentUpdate,
  subCommentUpdate,
} from './comment.actions.js';
import { CommentComponent } from './comment.component.js';
import { convertForCreateComment } from './comment.convert';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { TextPrimary } from 'src/lib/element/text';

export function CommentContainer(props) {
  const { id = false, type = false } = props;

  if (!id || type === false || type === null || type === undefined)
    return <TextPrimary tid="COMMENTS.EMPTY_REVIEW" />;

  const dispatch = useDispatch();
  const { comments, create, user, isAuth } = useSelector((state) => ({
    comments: state[COMMENT_STORE_NAME].commentState,
    create: state[COMMENT_STORE_NAME].createState,
    user: state[AUTH_STORE_NAME].user,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));
  useEffect(() => {
    if (type !== false && id !== false) {
      dispatch(commentUpload(id, type));
    }
  }, [id, type]);

  const textareaRef = useRef(null);
  const [text, setValue] = useState(null);
  const [subUser, setSubUser] = useState(null);
  const [editComment, setEditComment] = useState({ id: null, type: null });
  const onChange = (e) => setValue(e.target.value);

  const onSubmit = () => {
    if (Boolean(!text) || text.length <= 0)
      return alert('COMMENTS.WRITE_MESSAGE');

    if (Boolean(editComment.id)) {
      editCommentHandler();
    } else {
      createCommentHandler();
    }

    setSubUser(null);
    textareaRef.current.value = '';
  };

  const createCommentHandler = () => {
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
  };

  const editCommentHandler = () => {
    if (editComment.type === 'comment') {
      dispatch(commentUpdate(editComment.id, textareaRef.current.value));
    } else if (editComment.type === 'subComment') {
      dispatch(subCommentUpdate(editComment.id, textareaRef.current.value));
    }

    setEditComment({ id: null, type: null });
  };

  const onSubmitEnter = (e) => {
    if (e.keyCode === 13) {
      e.target.style.height = 'auto';
      e.preventDefault();
      onSubmit();
      e.target.value = '';
    }
  };

  const handleSetSubUser = (user, commentId) => setSubUser({ user, commentId });

  const handleDeleteComment = (id) => dispatch(commentDelete(id));
  const handleDeleteSubComment = (id, subId) =>
    dispatch(subCommentDelete(id, subId));

  const handleEditComment = (id, commentText, type) => {
    textareaRef.current.value = commentText;
    setEditComment({ id, type });
  };

  return (
    <CommentComponent
      user={user}
      isAuth={isAuth}
      comments={getRequestData(comments, [])}
      //--------------------------------------------------------------------
      onSubmit={onSubmit}
      onSubmitEnter={onSubmitEnter}
      handleChange={onChange}
      textareaRef={textareaRef}
      //--------------------------------------------------------------------
      editComment={editComment}
      setEditComment={setEditComment}
      subUser={subUser}
      handleDeleteComment={handleDeleteComment}
      handleDeleteSubComment={handleDeleteSubComment}
      handleSetSubUser={handleSetSubUser}
      handleEditComment={handleEditComment}
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
