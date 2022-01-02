import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { convertForCreate } from './comment.convert';
import {
  COMMENT_ACTION_TYPE,
  CommentActionType,
  CommentValues,
} from './comment.type';

export function getCommentAction(id: string, type: 0 | 1 | 2 | 3 | 4) {
  return async (dispatch: Dispatch<CommentActionType>) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.GET_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url:
          [
            '/comment/get/master-class/',
            '/comment/get/pattern-product/',
            '/comment/get/pattern-product/',
            '/comment/get/sewing-product/',
            '/comment/get/post/',
          ][type] + id,
      });

      dispatch({
        type: COMMENT_ACTION_TYPE.GET_SUCCESS,
        comments: response.data,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function createCommentAction(values: CommentValues) {
  return async (dispatch: Dispatch<CommentActionType>) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.CREATE_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'POST',
        url: '/comment/create',
        data: convertForCreate(values),
      });
      dispatch({
        type: COMMENT_ACTION_TYPE.CREATE_SUCCESS,
        comment: response.data,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.CREATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function updateCommentAction(id: string, value: string) {
  return async (dispatch: Dispatch<CommentActionType>) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.UPDATE_PENDING,
    });
    try {
      await httpRequest({
        method: 'PATCH',
        url: '/comment/update/' + id,
        data: { text: value },
      });

      dispatch({
        type: COMMENT_ACTION_TYPE.UPDATE_SUCCESS,
        id: id,
        text: value,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function deleteCommentAction(id: string) {
  return async (dispatch: Dispatch<CommentActionType>) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.DELETE_PENDING,
    });
    try {
      await httpRequest({
        method: 'DELETE',
        url: '/comment/delete/' + id,
      });
      dispatch({
        type: COMMENT_ACTION_TYPE.DELETE_SUCCESS,
        id: id,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.DELETE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function createSubCommentAction(values: { id: string; value: string }) {
  return async (dispatch: Dispatch<CommentActionType>) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.SUB_CREATE_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'POST',
        url: '/comment/sub/create',
        data: {
          commentId: values.id,
          text: values.value,
        },
      });
      dispatch({
        type: COMMENT_ACTION_TYPE.SUB_CREATE_SUCCESS,
        subComment: response.data,
        id: values.id,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.SUB_CREATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function updateSubCommentAction(
  id: string,
  subId: string,
  value: string,
) {
  return async (dispatch: Dispatch<CommentActionType>) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.SUB_UPDATE_PENDING,
    });
    try {
      await httpRequest({
        method: 'PATCH',
        url: '/comment/sub/update/' + subId,
        data: { text: value },
      });

      dispatch({
        type: COMMENT_ACTION_TYPE.SUB_UPDATE_SUCCESS,
        id: id,
        subId: subId,
        text: value,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.SUB_UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function deleteSubCommentAction(id: string, subId: string) {
  return async (dispatch: Dispatch<CommentActionType>) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.SUB_DELETE_PENDING,
    });
    try {
      await httpRequest({
        method: 'DELETE',
        url: '/comment/sub/delete/' + subId,
      });

      dispatch({
        type: COMMENT_ACTION_TYPE.SUB_DELETE_SUCCESS,
        id: id,
        subId: subId,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.SUB_DELETE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
