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
  const { masterClassState, pageLoading, currentLang, user } = useSelector(
    (state) => ({
      masterClassState: state[MASTER_CLASSES_STORE_NAME].masterClassState,

      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      user: state[AUTH_STORE_NAME].user,
    }),
  );

  useEffect(() => dispatch(masterClassesUploadData(currentLang, isAuth)), []);

  const filterInitialValue = () => ({
    [MASTER_CLASSES_FIELD_NAME.FILTER]: 0,
    [MASTER_CLASSES_FIELD_NAME.FIND]: '',
  });

  const [filter, setFilter] = useState(filterInitialValue());

  const onDeleteProduct = (id, body) => {
    dispatch(masterClassesUpdateData(currentLang, id, body));
  };

  const addToCart = (id, type, inCart) => {
    if (inCart) return dispatch(addToBasket({ id, type }, currentLang));
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
    tid: 'MASTER_CLASSES.FILTER_OPTIONS.ALL',
  },
  {
    id: 1,
    tid: 'MASTER_CLASSES.FILTER_OPTIONS.STOCK',
  },
  {
    id: 2,
    tid: 'MASTER_CLASSES.FILTER_OPTIONS.HIT',
  },
  {
    id: 3,
    tid: 'MASTER_CLASSES.FILTER_OPTIONS.ASCENDING',
  },
  {
    id: 4,
    tid: 'MASTER_CLASSES.FILTER_OPTIONS.DESCENDING',
  },
];
