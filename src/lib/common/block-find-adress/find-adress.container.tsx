import { getRequestData } from 'src/main/store/store.service';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { useDispatch, useSelector } from 'react-redux';
import { FIND_ADRESS_STORE_NAME } from './find-adress.constant';
import { FindAdressComponent } from './find-adress.component';
import React, { useState, useEffect } from 'react';
import { FindAdreccContainerProps } from './find-adress.type';
import { getCountry, getRegion } from './find-adress.action';

export function FindAdressContainer(props: FindAdreccContainerProps) {
  //   const { handleChange, handleBlur } = props;
  const dispatch = useDispatch();
  const {
    currentLang,
    country,
    region,
    city,
    area,
    settlement,
    street,
    house,
  } = useSelector((state: any) => ({
    country: state[FIND_ADRESS_STORE_NAME].country,
    region: state[FIND_ADRESS_STORE_NAME].region,
    city: state[FIND_ADRESS_STORE_NAME].city,
    area: state[FIND_ADRESS_STORE_NAME].area,
    settlement: state[FIND_ADRESS_STORE_NAME].settlement,
    street: state[FIND_ADRESS_STORE_NAME].street,
    house: state[FIND_ADRESS_STORE_NAME].house,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  const [values, setState] = useState({
    country: {
      value: '',
    },
    region: {
      value: '',
    },
    city: {
      value: '',
    },
    area: {
      value: '',
    },
    settlement: {
      value: '',
    },
    street: {
      value: '',
    },
    house: {
      value: '',
    },
  });

  useEffect(() => {
    let time = setTimeout(() => {
      if (values.country.value) {
        dispatch(getCountry(values.country.value, currentLang));
      }
    }, 300);
    return () => clearTimeout(time);
  }, [values.country.value]);

  useEffect(() => {
    let time = setTimeout(() => {
      if (values.region.value) {
        dispatch(
          getRegion(values.region.value, values.country.value, currentLang),
        );
      }
    }, 300);
    return () => clearTimeout(time);
  }, [values.region.value]);

  useEffect(() => {
    let time = setTimeout(() => {
      if (values.region.value) {
        dispatch(
          getRegion(values.region.value, values.country.value, currentLang),
        );
      }
    }, 300);
    return () => clearTimeout(time);
  }, [values.region.value]);

  function onChange(name: string) {
    return (e: React.SyntheticEvent<HTMLInputElement>) => {
      const copy: any = { ...values };
      copy[name].value = e.currentTarget.value;
      setState(copy);
    };
  }

  return (
    <FindAdressComponent
      countryHints={getRequestData(country, [])}
      regionHints={getRequestData(region, [])}
      cityHints={getRequestData(city, [])}
      areaHints={getRequestData(area, [])}
      settlementHints={getRequestData(settlement, [])}
      streetHints={getRequestData(street, [])}
      houseHints={getRequestData(house, [])}
      values={values}
      handleChange={onChange}
    />
  );
}
