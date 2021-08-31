import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { masterClassesUploadData } from './master-classes.action';
import { MasterClassesComponent } from './master-classes.component';
import { MASTER_CLASSES_FIELD_NAME } from './master-classes.type';
import { MASTER_CLASSES_STORE_NAME } from './master-classes.constant';
import { sorterItemsByParams } from '../../lib/common/filter-list-card';

export function MasterClassesContainer() {
  const dispatch = useDispatch();
  const { masterClassState, pageLoading, currentLang } = useSelector(
    (state) => ({
      masterClassState: state[MASTER_CLASSES_STORE_NAME].masterClassState,

      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }),
  );

  useEffect(() => dispatch(masterClassesUploadData(currentLang)), []);

  const filterInitialValue = () => ({
    [MASTER_CLASSES_FIELD_NAME.FILTER]: 0,
    [MASTER_CLASSES_FIELD_NAME.FIND]: '',
  });

  const [filter, setFilter] = useState(filterInitialValue());

  return (
    <MasterClassesComponent
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
    type: 1,
    price: {
      min: 500,
      discount: 230,
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
    type: 1,
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
    type: 1,
    price: {
      min: 500,
      discount: 230,
      max: 1000,
    },
  },
];
