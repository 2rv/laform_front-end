import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import {
  masterClassesUploadData,
  masterClassesUpdateData,
} from './master-classes.action';
import { MasterClassesComponent } from './master-classes.component';
import { MASTER_CLASSES_FIELD_NAME } from './master-classes.type';
import { MASTER_CLASSES_STORE_NAME } from './master-classes.constant';
import { sorterItemsByParams } from '../../lib/common/filter-list-card';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { addToBasket } from '../basket';

export function MasterClassesContainer() {
  const dispatch = useDispatch();
  const { masterClassState, pageLoading, currentLang, user, isAuth } =
    useSelector((state) => ({
      masterClassState: state[MASTER_CLASSES_STORE_NAME].masterClassState,

      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
    }));

  useEffect(() => dispatch(masterClassesUploadData(currentLang)), []);

  const filterInitialValue = () => ({
    [MASTER_CLASSES_FIELD_NAME.FILTER]: 0,
    [MASTER_CLASSES_FIELD_NAME.FIND]: '',
  });

  const [filter, setFilter] = useState(filterInitialValue());

  const onDeleteProduct = (id, body) => {
    dispatch(masterClassesUpdateData(currentLang, id, body));
  };

  const addToCart = (id, type, inCart) => {
    if (inCart) return dispatch(addToBasket({ id, type }, currentLang, isAuth));
  };

  return (
    <MasterClassesComponent
      addToCart={addToCart}
      listItems={sorterItemsByParams(
        getRequestData(masterClassState, []),
        filter[MASTER_CLASSES_FIELD_NAME.FIND],
        Number(filter[MASTER_CLASSES_FIELD_NAME.FILTER]),
      )}
      //-----
      filterOptions={filterOptionss}
      initialValue={filterInitialValue()}
      setFilter={setFilter}
      filterSelectName={MASTER_CLASSES_FIELD_NAME.FILTER}
      findFieldName={MASTER_CLASSES_FIELD_NAME.FIND}
      //-----
      pageLoading={pageLoading}
      isPending={isRequestPending(masterClassState)}
      isError={isRequestError(masterClassState)}
      isSuccess={isRequestSuccess(masterClassState)}
      errorMessage={getRequestErrorMessage(masterClassState)}
      onDeleteProduct={onDeleteProduct}
      isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
    />
  );
}

export const filterOptionss = [
  {
    id: 0,
    tid: 'Все',
  },
  {
    id: 1,
    tid: 'Акция',
  },
  {
    id: 2,
    tid: 'Хит',
  },
  {
    id: 3,
    tid: 'По возрастанию',
  },
  {
    id: 4,
    tid: 'По убыванию',
  },
];
export const testListItems = [
  {
    id: 1,
    name: 'Мастер-класс по пошиву мужских брюк 1003',
    image: '/static/test/popular-gods-1.png',
    bestseller: true,
    select: false,
    like: true,
    type: 0,
    price: {
      min: 500,
      discount: 10,
      max: null,
    },
  },
  {
    id: 2,
    name: 'Инструкция по пошиву Комбинезон 0717',
    image: '/static/test/popular-gods-2.png',
    bestseller: true,
    select: true,
    like: false,
    type: 0,
    price: {
      min: 500,
      discount: null,
      max: 1000,
    },
  },
  {
    id: 3,
    name: 'Мастер-класс по пошиву Жакета 0305',
    image: '/static/test/popular-gods-3.png',
    bestseller: false,
    select: true,
    like: true,
    type: 0,
    price: {
      min: 500,
      discount: 25,
      max: 1000,
    },
  },
];
