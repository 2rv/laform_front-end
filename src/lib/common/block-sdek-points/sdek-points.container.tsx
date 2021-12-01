import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SdekPointsComponent } from './sdek-points.component';
import { SDEK_POINTS_STORE_NAME } from './sdek-points.constant';
import { getPickUpPoint } from './sdek-points.action';
import {
  sdekPointsType,
  SdekPointsContainerProps,
  basicSdekPoints,
} from './sdek-points.type';

export function SdekPointsContainer(props: SdekPointsContainerProps) {
  const { data, value, onChange, name } = props;
  const dispatch = useDispatch();
  const store: sdekPointsType = useSelector(
    (state: any) => state[SDEK_POINTS_STORE_NAME],
  );
  useEffect(() => {
    if (data.kladr_id) {
      dispatch(getPickUpPoint(data.kladr_id));
    }
    onChange(name, '');
  }, [data.kladr_id]);

  function handleChange(value: basicSdekPoints) {
    onChange(name, value);
  }

  return (
    <SdekPointsComponent value={value} onChange={handleChange} store={store} />
  );
}
