import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { useSelector } from 'react-redux';
import { FindAdressComponent } from './find-adress.component';
import { adressValueType, FindAdreccContainerProps } from './find-adress.type';
import {
  getCountry,
  getCity,
  getStreet,
  getHouse,
  getPostalIndex,
} from './find-adress.action';
import { FIND_ADRESS_FIELD_NAME } from './find-adress.type';

export function FindAdressContainer(props: FindAdreccContainerProps) {
  const { setFieldValue, values } = props;

  const { currentLang } = useSelector((state: any) => ({
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  const findCountry = (value: string) => getCountry(value, currentLang);
  const findCity = (value: string) => getCity(value, values, currentLang);
  const findStreet = (value: string) => getStreet(value, values, currentLang);
  const findHouse = (value: string) => getHouse(value, values, currentLang);
  const findIndex = (value: string) => getPostalIndex(value, values);
  const handleChange = (name: string) => (value: adressValueType) => {
    const fullAdress = {
      ...values[FIND_ADRESS_FIELD_NAME.FULL_ADRESS],
      ...value,
    };
    setFieldValue(name, value);
    setFieldValue(FIND_ADRESS_FIELD_NAME.FULL_ADRESS, fullAdress);
  };

  return (
    <FindAdressComponent
      values={values}
      handleChange={handleChange}
      findCountry={findCountry}
      findCity={findCity}
      findStreet={findStreet}
      findHouse={findHouse}
      findIndex={findIndex}
    />
  );
}
