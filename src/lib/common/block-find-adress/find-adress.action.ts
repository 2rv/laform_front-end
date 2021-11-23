import { httpRequest } from 'src/main/http';
import { FIND_ADRESS_API } from './find-adress.constant';
import { FIND_ADRESS_FIELD_NAME } from './find-adress.type';
export async function getCountry(value: string, currentLang: string) {
  const response = await httpRequest({
    url: FIND_ADRESS_API.URL,
    method: FIND_ADRESS_API.TYPE,
    data: {
      query: value,
      count: 20,
      language: currentLang,
      from_bound: { value: 'country' },
      to_bound: { value: 'country' },
      locations: [
        {
          country_iso_code: '*',
        },
      ],
    },
  });
  return response.data.suggestions.map((item: any) => ({
    country: item.data.country,
    label: item.value,
  }));
}
export async function getCity(value: string, values: any, currentLang: string) {
  const { country } = values[FIND_ADRESS_FIELD_NAME.COUNTRY];

  const response = await httpRequest({
    url: FIND_ADRESS_API.URL,
    method: FIND_ADRESS_API.TYPE,
    data: {
      query: value,
      count: 20,
      language: currentLang,
      from_bound: { value: 'city' },
      to_bound: { value: 'settlement' },
      locations: [
        {
          country: country,
        },
      ],
    },
  });
  return response.data.suggestions.map((item: any) => ({
    label: item.value,
    city: item.data.city,
    postal_code: item.data.postal_code,
    city_fias_id: item.data.city_fias_id,
    settlement: item.data.settlement,
    settlement_fias_id: item.data.settlement_fias_id,
    fullData: item,
  }));
}
export async function getStreet(
  value: string,
  values: any,
  currentLang: string,
) {
  const { city_fias_id, settlement_fias_id } =
    values[FIND_ADRESS_FIELD_NAME.CITY];

  const response = await httpRequest({
    url: FIND_ADRESS_API.URL,
    method: FIND_ADRESS_API.TYPE,
    data: {
      query: value,
      count: 20,
      language: currentLang,
      from_bound: { value: 'street' },
      to_bound: { value: 'street' },
      locations: [
        {
          settlement_fias_id: settlement_fias_id,
        },
        {
          city_fias_id: city_fias_id,
        },
      ],
    },
  });
  return response.data.suggestions.map((item: any) => ({
    label: item.data.street,
    postal_code: item.data.postal_code,
    street: item.data.street,
    street_fias_id: item.data.street_fias_id,
    fullData: item,
  }));
}
export async function getHouse(
  value: string,
  values: any,
  currentLang: string,
) {
  const { street_fias_id } = values[FIND_ADRESS_FIELD_NAME.STREET];
  const response = await httpRequest({
    url: FIND_ADRESS_API.URL,
    method: FIND_ADRESS_API.TYPE,
    data: {
      query: value,
      count: 20,
      language: currentLang,
      from_bound: { value: 'house' },
      to_bound: { value: 'house' },
      locations: [
        {
          street_fias_id: street_fias_id,
        },
      ],
    },
  });
  return response.data.suggestions.map((item: any) => ({
    label: item.data.house,
    postal_code: item.data.postal_code,
    house: item.data.house,
    house_fias_id: item.data.house_fias_id,
    fullData: item,
  }));
}
