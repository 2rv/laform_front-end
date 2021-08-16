import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { basketUploadData, basketLoadUserInfoData } from './basket.action';
import { BasketComponent } from './basket.component';
import { BASKET_STORE_NAME } from './basket.constant';
import { basketFormValidation } from './basket.validation';
import {
  FORMALIZATION_ORDERING_FIELD_NAME,
  FORMALIZATION_ORDERING_FORM_FIELD_NAME,
  BASKET_DATA_KEY,
} from './basket.type';

export function BasketContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, userData } = useSelector((state) => ({
    state: state[BASKET_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    userData: getRequestData(state[BASKET_STORE_NAME].basketLoadData),
  }));
  const basketFormSendData = (values) => {
    // const data = convertSettingsChangeEmailFormData(values);
    // dispatch(basketUploadData(data));
  };

  const basketFormGetInitialValue = () => ({
    [FORMALIZATION_ORDERING_FIELD_NAME.FULL_NAME]: userData[
      BASKET_DATA_KEY.FULLNAME
    ]
      ? userData[BASKET_DATA_KEY.FULLNAME]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_DELIVERY_METHOD]: userData[
      BASKET_DATA_KEY.DELIVERY_TYPE
    ]
      ? userData[BASKET_DATA_KEY.DELIVERY_TYPE]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CURRENT_CITY]: userData[
      BASKET_DATA_KEY.LOCATION
    ]
      ? userData[BASKET_DATA_KEY.LOCATION]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONTACT_PHONE_NUMBER]: userData[
      BASKET_DATA_KEY.PHONE
    ]
      ? userData[BASKET_DATA_KEY.PHONE]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_PAYMENT_METHOD]: 0,
    [FORMALIZATION_ORDERING_FIELD_NAME.ORDER_NOTE]: '',
  });

  useEffect(() => {
    // dispatch(basketLoadUserInfoData());
  }, []);

  const [count, setCount] = useState(null);
  const initialCount = (items) => {
    if (!count) {
      const initialCounts = items.reduce((acc, { id }) => {
        acc[id] = 1;
        return acc;
      }, {});
      setCount(initialCounts);
    }
    return items;
  };
  const incrementCount = (id) => {
    const Ccount = { ...count };
    Ccount[id] = Ccount[id] + 1;
    setCount(Ccount);
  };
  const dicrementCoun = (id) => {
    if (count[id] !== 1) {
      const Ccount = { ...count };
      Ccount[id] = Ccount[id] - 1;
      setCount(Ccount);
    }
  };
  console.log(count); // {itemId: itemCount} это для списка что бы получать значение количества
  return (
    <BasketComponent
      isPending={isRequestPending(state.basket)}
      isError={isRequestError(state.basket)}
      isSuccess={isRequestSuccess(state.basket)}
      errorMessage={getRequestErrorMessage(state.basket)}
      isUserInfoLoadPending={isRequestPending(state.basketLoadData)}
      pageLoading={pageLoading}
      initialValue={basketFormGetInitialValue()}
      validation={basketFormValidation}
      onSubmitForm={basketFormSendData}
      fieldName={FORMALIZATION_ORDERING_FORM_FIELD_NAME}
      headersGoods={headersGoods}
      headersMaster={headersMaster}
      headersPatterns={headersPatterns}
      itemsGoods={initialCount(itemsGoods)}
      itemsMaster={itemsMaster}
      itemsPatterns={itemsPatterns}
      count={count}
      incrementCount={incrementCount}
      dicrementCoun={dicrementCoun}
    />
  );
}

const headersGoods = [
  'Товары для шитья',
  'Параметры',
  'Количество',
  'Итоговая цена',
];
const headersMaster = ['Мастер-классы', 'Параметры', 'Итоговая цена'];
const headersPatterns = ['Выкройки', 'Параметры', 'Итоговая цена'];
const itemsGoods = [
  {
    id: 1,
    name: 'Батист Макс Мара Горохи',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
    ],
  },
  {
    id: 2,
    name: 'Хлопок Том Форд',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
    ],
  },
];
const itemsMaster = [
  {
    name: 'Инструкция по пошиву Комбинезон 0717',
    price: 699,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [{ name: 'Программа', value: 'Удаленная' }],
  },
];
const itemsPatterns = [
  {
    name: 'Юбка-шорты 0718',
    price: 1500,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Размер', value: '15/170 250' },
      { name: 'Формат', value: 'Печатная' },
    ],
  },
  {
    name: 'Сарафан 0445',
    price: 2210,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Размер', value: '15/170 250' },
      { name: 'Формат', value: 'Электронная' },
    ],
  },
];
