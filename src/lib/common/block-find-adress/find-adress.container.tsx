import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
} from 'src/main/store/store.service';
import { findAdressAction } from './find-adress.action';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { useDispatch, useSelector } from 'react-redux';
import { FIND_ADRESS_STORE_NAME } from './find-adress.constant';
import { FindAdressComponent } from './find-adress.component';
import React, { useState, useEffect } from 'react';
export function FindAdressContainer() {
  const dispatch = useDispatch();

  const { adress, currentLang } = useSelector((state: any) => ({
    adress: state[FIND_ADRESS_STORE_NAME].adress,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  const [value, setValue] = useState('');

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (value) {
        dispatch(findAdressAction(value, currentLang));
      }
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <FindAdressComponent
      hints={getRequestData(adress, [])}
      value={value}
      handleChange={handleChange}
    />
  );
}
