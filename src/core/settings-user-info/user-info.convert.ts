import { userInfoValues } from './user-info.type';

export function performAdressData(rowData: any): userInfoValues {
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
    address: {
      country: rowData.country.country,
      city: rowData.city.city,
      settlement: rowData.city.settlement,
      street: rowData.street.street,
      house: rowData.house.house,
      postal_code: rowData.postal_code.postal_code,
      kladr_id: rowData.city.kladr_id,
    },
    phone: rowData.phone,
    fullName: rowData.fullName,
  };
}
