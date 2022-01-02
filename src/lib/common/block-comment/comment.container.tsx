import {
  ChangeEvent,
  KeyboardEventHandler,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import {
  getCommentAction,
  createCommentAction,
  updateCommentAction,
  deleteCommentAction,
  createSubCommentAction,
  updateSubCommentAction,
  deleteSubCommentAction,
} from './comment.actions';
import { CommentComponent } from './comment.component';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import {
  CommentContainerProps,
  COMMENT_ACTION_TYPE,
  CommentStateType,
  CommentActionType,
  CommentEditType,
  SubCommentValues,
} from './comment.type';

const initialState = {
  getPending: false,
  comments: [],
  getError: undefined,

  createPending: false,
  createError: undefined,

  updatePending: false,
  updateError: undefined,

  deletePending: false,
  deleteError: undefined,
};

function CommentReducer(
  state: CommentStateType,
  action: CommentActionType,
): CommentStateType {
  switch (action.type) {
    case COMMENT_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getError: undefined,
      };
    case COMMENT_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        comments: action.comments || [],
      };
    case COMMENT_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case COMMENT_ACTION_TYPE.CREATE_PENDING:
      return {
        ...state,
        createPending: true,
        createError: undefined,
      };
    case COMMENT_ACTION_TYPE.CREATE_SUCCESS:
      state = {
        ...state,
        createPending: false,
      };
      if (action.comment) {
        state.comments.push(action.comment);
      }
      return state;
    case COMMENT_ACTION_TYPE.CREATE_ERROR:
      return {
        ...state,
        createPending: false,
        createError: action.error,
      };

    case COMMENT_ACTION_TYPE.UPDATE_PENDING:
      return {
        ...state,
        updatePending: true,
        updateError: undefined,
      };
    case COMMENT_ACTION_TYPE.UPDATE_SUCCESS:
      return {
        ...state,
        updatePending: false,
        comments: state.comments.map((item) => {
          if (item.id === action.id) {
            item.text = action.text || '';
          }
          return item;
        }),
      };
    case COMMENT_ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        updatePending: false,
        updateError: action.error,
      };

    case COMMENT_ACTION_TYPE.DELETE_PENDING:
      return {
        ...state,
        deletePending: true,
        deleteError: undefined,
      };
    case COMMENT_ACTION_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        deletePending: false,
        comments: state.comments.filter((i) => i.id !== action?.id),
      };
    case COMMENT_ACTION_TYPE.DELETE_ERROR:
      return {
        ...state,
        deletePending: false,
        deleteError: action.error,
      };

    case COMMENT_ACTION_TYPE.SUB_CREATE_PENDING:
      return {
        ...state,
        createPending: true,
        createError: undefined,
      };
    case COMMENT_ACTION_TYPE.SUB_CREATE_SUCCESS:
      return {
        ...state,
        createPending: false,
        comments: state.comments.map((item) => {
          if (item.id === action.id && action.subComment) {
            item.subComment.push(action.subComment);
          }
          return item;
        }),
      };
    case COMMENT_ACTION_TYPE.SUB_CREATE_ERROR:
      return {
        ...state,
        createPending: false,
        createError: action.error,
      };

    case COMMENT_ACTION_TYPE.SUB_UPDATE_PENDING:
      return {
        ...state,
        updatePending: true,
        updateError: undefined,
      };
    case COMMENT_ACTION_TYPE.SUB_UPDATE_SUCCESS:
      return {
        ...state,
        updatePending: false,
        comments: state.comments.map((item) => {
          if (item.id === action.id) {
            item.subComment.map((sItem) => {
              if (sItem.id === action.subId) {
                sItem.text = action.text || '';
              }
              return sItem;
            });
          }
          return item;
        }),
      };
    case COMMENT_ACTION_TYPE.SUB_UPDATE_ERROR:
      return {
        ...state,
        updatePending: false,
        updateError: action.error,
      };

    case COMMENT_ACTION_TYPE.SUB_DELETE_PENDING:
      return {
        ...state,
        deletePending: true,
        deleteError: undefined,
      };
    case COMMENT_ACTION_TYPE.SUB_DELETE_SUCCESS:
      return {
        ...state,
        deletePending: false,
        comments: state.comments.map((item) => {
          if (item.id === action.id) {
            item.subComment = item.subComment.filter(
              (sItem) => sItem.id !== action.subId,
            );
          }
          return item;
        }),
      };
    case COMMENT_ACTION_TYPE.SUB_DELETE_ERROR:
      return {
        ...state,
        deletePending: false,
        deleteError: action.error,
      };

    default:
      return state;
  }
}

export function CommentContainer(props: CommentContainerProps) {
  const { id = undefined, type = undefined } = props;
  const [state, setState] = useReducer(CommentReducer, initialState);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState('');
  const [isEdit, setEdit] = useState<CommentEditType>({
    value: undefined,
    id: undefined,
    subId: undefined,
  });
  const [subComment, setSubComment] = useState<SubCommentValues>(undefined);
  const { isAdmin, isAuth } = useSelector((state: any) => ({
    isAdmin: state[AUTH_STORE_NAME].user?.role === USER_ROLE.ADMIN,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));
  useEffect(() => {
    if (id && type) {
      getCommentAction(id, type)(setState);
    }
  }, [id, type]);

  const createComment = () => {
    if (!textareaRef.current || !id || typeof type === 'undefined') return;
    if (!value || !value.trim()) {
      setValue('');
      return alert('COMMENTS.WRITE_MESSAGE');
    }
    if (typeof isEdit.id !== 'undefined') {
      if (isEdit.subId) {
        updateSubCommentAction(isEdit.id, isEdit.subId, value)(setState);
      } else updateCommentAction(isEdit.id, value)(setState);
      onEdit();
    } else {
      if (typeof subComment !== 'undefined') {
        createSubCommentAction({ id: subComment.commentId, value })(setState);
      } else createCommentAction({ id, type, value })(setState);

      setValue('');
    }
  };
  const deleteComment = (id: string, subId?: string) => {
    if (subId) {
      deleteSubCommentAction(id, subId)(setState);
    } else deleteCommentAction(id)(setState);
  };
  const onSubmitEnter: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (!e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      createComment();
    }
  };
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const onEdit = (props?: CommentEditType) => {
    if (typeof props === 'undefined') {
      setEdit({
        value: undefined,
        id: undefined,
        subId: undefined,
      });
      setValue('');
    } else {
      setEdit(props);
      setValue(props?.value || '');
    }
  };
  const onSubComment = (data?: SubCommentValues) => {
    if (typeof data !== 'undefined') {
      setSubComment(data);
    } else {
      setSubComment(undefined);
    }
  };

  return (
    <CommentComponent
      subUser={subComment}
      onSubComment={onSubComment}
      onSubmit={createComment}
      onRemove={deleteComment}
      onEdit={onEdit}
      onSubmitEnter={onSubmitEnter}
      onChange={onChange}
      value={value}
      isAdmin={isAdmin}
      isAuth={isAuth}
      isEdit={isEdit}
      state={state}
      textareaRef={textareaRef}
    />
  );
}
