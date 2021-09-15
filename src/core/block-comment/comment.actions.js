import { useSelector } from 'react-redux';
import { httpRequest } from '../../main/http';
import { COMMENT_API, COMMENT_STORE_NAME } from './comment.constant';
import { COMMENT_ACTION_TYPE } from './comment.type';

export function commentUpload(id, type) {
  return async (dispatch) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.COMMENT_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: COMMENT_API.COMMENT_UPLOAD.TYPE,
        url: COMMENT_API.COMMENT_UPLOAD.ENDPOINT(id, type),
      });

      const data = response.data;

      dispatch({
        type: COMMENT_ACTION_TYPE.COMMENT_UPLOAD_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.COMMENT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function commentCreate(convertedData) {
  return async (dispatch) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.COMMENT_CREATE_PENDING,
    });
    try {
      const response = await httpRequest({
        method: COMMENT_API.COMMENT_CREATE.TYPE,
        url: COMMENT_API.COMMENT_CREATE.ENDPOINT,
        data: convertedData,
      });

      const data = response.data;

      dispatch({
        type: COMMENT_ACTION_TYPE.COMMENT_CREATE_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.COMMENT_CREATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function subCommentCreate(convertedData) {
  return async (dispatch, getState) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.COMMENT_CREATE_PENDING,
    });
    try {
      const response = await httpRequest({
        method: COMMENT_API.SUB_COMMENT_CREATE.TYPE,
        url: COMMENT_API.SUB_COMMENT_CREATE.ENDPOINT,
        data: convertedData,
      });
      const comments = getState()[COMMENT_STORE_NAME].commentState.data;
      const currentComment = comments.find(
        (item) => item.id === convertedData.commentId,
      );
      currentComment.subComment.push(response.data);
      dispatch({
        type: COMMENT_ACTION_TYPE.SUB_COMMENT_CREATE_SUCCESS,
        data: comments,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.COMMENT_CREATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function commentDelete(commentId) {
  return async (dispatch, getState) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.COMMENT_CREATE_PENDING,
    });
    try {
      await httpRequest({
        method: COMMENT_API.COMMENT_DELETE.TYPE,
        url: COMMENT_API.COMMENT_DELETE.ENDPOINT(commentId),
      });
      const comments = getState()[COMMENT_STORE_NAME].commentState.data;
      const filteredComments = comments.filter((i) => i.id !== commentId);
      dispatch({
        type: COMMENT_ACTION_TYPE.SUB_COMMENT_CREATE_SUCCESS,
        data: filteredComments,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.COMMENT_CREATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function subCommentDelete(currentCommentId, commentId) {
  return async (dispatch, getState) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.COMMENT_CREATE_PENDING,
    });
    try {
      await httpRequest({
        method: COMMENT_API.SUB_COMMENT_DELETE.TYPE,
        url: COMMENT_API.SUB_COMMENT_DELETE.ENDPOINT(commentId),
      });
      const comments = getState()[COMMENT_STORE_NAME].commentState.data;
      const currentComment = comments.find((i) => i.id === currentCommentId);
      currentComment.subComment = currentComment.subComment.filter(
        (i) => i.id !== commentId,
      );
      dispatch({
        type: COMMENT_ACTION_TYPE.SUB_COMMENT_CREATE_SUCCESS,
        data: comments,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.COMMENT_CREATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function commentUpdate(id, text) {
  return async (dispatch) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.COMMENT_UPDATE_PENDING,
    });
    try {
      const response = await httpRequest({
        method: COMMENT_API.COMMENT_UPDATE.TYPE,
        url: COMMENT_API.COMMENT_UPDATE.ENDPOINT(id),
        data: { text },
      });

      dispatch({
        type: COMMENT_ACTION_TYPE.COMMENT_UPDATE_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.COMMENT_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function subCommentUpdate(id, text) {
  return async (dispatch) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.SUB_COMMENT_UPDATE_PENDING,
    });
    try {
      const response = await httpRequest({
        method: COMMENT_API.SUB_COMMENT_UPDATE.TYPE,
        url: COMMENT_API.SUB_COMMENT_UPDATE.ENDPOINT(id),
        data: { text },
      });

      dispatch({
        type: COMMENT_ACTION_TYPE.SUB_COMMENT_UPDATE_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.SUB_COMMENT_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
