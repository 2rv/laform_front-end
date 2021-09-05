import { httpRequest } from '../../main/http';
import { CREATE_ARTICLE_API } from './article-create.constant';
import { convertForUpload } from './article-create.convert';
import {
  CREATE_ARTICLE_ACTION_TYPE,
  ARTICLE_FIELD_NAME,
} from './article-create.type';

export function createArticleUploadData(imagesUrls, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(imagesUrls, formValues);
      console.log(data);

      //----------------------------------------------------------------------

      //   const response = await httpRequest({
      //     method: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.TYPE,
      //     url: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.ENDPOINT(type),
      //     data: data,
      //   });

      //----------------------------------------------------------------------

      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createArticlePreUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      formData.append(
        'file',
        formValues[ARTICLE_FIELD_NAME.IMAGES][0][ARTICLE_FIELD_NAME.IMAGE],
      );
      //   const response = await httpRequest({
      //     method: CREATE_ARTICLE_API.CREATE_ARTICLE_IMAGE_UPLOAD.TYPE,
      //     url: CREATE_ARTICLE_API.CREATE_ARTICLE_IMAGE_UPLOAD.ENDPOINT,
      //     data: formData,
      //   });
      //   dispatch(createArticleUploadData(response.data, formValues));
      dispatch(createArticleUploadData([1, 2, 3, 4], formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
