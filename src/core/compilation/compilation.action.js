import { httpRequest } from '../../main/http';
import { COMPILATION_API } from './compilation.constant';
import { COMPILATION_ACTION_TYPE } from './compilation.type';

// export function compilationUploadData(currentLang, compilationName) {
//   return async (dispatch) => {
//     dispatch({
//       type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING,
//     });

//     try {
//       const response = await httpRequest({
//         method: COMPILATION_API.COMPILATION_UPLOAD.TYPE,
//         url: COMPILATION_API.COMPILATION_UPLOAD.ENDPOINT(currentLang, compilationName),
//       });

//       const convertedResponseData = [...(response.data || [])].map((data) => ({
//         id: data?.id,
//         name: data?.titleRu,
//         image: data?.imageUrls[0]?.fileUrl,
//         type: compilationName === 'post' ? 0 : compilationName === 'master-class' ? 1 : 0,
//       }));

//       console.log(response.data);
//       console.log('response', convertedResponseData);

//       dispatch({
//         type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS,
//         compilationsData: convertedResponseData,
//       });
//     } catch (err) {
//       if (err.response) {
//         dispatch({
//           type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR,
//           errorMessage: err.response.data.message,
//         });
//       }
//     }
//   };
// }

export function productsLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: COMPILATION_API.COMPILATION_PRODUCTS_LOAD_DATA.TYPE,
        url: COMPILATION_API.COMPILATION_PRODUCTS_LOAD_DATA.ENDPOINT(currentLang),
      });

      const convertedData = response.data.map((data) => ({
        id: data?.id,
        name: data?.titleRu,
        image: data?.imageUrls[0]?.fileUrl,
        type: 0,
      }));

      dispatch({
        type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS,
        products: convertedData,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function masterClassesLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: COMPILATION_API.COMPILATION_MASTER_CLASSES_LOAD_DATA.TYPE,
        url: COMPILATION_API.COMPILATION_MASTER_CLASSES_LOAD_DATA.ENDPOINT(currentLang),
      });

      const convertedData = response.data.map((data) => ({
        id: data?.id,
        name: data?.titleRu,
        image: data?.imageUrls[0]?.fileUrl,
        type: 1,
      }));

      dispatch({
        type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS,
        masterClasses: convertedData,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function articlesLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: COMPILATION_API.COMPILATION_ARTICLES_LOAD_DATA.TYPE,
        url: COMPILATION_API.COMPILATION_ARTICLES_LOAD_DATA.ENDPOINT(currentLang),
      });

      const convertedData = response.data.map((data) => ({
        id: data?.id,
        name: data?.titleRu,
        image: data?.imageUrls[0]?.fileUrl,
        type: 2,
      }));

      dispatch({
        type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS,
        articles: convertedData,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
