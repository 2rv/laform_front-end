import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { COMMENT_STORE_NAME } from './comment.constant';
import { commentUpload, commentCreate } from './comment.actions.js';
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

  const [text, setValue] = useState(null);
  const onChange = (e) => setValue(e.target.value);

  const onSubmit = () => {
    if (text.length <= 0) alert('Введите сообщение');
    const convertedData = convertForCreateComment(id, type, text);
    dispatch(commentCreate(convertedData));
  };

  const onSubmitEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSubmit();
      e.target.value = '';
    }
  };

  return (
    <CommentComponent
      comments={getRequestData(comments, [])}
      //--------------------------------------------------------------------
      onSubmit={onSubmit}
      onSubmitEnter={onSubmitEnter}
      handleChange={onChange}
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
