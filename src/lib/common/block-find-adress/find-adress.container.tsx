import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { useSelector } from 'react-redux';
import { FindAdressComponent } from './find-adress.component';
import { FindAdreccContainerProps } from './find-adress.type';
import { getCountry, getCity, getStreet, getHouse } from './find-adress.action';
import { FIND_ADRESS_FIELD_NAME } from '.';

export function FindAdressContainer(props: FindAdreccContainerProps) {
  const { setFieldValue, values, changePostalCode, handleBlur } = props;

  const { currentLang } = useSelector((state: any) => ({
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  const findCountry = (value: string) => getCountry(value, currentLang);
  const findCity = (value: string) => getCity(value, values, currentLang);
  const findStreet = (value: string) => getStreet(value, values, currentLang);
  const findHouse = (value: string) => getHouse(value, values, currentLang);

  const handleChange = (name: string) => (value: any) => {
    if (value.postal_code) {
      setFieldValue(FIND_ADRESS_FIELD_NAME.POSTAL_CODE, value.postal_code);
    }
    setFieldValue(name, value);
  };

  return (
    <FindAdressComponent
      handleChange={handleChange}
      values={values}
      findCountry={findCountry}
      findCity={findCity}
      findStreet={findStreet}
      findHouse={findHouse}
      changePostalCode={changePostalCode}
      handleBlur={handleBlur}
    />
  );
}
