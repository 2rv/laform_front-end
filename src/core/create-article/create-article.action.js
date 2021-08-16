import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation';

import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';;
import { CREATE_ARTICLE_API } from './create-article.constant';
import { CREATE_ARTICLE_ACTION_TYPE } from './create-article.type';

export function createArticleUploadData(images = [], description) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_PENDING,
    });

    try {
      const imageIds = await fileUpload(images);
      await uploadArticle(imageIds, description);
      dispatch({ type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_SUCCESS });
      redirect(MASTER_CLASSES_ROUTE_PATH);
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

const fileUpload = async (images) => {
  try {
    const promise = images.map(async (image) => {
      const formData = new FormData();
      formData.append('file', image);

      return await httpRequest({
        method: CREATE_ARTICLE_API.IMAGE_UPLOAD.TYPE,
        url: CREATE_ARTICLE_API.IMAGE_UPLOAD.ENDPOINT,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    });

    return Promise
      .all(promise)
      .then((responses) => responses.map((response) => response.data.id));
  } catch (err) {
    if (err.response) {
      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_ERROR,
        errorMessage: err.response.data.message,
      });
    }
  }
}

const uploadArticle = async (imageIds, description) => {
  try {
    await httpRequest({
      method: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.TYPE,
      url: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.ENDPOINT,
      data: {
        titleEn: "test",
        titleRu: "test",
        descriptionEn: "test",
        price: 0,
        descriptionRu: description,
        imageUrls: imageIds,
      },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_ERROR,
        errorMessage: err.response.data.message,
      });
    }
  }
}
