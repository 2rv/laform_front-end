import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
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
} from './slider-edit.action';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';
import { useFormik } from 'formik';

export function SliderEditContainer() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[SLIDER_EDIT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
  }));
  const sliderData = getRequestData(state.sliderEdit, []);
  const [sliderImage, setSliderImage] = useState(sliderData.imageUrl?.fileUrl);

  useEffect(() => {
    if (query.sliderId.includes('-')) {
      dispatch(sliderEditLoadData(currentLang.toLowerCase(), query.sliderId));
    }
  }, []);

  const pickImage = ({ target: { files } }) => {
    if (files[0].type.split('/')[0] !== 'image') {
      alert('Please upload only image');
      return;
    }

    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => setSliderImage(reader?.result);
      reader.readAsDataURL(files[0]);
    }
  };

  const removeSlider = () => {
    if (query.sliderId.includes('-')) {
      dispatch(sliderEditRemove(query.sliderId));
    } else {
      redirect(SLIDER_LIST_ROUTE_PATH);
      window.location.reload();
    }
  };

  const formikObject = useFormik({
    enableReinitialize: true,
    validate: sliderEditFormValidation,
    initialValues: {
      [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT]: sliderData.headingTextRu ?? '',
      [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT]: sliderData.buttonTextRu ?? '',
      [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]: 0,
      [SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]: 0,
      [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]: 0,
      [SLIDER_EDIT_FIELD_NAME.IS_BUTTON]: true,
      [SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]: sliderData.buttonUrl ?? '',
    },
    onSubmit: (values, { resetForm }) => {
      const data = convertSliderEditFormData(values);

      if (sliderData.id === query.sliderId) {
        dispatch(sliderEditUploadData(query.sliderId, sliderImage, data));
      } else {
        dispatch(createSlider(sliderImage, data));
      }

      resetForm({});
    },
  });

  return (
    <SliderEditComponent
      isPending={isRequestPending(state.sliderEdit)}
      isError={isRequestError(state.sliderEdit)}
      isSuccess={isRequestSuccess(state.sliderEdit)}
      errorMessage={getRequestErrorMessage(state.sliderEdit)}
      sliderData={sliderData}
      pageLoading={pageLoading}
      currentLang={currentLang}
      pickImage={pickImage}
      removeSlider={removeSlider}
      sliderImage={sliderImage}
      titleTextColorOptions={titleTextColorOptions}
      buttonColorOptions={buttonColorOptions}
      buttonTextColorOptions={buttonTextColorOptions}
      formikObject={formikObject}
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
  { id: 0, tid: 'Синой', color: 'blue' },
  { id: 1, tid: 'Серый', color: 'gray' },
  { id: 2, tid: 'Красный', color: 'red' },
  { id: 3, tid: 'Голубой', color: 'indigo' },
  { id: 4, tid: 'Фиолетовый', color: 'purple' },
];
