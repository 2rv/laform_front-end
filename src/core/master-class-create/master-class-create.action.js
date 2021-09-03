import { httpRequest } from '../../main/http';
import {
  CREATE_MASTER_CLASS_ACTION_TYPE,
  CREATE_MASTER_CLASS_FIELD_NAME,
} from './master-class-create.type';
import { CREATE_MASTER_CLASS_API } from './master-class-create.constant';
import { convertForUpload } from './master-class-create.convert';

export function createMasterClassUploadData(imagesUrls, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(imagesUrls, formValues);
      console.log(data);

      //----------------------------------------------------------------------

      //   const response = await httpRequest({
      //     method: CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_UPLOAD.TYPE,
      //     url: CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_UPLOAD.ENDPOINT,
      //     data: data,
      //   });

      //----------------------------------------------------------------------

      dispatch({
        type: CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createMasterClassPreUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[CREATE_MASTER_CLASS_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[CREATE_MASTER_CLASS_FIELD_NAME.IMAGES][key][
            CREATE_MASTER_CLASS_FIELD_NAME.IMAGE
          ],
        );
      }
      //   const response = await httpRequest({
      //     method:
      //       CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_IMAGE_PRE_UPLOAD.TYPE,
      //     url: CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_IMAGE_PRE_UPLOAD
      //       .ENDPOINT,
      //     data: formData,
      //   });
      //   dispatch(createMasterClassUploadData(response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
