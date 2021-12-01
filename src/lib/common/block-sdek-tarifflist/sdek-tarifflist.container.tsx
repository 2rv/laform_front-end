import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SdekTariffListComponent } from './sdek-tarifflist.component';
import { SDEK_TARIFFLIST_STORE_NAME } from './sdek-tarifflist.constant';
import { getTariffList, getTariff } from './sdek-tarifflist.action';
import {
  basicTariffType,
  SdekTariffListContainerProps,
  SdekTariffListType,
} from './sdek-tarifflist.type';

export function SdekTariffListContainer(props: SdekTariffListContainerProps) {
  const { data, value, onChange, name } = props;
  const dispatch = useDispatch();
  const store: SdekTariffListType = useSelector(
    (state: any) => state[SDEK_TARIFFLIST_STORE_NAME],
  );
  useEffect(() => {
    if (data?.location?.city_code) {
      dispatch(getTariffList(data?.location?.city_code));
    }
    onChange(name, '');
  }, [data?.location]);

  useEffect(() => {
    onChange(name, store.sdekTariff);
  }, [store.sdekTariff]);

  function handleChange(value: basicTariffType) {
    dispatch(getTariff(data?.location?.city_code, value));
  }

  return (
    <SdekTariffListComponent
      value={value}
      onChange={handleChange}
      store={store}
    />
  );
}
