import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  sewingGoodsUploadData,
  sewingGoodsPaginationData,
  sewingGoodsUpdateData,
} from './sewing-goods.action';
import { SEWING_GOODS_STORE_NAME } from './sewing-goods.constant';
import { SewingGoodsComponent } from './sewing-goods.component';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { addToBasket } from '../basket';

export function SewingGoodsContainer() {
  const { sewingGoodsState, pageLoading, currentLang, user, isAuth } =
    useSelector((state) => ({
      sewingGoodsState: state[SEWING_GOODS_STORE_NAME].sewingGoodsState,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
    }));

  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [currentPage, setPage] = useState(1);
  let isPagination = false;
  const isPending = isRequestPending(sewingGoodsState);
  const [filter, setFilter] = useState({ where: null, sort: null, by: null });

  useEffect(() => {
    if (!isPending) isPagination = false;
  }, [isPending]);

  const togglePagination = () => {
    const total = sewingGoodsState?.additional?.totalCount || 0;
    const current = sewingGoodsState?.additional?.currentCount || 0;
    if (
      containerRef.current.getBoundingClientRect().bottom <
        window.innerHeight &&
      !isPending &&
      total > current &&
      !isPagination
    ) {
      isPagination = true;
      dispatch(
        sewingGoodsPaginationData(
          currentLang,
          isAuth,
          currentPage + 1,
          filter.where,
          filter.sort,
          filter.by,
        ),
      );
      setPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(sewingGoodsUploadData(currentLang, isAuth));
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
      sewingGoodsUploadData(
        currentLang,
        isAuth,
        copy.where,
        copy.sort,
        copy.by,
      ),
    );
  };

  const onDeleteProduct = (id, body) => {
    dispatch(sewingGoodsUpdateData(currentLang, id, body));
  };

  const addToCart = (values) => dispatch(addToBasket(values, currentLang));

  return (
    <div ref={containerRef}>
      <SewingGoodsComponent
        listItems={getRequestData(sewingGoodsState, [])}
        addToCart={addToCart}
        handleFilter={handleFilter}
        filterOptions={filterOptionss}
        onDeleteProduct={onDeleteProduct}
        isAdmin={Boolean(user?.role === USER_ROLE.ADMIN)}
        pageLoading={pageLoading}
        isPending={isRequestPending(sewingGoodsState)}
        isError={isRequestError(sewingGoodsState)}
        isSuccess={isRequestSuccess(sewingGoodsState)}
        errorMessage={getRequestErrorMessage(sewingGoodsState)}
      />
    </div>
  );
}

export const filterOptionss = [
  {
    id: 0,
    tid: 'SEWING_GOODS.FILTER_OPTIONS.ALL',
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
