import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { redirect } from '../../main/navigation';
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
import { NEW_SLIDER_FORM_DATA, SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';

export function SliderEditContainer() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const isNewSlider = query.sliderId === 'new';
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[SLIDER_EDIT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
  }));
  const sliderData = getRequestData(state.sliderEdit);
  const [isImageUploadError, setIsImageUploadError] = useState(false);

  useEffect(() => {
    dispatch(sliderEditLoadData(currentLang.toLowerCase(), query.sliderId, isNewSlider));
  }, []);

  const pickImage = ({ target: { files } }) => {
    if (files && files[0] && files[0].type.split('/')[0] === 'image') {
      const reader = new FileReader();
      reader.onload = () => dispatch(sliderEditUpdateImage({
        id: null,
        fileUrl: reader?.result
      }));
      reader.readAsDataURL(files[0]);
      setIsImageUploadError(false);
    }
  };

  const removeSlider = () => {
    if (isNewSlider) {
      redirect(SLIDER_LIST_ROUTE_PATH);
    } else {
      dispatch(sliderEditRemove(query.sliderId));
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
    if (!sliderData.image.fileUrl) {
      setIsImageUploadError(true);
      return;
    }

    const data = convertSliderEditFormData(values);

    if (isNewSlider) {
      dispatch(createSlider(sliderData.image, data));
    } else {
      dispatch(sliderEditUploadData(query.sliderId, sliderData.image, data));
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
  { id: 0, tid: 'белый', color: 'white' },
  { id: 1, tid: 'Чёрный', color: 'black' },
  { id: 2, tid: 'Красный', color: 'red' },
  { id: 3, tid: 'Зелёный', color: 'green' },
  { id: 4, tid: 'Синий', color: 'blue' },
];

const buttonColorOptions = [
  { id: 0, tid: 'Оранжевый', color: 'orange' },
  { id: 1, tid: 'Синий', color: 'blue' },
  { id: 2, tid: 'белый', color: 'white' },
  { id: 3, tid: 'Красный', color: 'red' },
  { id: 4, tid: 'Желтый', color: 'yellow' },
];

const buttonTextColorOptions = [
  { id: 0, tid: 'Синий', color: 'blue' },
  { id: 1, tid: 'Серый', color: 'gray' },
  { id: 2, tid: 'Красный', color: 'red' },
  { id: 3, tid: 'Голубой', color: 'indigo' },
  { id: 4, tid: 'Фиолетовый', color: 'purple' },
];
