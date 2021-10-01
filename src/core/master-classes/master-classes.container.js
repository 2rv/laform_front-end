import { useState, useEffect, useRef } from 'react';
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
  masterClassesPaginationData,
} from './master-classes.action';
import { MasterClassesComponent } from './master-classes.component';
import { MASTER_CLASSES_STORE_NAME } from './master-classes.constant';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { addToBasket } from '../basket';

export function MasterClassesContainer() {
  const { masterClassState, pageLoading, currentLang, user, isAuth } =
    useSelector((state) => ({
      masterClassState: state[MASTER_CLASSES_STORE_NAME].masterClassState,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
    }));
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [currentPage, setPage] = useState(1);
  let isPagination = false;
  const isPending = isRequestPending(masterClassState);
  const [filter, setFilter] = useState({ where: null, sort: null, by: null });

  useEffect(() => {
    if (!isPending) isPagination = false;
  }, [isPending]);

  const togglePagination = () => {
    const total = masterClassState?.additional?.totalCount || 0;
    const current = masterClassState?.additional?.currentCount || 0;
    if (
      containerRef.current.getBoundingClientRect().bottom <
        window.innerHeight &&
      !isPending &&
      total > current &&
      !isPagination
    ) {
      isPagination = true;
      dispatch(
        masterClassesPaginationData(currentLang, isAuth, currentPage + 1),
      );
      setPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(masterClassesUploadData(currentLang, isAuth));
    document.addEventListener('scroll', togglePagination);
    return () => document.removeEventListener('scroll', togglePagination);
  }, []);

  const handleFilter = ({ where, sort, by }) => {
    const copy = { ...filter };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    setFilter(copy);

    dispatch(
      masterClassesUploadData(
        currentLang,
        isAuth,
        copy.where,
        copy.sort,
        copy.by,
      ),
    );
  };

  const onDeleteProduct = (id, body) => {
    dispatch(masterClassesUpdateData(currentLang, id, body));
  };
  const addToCart = (values) => dispatch(addToBasket(values, currentLang));

  return (
    <div ref={containerRef}>
      <MasterClassesComponent
        listItems={getRequestData(masterClassState, [])}
        onDeleteProduct={onDeleteProduct}
        addToCart={addToCart}
        handleFilter={handleFilter}
        filterOptions={filterOptions}
        isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
        //-----
        pageLoading={pageLoading}
        isPending={isRequestPending(masterClassState)}
        isError={isRequestError(masterClassState)}
        isSuccess={isRequestSuccess(masterClassState)}
        errorMessage={getRequestErrorMessage(masterClassState)}
      />
    </div>
  );
}

export const filterOptions = [
  {
    id: 0,
    tid: 'MASTER_CLASSES.FILTER_OPTIONS.ALL',
    sort: null,
    by: null,
  },
  {
    id: 1,
    tid: 'По алфавиту от а до я',
    sort: 'title',
    by: 'ASC',
  },
  {
    id: 2,
    tid: 'По алфавиту от я до а',
    sort: 'title',
    by: 'DESC',
  },
];
