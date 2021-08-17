
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { sliderEditLoadData, sliderEditUploadData } from './slider-edit.action';
import { SLIDER_FIELDS_DATA, SLIDER_EDIT_STORE_NAME } from './slider-edit.constant';
import { SliderEditComponent } from './slider-edit.component';
import { sliderEditFormValidation } from './slider-edit.validation';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function SliderEditContainer() {
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[SLIDER_EDIT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
  }));
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [ sliderImage, setSliderImage ] = useState(getRequestData(state.sliderEdit).imageUrl?.fileUrl);

  useEffect(() => {
    dispatch(sliderEditLoadData(currentLang.toLowerCase(), query.sliderId));
  }, []);

  const onSubmitForm = (values) => {
    dispatch(sliderEditUploadData({
      sliderId: query.sliderId,
      headingTextRu: values.fieldTextName,
      buttonTextRu: values.fieldButtonTextName,
      image: sliderImage,
    }));
  };

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

  return (
    <SliderEditComponent
      isPending={isRequestPending(state.sliderEdit)}
      isError={isRequestError(state.sliderEdit)}
      isSuccess={isRequestSuccess(state.sliderEdit)}
      errorMessage={getRequestErrorMessage(state.sliderEdit)}
      sliderData={getRequestData(state.sliderEdit)}
      validation={sliderEditFormValidation}
      pageLoading={pageLoading}
      currentLang={currentLang}
      onSubmitForm={onSubmitForm}
      pickImage={pickImage}
      sliderImage={sliderImage}
      slideFieldsData={SLIDER_FIELDS_DATA(getRequestData(state.sliderEdit))}
    />
  );
}
