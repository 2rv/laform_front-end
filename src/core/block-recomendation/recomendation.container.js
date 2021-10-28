import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { RecomendationComponent } from './recomendation.component';
import { RECOMENDATION_FILTER } from './recomendation.type';
import {
  masterClassUploadData,
  sewingGoodsUploadData,
  articleUploadData,
  patternsUploadData,
} from './recomendation.action';
import { RECOMENDATION_STORE_NAME } from './recomendation.constant';
import {
  filterByType,
  sorterItemsByParams,
} from 'src/lib/common/filter-list-card';
import { LoaderPrimary } from 'src/lib/element/loader';

export function RecomendationContainer(props) {
  const { listItems, onSetRecomendation, values } = props;
  const filterInitialValue = {
    [RECOMENDATION_FILTER.FILTER]: 0,
    [RECOMENDATION_FILTER.FIND]: '',
  };
  const [activeTab, setActiveTab] = useState(9);
  const [filter, setFilter] = useState(filterInitialValue);
  const [products, setProduct] = useState(listItems);
  const selectedItems = products.reduce((acc, item) => {
    if (item?.selected) {
      if (item.type === 0) acc.push({ masterClassId: item.id });
      if (item.type === 1) acc.push({ patternProductId: item.id });
      if (item.type === 2) acc.push({ patternProductId: item.id });
      if (item.type === 3) acc.push({ sewingProductId: item.id });
      if (item.type === 4) acc.push({ postId: item.id });
    }
    return acc;
  }, []);
  useEffect(() => {
    onSetRecomendation(selectedItems);
  }, [products]);

  const onSelect = (id, type, status) => {
    if (selectedItems.length >= 3 && status) {
      alert('Максимум 3 рекомендации');
      return false;
    }
    const copy = products.map((item) => {
      if (item.id === id) {
        status ? (item.selected = true) : (item.selected = false);
      }
      return item;
    });
    setProduct(copy);
    return true;
  };
  return (
    <RecomendationComponent
      listItems={filterByType(
        sorterItemsByParams(
          products,
          filter[RECOMENDATION_FILTER.FIND],
          Number(filter[RECOMENDATION_FILTER.FILTER]),
        ),
        activeTab,
      )}
      selectedListItems={products}
      onSelect={onSelect}
      //-----
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabItems={tabItems}
      //-----
      filter={filter}
      filterOptions={filterOptions}
      filterInitialValue={filterInitialValue}
      setFilter={setFilter}
      filterSelectName={RECOMENDATION_FILTER.FILTER}
      findFieldName={RECOMENDATION_FILTER.FIND}
    />
  );
}

const tabItems = [
  { name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.ALL', type: 9 },
  { name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.SELECTED', type: 10 },
  {
    name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.MASTER_CLASSES',
    type: 0,
  },
  {
    name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.PATTERNS_ELECTRONIC',
    type: 1,
  },
  {
    name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.PATTERNS_PRINTED',
    type: 2,
  },
  {
    name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.SEWING_GOODS',
    type: 3,
  },
  { name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.ARTICLES', type: 4 },
];
const filterOptions = [
  {
    id: 0,
    tid: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.FILTER_OPTIONS.ALL',
  },
  {
    id: 1,
    tid: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.FILTER_OPTIONS.STOCK',
  },
  {
    id: 3,
    tid: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.FILTER_OPTIONS.ASCENDING',
  },
  {
    id: 4,
    tid: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.FILTER_OPTIONS.DESCENDING',
  },
];

export function RecomendationBlock(props) {
  const { onSetRecomendation, values } = props;
  const dispatch = useDispatch();

  const {
    masterClassState,
    sewingGoodsState,
    patternsState,
    articlesState,
    pageLoading,
    currentLang,
  } = useSelector((state) => ({
    masterClassState: state[RECOMENDATION_STORE_NAME].masterClassState,
    sewingGoodsState: state[RECOMENDATION_STORE_NAME].sewingGoodsState,
    patternsState: state[RECOMENDATION_STORE_NAME].patternsState,
    articlesState: state[RECOMENDATION_STORE_NAME].articlesState,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(masterClassUploadData(currentLang));
    dispatch(sewingGoodsUploadData(currentLang));
    dispatch(articleUploadData(currentLang));
    dispatch(patternsUploadData(currentLang));
  }, []);

  const masterClassesPending = isRequestPending(masterClassState);
  const patternsPending = isRequestPending(patternsState);
  const sewingGoodsPending = isRequestPending(sewingGoodsState);
  const articlesPending = isRequestPending(articlesState);

  const masterClassesSuccess = isRequestSuccess(masterClassState);
  const patternsSuccess = isRequestSuccess(patternsState);
  const sewingGoodsSuccess = isRequestSuccess(sewingGoodsState);
  const articlesSuccess = isRequestSuccess(articlesState);

  const masterClasses = getRequestData(masterClassState);
  const patterns = getRequestData(patternsState);
  const sewingGoods = getRequestData(sewingGoodsState);
  const articles = getRequestData(articlesState);

  const masterClassesError = isRequestError(masterClassState);
  const patternsError = isRequestError(patternsState);
  const sewingGoodsError = isRequestError(sewingGoodsState);
  const articlesError = isRequestError(articlesState);

  const masterClassesErrorMessage = getRequestErrorMessage(masterClassState);
  const patternsErrorMessage = getRequestErrorMessage(patternsState);
  const sewingGoodsErrorMessage = getRequestErrorMessage(sewingGoodsState);
  const articlesErrorMessage = getRequestErrorMessage(articlesState);

  if (
    masterClassesSuccess &&
    patternsSuccess &&
    sewingGoodsSuccess &&
    articlesSuccess
  ) {
    return (
      <RecomendationContainer
        values={values}
        listItems={[].concat(masterClasses, patterns, sewingGoods, articles)}
        onSetRecomendation={onSetRecomendation}
      />
    );
  } else {
    return <LoaderPrimary />;
  }
}
