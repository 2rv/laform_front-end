import { httpRequest } from 'src/main/http';
import { FIND_ADRESS_API, FIND_POSTAL_INDEX_API } from './find-adress.constant';
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
    label: item.value,
    country: item.data.country,
    country_iso_code: item.data.country_iso_code,
  }));
}
export async function getCity(value: string, values: any, currentLang: string) {
  const countryData = values[FIND_ADRESS_FIELD_NAME.COUNTRY];

  const response = await httpRequest({
    url: FIND_ADRESS_API.URL,
    method: FIND_ADRESS_API.TYPE,
    data: {
      query: value,
      count: 20,
      language: currentLang,
      from_bound: { value: 'city' },
      to_bound: { value: 'settlement' },
      locations: getLocations(countryData),
    },
  });
  return response.data.suggestions.map((item: any) => ({
    label: item.value,
    city: item.data.city_with_type,
    city_fias_id: item.data.city_fias_id,
    settlement: item.data.settlement_with_type,
    settlement_fias_id: item.data.settlement_fias_id,
  }));
}
export async function getStreet(
  value: string,
  values: any,
  currentLang: string,
) {
  const cityData = values[FIND_ADRESS_FIELD_NAME.CITY];

  const response = await httpRequest({
    url: FIND_ADRESS_API.URL,
    method: FIND_ADRESS_API.TYPE,
    data: {
      query: value,
      count: 20,
      language: currentLang,
      from_bound: { value: 'street' },
      to_bound: { value: 'street' },
      locations: getLocations(cityData),
    },
  });

  return response.data.suggestions.map((item: any) => ({
    label: item.value,
    street: item.data.street_with_type,
    street_fias_id: item.data.street_fias_id,
  }));
}
export async function getHouse(
  value: string,
  values: any,
  currentLang: string,
) {
  const streetData = values[FIND_ADRESS_FIELD_NAME.STREET];
  const cityData = values[FIND_ADRESS_FIELD_NAME.CITY];
  const response = await httpRequest({
    url: FIND_ADRESS_API.URL,
    method: FIND_ADRESS_API.TYPE,
    data: {
      query: value,
      count: 20,
      language: currentLang,
      from_bound: { value: 'house' },
      to_bound: { value: 'house' },
      locations: getLocations(
        streetData.street_fias_id ? streetData : cityData,
      ),
    },
  });
  console.log(response.data.suggestions);
  return response.data.suggestions.map((item: any) => ({
    label: item.value,
    house: item.data.house,
    house_fias_id: item.data.house_fias_id,
  }));
}
export async function getPostalIndex(value: string) {
  const response = await httpRequest({
    url: FIND_POSTAL_INDEX_API.URL,
    method: FIND_POSTAL_INDEX_API.TYPE,
    headers: {
      Authorization: 'Token 47277a98629b84336b47c3b23b49f7d67bce9f77',
    },
    data: {
      query: value,
    },
  });
  return response.data.suggestions.map((item: any) => ({
    label:
      `${item.data.region}, ${item.data.city}, ${item.data.index}.`.toLocaleLowerCase(),
    postal_code: item.data.index,
  }));
}

interface locationsProps {
  country?: string;
  country_iso_code?: string;
  city?: string;
  city_fias_id?: string;
  settlement?: string;
  settlement_fias_id?: string;
  street?: string;
  street_fias_id?: string;
  house?: string;
  house_fias_id?: string;
}
const getLocations = (props: locationsProps) => {
  const {
    country,
    country_iso_code,
    city,
    city_fias_id,
    settlement,
    settlement_fias_id,
    street,
    street_fias_id,
    house,
    house_fias_id,
  } = props;
  const locations = [];

  if (house_fias_id) {
    locations.push({ house_fias_id });
  } else if (house) {
    locations.push({ house });
  }

  if (street_fias_id) {
    locations.push({ street_fias_id });
  } else if (street) {
    locations.push({ street });
  }

  if (settlement_fias_id) {
    locations.push({ settlement_fias_id });
  } else if (city_fias_id) {
    locations.push({ city_fias_id });
  } else if (settlement) {
    locations.push({ settlement });
  } else if (city) {
    locations.push({ city });
  }
  if (country_iso_code) {
    locations.push({ country_iso_code });
  } else if (country) {
    locations.push({ country });
  }
  return locations;
};
