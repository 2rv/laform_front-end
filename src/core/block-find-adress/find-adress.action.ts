import { httpRequest } from 'src/main/http';
import { GET_ADRESS_API, GET_POSTAL_CODE } from './find-adress.constant';
import { performAdressData, convertAdressData } from './find-adress.convert';
import {
  FindAdressValues,
  locationsProps,
  FIND_ADRESS_FIELD_NAME,
  FIND_ADRESS_ACTION_TYPE,
} from './find-adress.type';

const getLocations = (props: locationsProps) => {
  const {
    country,
    country_iso_code,
    city,
    settlement,
    street,
    house,
    fias_id,
    fias_level,
  } = props;
  const locations = [];
  switch (fias_level) {
    case '1':
      locations.push({ region_fias_id: fias_id });
      break;
    case '4':
      locations.push({ city_fias_id: fias_id });
      break;
    case '6':
      locations.push({ settlement_fias_id: fias_id });
      break;
    case '7':
      locations.push({ street_fias_id: fias_id });
      break;
    case '8':
      locations.push({ house_fias_id: fias_id });
      break;

    default:
      if (house) {
        locations.push({ house });
      }

      if (street) {
        locations.push({ street });
      }
      if (settlement) {
        locations.push({ settlement });
      } else if (city) {
        locations.push({ city });
      }
      if (country_iso_code) {
        locations.push({ country_iso_code });
      } else if (country) {
        locations.push({ country });
      }
      break;
  }

  return locations;
};

export async function getCountry(query: string) {
  const response = await httpRequest({
    url: GET_ADRESS_API.URL,
    method: GET_ADRESS_API.TYPE,
    data: {
      query: query,
      count: 20,
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

export async function getCity(query: string, values: FindAdressValues) {
  const countryData = values[FIND_ADRESS_FIELD_NAME.COUNTRY];
  const response = await httpRequest({
    url: GET_ADRESS_API.URL,
    method: GET_ADRESS_API.TYPE,
    data: {
      query: query,
      count: 20,
      from_bound: { value: 'city' },
      to_bound: { value: 'settlement' },
      locations: getLocations(countryData),
    },
  });

  return response.data.suggestions.map((item: any) => ({
    label: item.value,
    city: item.data.city_with_type,
    settlement: item.data.settlement_with_type,
    kladr_id: item.data.kladr_id,
    fias_id: item.data.fias_id,
    fias_level: item.data.fias_level,
  }));
}
export async function getStreet(query: string, values: FindAdressValues) {
  const cityData = values[FIND_ADRESS_FIELD_NAME.CITY];
  const response = await httpRequest({
    url: GET_ADRESS_API.URL,
    method: GET_ADRESS_API.TYPE,
    data: {
      query: query,
      count: 20,
      from_bound: { value: 'street' },
      to_bound: { value: 'street' },
      locations: getLocations(cityData),
    },
  });

  return response.data.suggestions.map((item: any) => ({
    label: item.value,
    street: item.data.street_with_type,
    fias_id: item.data.fias_id,
    fias_level: item.data.fias_level,
  }));
}
export async function getHouse(query: string, values: FindAdressValues) {
  const streetData = values[FIND_ADRESS_FIELD_NAME.STREET];
  const response = await httpRequest({
    url: GET_ADRESS_API.URL,
    method: GET_ADRESS_API.TYPE,
    data: {
      query: query,
      count: 20,
      from_bound: { value: 'house' },
      to_bound: { value: 'house' },
      locations: getLocations(streetData),
    },
  });

  return response.data.suggestions.map((item: any) => {
    const house = `${item.data.house_type ? item.data.house_type : ''}. ${
      item.data.house ? item.data.house : ''
    } ${item.data.block_type ? item.data.block_type + '.' : ''} ${
      item.data.block ? item.data.block : ''
    }`;
    return {
      label: house,
      house: house,
      fias_id: item.data.fias_id,
      fias_level: item.data.fias_level,
    };
  });
}
export async function getPostalCode(query: string) {
  const response = await httpRequest({
    url: GET_POSTAL_CODE.URL,
    method: GET_POSTAL_CODE.TYPE,
    headers: {
      Authorization: 'Token 47277a98629b84336b47c3b23b49f7d67bce9f77',
    },
    data: {
      query: query,
    },
  });
  return response.data.suggestions.map((item: any) => ({
    label: `${item.data.region}, ${item.data.city ? item.data.city + ', ' : ''}
	${item.data.settlement ? item.data.settlement + ', ' : ''} ${
      item.data.index
    }.`.toLocaleLowerCase(),
    postal_code: item.data.index,
  }));
}

export function saveAdressAction(values: FindAdressValues) {
  return async (dispatch: Function) => {
    dispatch({
      type: FIND_ADRESS_ACTION_TYPE.SAVE_DATA_PENDING,
    });
    try {
      console.log(values);

      //   const response = await httpRequest({
      //     method: SAVE_ADRESS_API.TYPE,
      //     url: SAVE_ADRESS_API.URL,
      //     data:
      //   });
      dispatch({
        type: FIND_ADRESS_ACTION_TYPE.SAVE_DATA_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FIND_ADRESS_ACTION_TYPE.SAVE_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
const testData = {
  country: {
    country: 'Россия',
    country_iso_code: 'RU',
    label: 'Россия',
  },
  city: {
    city: 'г Санкт-Петербург',
    fias_id: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
    fias_level: '1',
    kladr_id: '7800000000000',
    label: 'г Санкт-Петербург',
    settlement: null,
  },
  street: {
    fias_id: '0d7c5456-4ecb-49ad-a8ae-12bc94244e44',
    fias_level: '7',
    label: 'г Санкт-Петербург, ул Бухарестская',
    street: 'ул Бухарестская',
  },
  house: {
    fias_id: '0d7c5456-4ecb-49ad-a8ae-12bc94244e44',
    fias_level: '7',
    house: 'д. 72 к. 2',
    label: 'д. 72 к. 2',
  },
  postal_code: {
    label: 'санкт-петербург, 199004.',
    postal_code: '199004',
  },
};
export function getAdressAction() {
  return async (dispatch: Function) => {
    dispatch({
      type: FIND_ADRESS_ACTION_TYPE.GET_DATA_PENDING,
    });
    try {
      const response: any = await new Promise((resolve) => {
        setTimeout(() => resolve({ data: testData }), 1000);
      });
      //   const response = await httpRequest({
      //     method: LOAD_ADRESS_API.TYPE,
      //     url: LOAD_ADRESS_API.URL,
      //   });
      dispatch({
        type: FIND_ADRESS_ACTION_TYPE.GET_DATA_SUCCESS,
        data: performAdressData(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FIND_ADRESS_ACTION_TYPE.GET_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
