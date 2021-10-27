import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../main/store/store.service';
import { LANG_STORE_NAME } from '../lang';
import { RecomendationComponent } from './recomendation.component';
import { recommendationContainerProps } from './recomendation.type';
import { productsUploadData } from './recomendation.action';
import { RECOMENDATION_STORE_NAME } from './recomendation.constant';

export function RecomendationContainer(props: recommendationContainerProps) {
  const { values, name, setFieldValue } = props;
  const dispatch = useDispatch();
  const { productsState, currentLang } = useSelector((state: any) => ({
    productsState: state[RECOMENDATION_STORE_NAME].productsState,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  const listItems = getRequestData(productsState, []);

  const handleChange = (id: string, type: number, status: boolean) => {
    if (values.length >= 3 && status) {
      alert('Максимум 3 рекомендации');
      return false;
    }
    if (status) {
      if (type === 0)
        setFieldValue(name, [...values, { type, masterClassId: { id } }]);
      if (type === 1)
        setFieldValue(name, [...values, { type, patternProductId: { id } }]);
      if (type === 2)
        setFieldValue(name, [...values, { type, patternProductId: { id } }]);
      if (type === 3)
        setFieldValue(name, [...values, { type, sewingProductId: { id } }]);
      if (type === 4)
        setFieldValue(name, [...values, { type, postId: { id } }]);
    } else {
      const result = values.filter((item: any) => {
        if (item.type === 0) return item.masterClassId.id !== id;
        if (item.type === 1) return item.patternProductId.id !== id;
        if (item.type === 2) return item.patternProductId.id !== id;
        if (item.type === 3) return item.sewingProductId.id !== id;
        if (item.type === 4) return item.postId.id !== id;
      });
      setFieldValue(name, result);
    }
    return true;
  };

  function checkOnSelect() {
    const result = listItems.filter((item: any) => {
      if (item.type === 0)
        return Boolean(values.find((i: any) => i.masterClassId.id === item.id));
      if (item.type === 1)
        return Boolean(
          values.find((i: any) => i.patternProductId.id === item.id),
        );
      if (item.type === 2)
        return Boolean(
          values.find((i: any) => i.patternProductId.id === item.id),
        );
      if (item.type === 3)
        return Boolean(
          values.find((i: any) => i.sewingProductId.id === item.id),
        );
      if (item.type === 4)
        return Boolean(values.find((i: any) => i.postId.id === item.id));
    });

    return result;
  }

  useEffect(() => {
    dispatch(productsUploadData(currentLang));
  }, []);

  return (
    <RecomendationComponent
      errorMessage={getRequestErrorMessage(productsState)}
      isError={isRequestError(productsState)}
      isPending={isRequestPending(productsState)}
      isSuccess={isRequestSuccess(productsState)}
      listItems={listItems}
      selectedItems={checkOnSelect()}
      handleChange={handleChange}
    />
  );
}
