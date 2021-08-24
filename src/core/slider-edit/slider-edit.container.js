import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { sliderEditLoadData, sliderEditUploadData, sliderItemRemove } from './slider-edit.action';
import {
  SLIDER_FIELDS_DATA,
  SLIDER_EDIT_STORE_NAME,
} from './slider-edit.constant';
import { SliderEditComponent } from './slider-edit.component';
import { sliderEditFormValidation } from './slider-edit.validation';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';
import { useFormik } from 'formik';
import { redirect } from 'src/main/navigation';

export function SliderEditContainer() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[SLIDER_EDIT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
  }));
  const [sliderImage, setSliderImage] = useState(
    getRequestData(state.sliderEdit).imageUrl?.fileUrl,
  );
  useEffect(() => {
    dispatch(sliderEditLoadData(currentLang.toLowerCase(), query.sliderId));
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
  const removeSlide = () => dispatch(sliderItemRemove(query.sliderId));
  const formikObject = useFormik({
    initialValues: {
      [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT]: getRequestData(state.sliderEdit).headingTextRu,
      [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT]: getRequestData(state.sliderEdit).buttonTextRu,
      [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]: 0,
      [SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]: 0,
      [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]: 0,
      [SLIDER_EDIT_FIELD_NAME.IS_BUTTON]: true,
      [SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]: getRequestData(state.sliderEdit).buttonUrl,
    },
    onSubmit: (values) => {
      dispatch(
        sliderEditUploadData({
          sliderId: query.sliderId,
          headingTextRu: values.titleText,
          buttonTextRu: values.buttonText,
          buttonUrl: values.buttonPath,
          image: sliderImage,
        }),
      );
    },
    enableReinitialize: true,
    sliderEditFormValidation,
  });
  return (
    <SliderEditComponent
      isPending={isRequestPending(state.sliderEdit)}
      isError={isRequestError(state.sliderEdit)}
      isSuccess={isRequestSuccess(state.sliderEdit)}
      errorMessage={getRequestErrorMessage(state.sliderEdit)}
      sliderData={getRequestData(state.sliderEdit)}
      pageLoading={pageLoading}
      currentLang={currentLang}
      pickImage={pickImage}
      removeSlide={removeSlide}
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
