import { httpRequest } from 'src/main/http';
import { performAdressData } from './user-info.convert';
import {
  userInfoValues,
  locationsProps,
  USER_INFO_FIELD_NAME,
  USER_INFO_ACTION_TYPE,
} from './user-info.type';

export async function getCountry(query: string) {
  const response = await httpRequest({
    url: '/get/country/' + query,
    method: 'POST',
  });

  return response.data.map((item: any) => ({
    label: item.value,
    country: item.data.country,
    country_iso_code: item.data.country_iso_code,
  }));
}

export async function getPostalCode(query: string) {
  const response = await httpRequest({
    url: '/dadata/get/postal-code/' + query,
    method: 'GET',
  });
  return response.data.map((item: any) => ({
    label: `${item.data.region}, ${item.data.city ? item.data.city + ', ' : ''}
	  ${item.data.settlement ? item.data.settlement + ', ' : ''} ${
      item.data.index
    }.`.toLocaleLowerCase(),
    postal_code: item.data.index,
  }));
}

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

export async function getCity(query: string, values: userInfoValues) {
  const countryData = values[USER_INFO_FIELD_NAME.COUNTRY];
  const response = await httpRequest({
    url: '/dadata/get/city',
    method: 'POST',
    data: {
      value: query,
      locations: getLocations(countryData),
    },
  });

  return response.data.map((item: any) => ({
    label: item.value,
    city: item.data.city_with_type,
    settlement: item.data.settlement_with_type,
    kladr_id: item.data.kladr_id,
    fias_id: item.data.fias_id,
    fias_level: item.data.fias_level,
  }));
}
export async function getStreet(query: string, values: userInfoValues) {
  const cityData = values[USER_INFO_FIELD_NAME.CITY];
  const response = await httpRequest({
    url: '/dadata/get/street',
    method: 'POST',
    data: {
      value: query,
      locations: getLocations(cityData),
    },
  });

  return response.data.map((item: any) => ({
    label: item.value,
    street: item.data.street_with_type,
    fias_id: item.data.fias_id,
    fias_level: item.data.fias_level,
  }));
}
export async function getHouse(query: string, values: userInfoValues) {
  const streetData = values[USER_INFO_FIELD_NAME.STREET];
  const response = await httpRequest({
    url: '/dadata/get/house',
    method: 'POST',
    data: {
      value: query,
      locations: getLocations(streetData),
    },
  });

  return response.data.map((item: any) => {
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

export function getAdressAction() {
  return async (dispatch: Function) => {
    dispatch({
      type: USER_INFO_ACTION_TYPE.GET_DATA_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/user/info/get',
      });
      dispatch({
        type: USER_INFO_ACTION_TYPE.GET_DATA_SUCCESS,
        data: performAdressData(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: USER_INFO_ACTION_TYPE.GET_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function saveAdressAction(values: userInfoValues) {
  return async (dispatch: Function) => {
    dispatch({
      type: USER_INFO_ACTION_TYPE.SAVE_DATA_PENDING,
    });
    try {
      await httpRequest({
        method: 'PATCH',
        url: '/user/info/update',
        data: values,
      });
      dispatch({
        type: USER_INFO_ACTION_TYPE.SAVE_DATA_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: USER_INFO_ACTION_TYPE.SAVE_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
