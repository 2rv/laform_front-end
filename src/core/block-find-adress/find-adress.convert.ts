import { FindAdressValues } from './find-adress.type';

export function performAdressData(rowData: any): FindAdressValues {
  return {
    country: {
      country: rowData.country.country,
      country_iso_code: rowData.country.country_iso_code,
      label: rowData.country.label,
    },
    city: {
      city: rowData.city.city,
      fias_id: rowData.city.fias_id,
      fias_level: rowData.city.fias_level,
      kladr_id: rowData.city.kladr_id,
      label: rowData.city.label,
      settlement: rowData.city.settlement,
    },
    street: {
      fias_id: rowData.street.fias_id,
      fias_level: rowData.street.fias_level,
      label: rowData.street.label,
      street: rowData.street.street,
    },
    house: {
      fias_id: rowData.house.fias_id,
      fias_level: rowData.house.fias_level,
      house: rowData.house.house,
      label: rowData.house.label,
    },
    postal_code: {
      label: rowData.postal_code.label,
      postal_code: rowData.postal_code.postal_code,
    },
    full_adress: {
      country: rowData.country.country,
      city: rowData.city.city,
      settlement: rowData.city.settlement,
      street: rowData.street.street,
      house: rowData.house.house,
      postal_code: rowData.postal_code.postal_code,
      kladr_id: rowData.city.kladr_id,
    },
  };
}

export function convertAdressData(values: FindAdressValues) {
  return {
    country: {
      country: values.country.country,
      country_iso_code: values.country.country_iso_code,
      label: values.country.label,
    },
    city: {
      city: values.city.city,
      fias_id: values.city.fias_id,
      fias_level: values.city.fias_level,
      kladr_id: values.city.kladr_id,
      label: values.city.label,
      settlement: values.city.settlement,
    },
    street: {
      fias_id: values.street.fias_id,
      fias_level: values.street.fias_level,
      label: values.street.label,
      street: values.street.street,
    },
    house: {
      fias_id: values.house.fias_id,
      fias_level: values.house.fias_level,
      house: values.house.house,
      label: values.house.label,
    },
    postal_code: {
      label: values.postal_code.label,
      postal_code: values.postal_code.postal_code,
    },
    //   full_adress: {
    // 	country: values.country.country,
    // 	city: values.city.city,
    // 	settlement: values.city.settlement,
    // 	street: values.street.street,
    // 	house: values.house.house,
    // 	postal_code: values.postal_code.postal_code,
    // 	kladr_id: values.city.kladr_id,
    //   },
  };
}
