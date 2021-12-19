import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import {
  basicTariffType,
  SdekTariffListActionType,
  SDEK_TARIFFLIST_ACTION_TYPE,
} from './sdek-tarifflist.type';

enum GET_TARIFFLIST {
  URL = '/sdek/calculator/tarifflist',
  TYPE = 'POST',
}
enum GET_TARIFF {
  URL = '/sdek/calculator/tariff',
  TYPE = 'POST',
}

export function getTariffList(city_code: number, productCount: number) {
  return async (dispatch: Dispatch<SdekTariffListActionType>) => {
    dispatch({
      type: SDEK_TARIFFLIST_ACTION_TYPE.PENDING,
    });
    try {
      const response = await httpRequest({
        method: GET_TARIFFLIST.TYPE,
        url: GET_TARIFFLIST.URL,
        data: {
          to_location: {
            code: city_code,
          },
          amount: productCount,
        },
      });

      const result: basicTariffType[] = response.data?.map(
        (item: basicTariffType) => {
          item.label = `${item.tariff_name}, стоимость ${item.delivery_sum} руб.`;
          item.delivery_sum = Number(item.delivery_sum) + 40;
          return item;
        },
      );
      dispatch({
        type: SDEK_TARIFFLIST_ACTION_TYPE.SUCCCESS,
        data: result,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SDEK_TARIFFLIST_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function getTariff(
  city_code: number,
  tariff: basicTariffType,
  productCount: number,
) {
  return async (dispatch: Dispatch<SdekTariffListActionType>) => {
    dispatch({
      type: SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_PENDING,
    });
    try {
      const response = await httpRequest({
        method: GET_TARIFF.TYPE,
        url: GET_TARIFF.URL,
        data: {
          tariff_code: tariff.tariff_code,
          to_location: {
            code: city_code,
          },
          amount: productCount,
        },
      });
      const result: basicTariffType = {
        label: `${tariff.tariff_name}, стоимость ${
          Number(response.data?.total_sum) + 40
        } руб.`,
        delivery_mode: tariff.delivery_mode,
        tariff_code: tariff.tariff_code,
        tariff_description: tariff.tariff_description,
        tariff_name: tariff.tariff_name,
        delivery_sum: Number(response.data?.delivery_sum) + 40,
        period_min: response.data?.period_min,
        period_max: response.data?.period_max,
        weight_calc: response.data?.weight_calc,
        total_sum: Number(response.data?.total_sum) + 40,
        currency: response.data?.currency,
      };
      dispatch({
        type: SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_SUCCCESS,
        basicTariff: result,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SDEK_TARIFFLIST_ACTION_TYPE.TARIFF_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
