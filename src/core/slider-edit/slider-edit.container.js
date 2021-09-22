import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { redirect, getQuery } from '../../main/navigation';
import {
  SLIDER_FIELDS_DATA,
  SLIDER_EDIT_STORE_NAME,
} from './slider-edit.constant';
import { SliderEditComponent } from './slider-edit.component';
import { sliderEditFormValidation } from './slider-edit.validation';
import { convertSliderEditFormData } from './slider-edit.convert';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import {
  sliderEditLoadData,
  sliderEditUploadData,
  sliderEditRemove,
  createSlider,
  sliderEditUpdateImage,
} from './slider-edit.action';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';

export function SliderEditContainer() {
  const dispatch = useDispatch();
  const sliderId = getQuery('id');
  const isNewSlider = sliderId === 'new';
  const { state, pageLoading, currentLang, user } = useSelector((state) => ({
    state: state[SLIDER_EDIT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
    user: state[AUTH_STORE_NAME].user,
  }));
  const sliderData = getRequestData(state.sliderEdit);
  const [isImageUploadError, setIsImageUploadError] = useState(false);

  useEffect(() => {
    if (user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
    dispatch(
      sliderEditLoadData(currentLang.toLowerCase(), sliderId, isNewSlider),
    );
  }, []);

  const pickImage = ({ target: { files } }) => {
    if (files && files[0] && files[0].type.split('/')[0] === 'image') {
      const reader = new FileReader();
      reader.onload = () =>
        dispatch(
          sliderEditUpdateImage({
            id: null,
            fileUrl: reader?.result,
            file: files[0],
          }),
        );
      reader.readAsDataURL(files[0]);
      setIsImageUploadError(false);
    }
  };

  const removeSlider = () => {
    if (isNewSlider) {
      redirect(SLIDER_LIST_ROUTE_PATH);
    } else {
      dispatch(sliderEditRemove(sliderId));
    }
  };

  const initialValues = {
    [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT]: sliderData.headingTextRu,
    [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT]: sliderData.buttonTextRu,
    [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]: sliderData.titleTextColor,
    [SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]: sliderData.buttonColor,
    [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]: sliderData.buttonTextColor,
    [SLIDER_EDIT_FIELD_NAME.IS_BUTTON]: sliderData.isHaveButton,
    [SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]: sliderData.buttonUrl,
  };

  const onSubmit = (values) => {
    if (!sliderData.image?.fileUrl) {
      setIsImageUploadError(true);
      return;
    }

    const data = convertSliderEditFormData(values);

    if (isNewSlider) {
      dispatch(createSlider(sliderData.image, data));
    } else {
      dispatch(sliderEditUploadData(sliderId, sliderData.image, data));
    }
  };

  const formikObject = useFormik({
    enableReinitialize: true,
    validate: sliderEditFormValidation,
    initialValues,
    onSubmit,
  });

  return (
    <SliderEditComponent
      isPending={isRequestPending(state.sliderEdit)}
      isError={isRequestError(state.sliderEdit)}
      isSuccess={isRequestSuccess(state.sliderEdit)}
      errorMessage={getRequestErrorMessage(state.sliderEdit)}
      pageLoading={pageLoading}
      currentLang={currentLang}
      pickImage={pickImage}
      removeSlider={removeSlider}
      isNewSlider={isNewSlider}
      sliderImage={sliderData.image?.fileUrl}
      titleTextColorOptions={titleTextColorOptions}
      buttonColorOptions={buttonColorOptions}
      buttonTextColorOptions={buttonTextColorOptions}
      formikObject={formikObject}
      isImageUploadError={isImageUploadError}
    />
  );
}

const titleTextColorOptions = [
  { id: 0, tid: 'белый', color: '#fff' },
  { id: 1, tid: 'Чёрный', color: '#2f2a2c' },
  { id: 2, tid: 'Красный', color: '#ff005a' },
  { id: 3, tid: 'Зелёный', color: '#9EDE73' },
  { id: 4, tid: 'Синий', color: '#3D56B2' },
];

const buttonColorOptions = [
  { id: 0, tid: 'Оранжевый', color: '#FF7600' },
  { id: 1, tid: 'Синий', color: '#3D56B2' },
  { id: 2, tid: 'белый', color: '#fff' },
  { id: 3, tid: 'Красный', color: '#ff005a' },
  { id: 4, tid: 'Желтый', color: '#FFF338' },
];

const buttonTextColorOptions = [
  { id: 0, tid: 'Синий', color: '#3D56B2' },
  { id: 1, tid: 'Серый', color: '#5f5b5d' },
  { id: 2, tid: 'Красный', color: '#ff005a' },
  { id: 3, tid: 'Голубой', color: '#6F69AC' },
  { id: 4, tid: 'Фиолетовый', color: '#4B3869' },
];
