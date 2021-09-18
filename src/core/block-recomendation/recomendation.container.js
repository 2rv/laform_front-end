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
  const { listItems, onSetRecomendation } = props;
  const filterInitialValue = {
    [RECOMENDATION_FILTER.FILTER]: 0,
    [RECOMENDATION_FILTER.FIND]: '',
  };

  const [activeTab, setActiveTab] = useState(9);
  const [filter, setFilter] = useState(filterInitialValue);
  const [products, setProduct] = useState(listItems);

  useEffect(() => {
    const selectedItems = products.reduce((acc, item) => {
      if (item?.selected) acc.push(item.id);
      return acc;
    }, []);
    onSetRecomendation(selectedItems);
  }, [products]);
  const onSelect = (id, status) => {
    if (status) {
      const copy = products.map((item) => {
        if (item.id === id) item['selected'] = true;
        return item;
      });
      setProduct(copy);
    }
    if (!status) {
      const copy = products.map((item) => {
        if (item.id === id) item.selected = false;
        return item;
      });
      setProduct(copy);
    }
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
  { name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.MASTER_CLASSES', type: 0 },
  { name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.PATTERNS_ELECTRONIC', type: 1 },
  { name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.PATTERNS_PRINTED', type: 2 },
  { name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.SEWING_GOODS', type: 3 },
  { name: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.TAB_ITEMS.ARTICLES', type: 4 },
];
const testListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    complexity: 1,
    like: true,
    type: 1,
    price: {
      min: 500,
    },
  },
  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    complexity: 3,
    like: false,
    bestseller: 'Хит',
    type: 2,
    price: {
      min: 200,
      max: 4150,
    },
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    complexity: 3,
    like: false,
    bestseller: true,
    type: 1,
    price: {
      min: 200,
      discount: 20,
      max: 900,
    },
  },
  {
    id: 4,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    complexity: 3,
    like: false,
    bestseller: true,
    type: 2,
    createdDate: '2021-04-14T11:33:22.332Z',
    price: {
      min: 200,
      discount: 30,
    },
  },
  {
    id: 5,
    name: 'Мастер-класс по пошиву мужских брюк 1003',
    image: '/static/test/popular-gods-1.png',
    bestseller: 'хит',
    like: true,
    purchase: true,
    type: 3,
    price: {
      min: 500,
      discount: 10,
      max: null,
    },
  },
  {
    id: 6,
    name: 'Инструкция по пошиву Комбинезон 0717',
    image: '/static/test/popular-gods-2.png',
    bestseller: 'Круто',
    like: false,
    type: 3,
    price: {
      min: 500,
      discount: null,
      max: 1000,
    },
  },
  {
    id: 7,
    name: 'Мастер-класс по пошиву Жакета 0305',
    image: '/static/test/popular-gods-3.png',
    bestseller: 'Синее',
    like: true,
    type: 3,
    price: {
      min: 500,
      discount: 25,
      max: 1000,
    },
  },
  {
    id: 8,
    name: 'Мастер-класс по пошиву мужских брюк 1003',
    image: '/static/test/popular-gods-1.png',
    like: true,
    type: 0,
    price: {
      min: 500,
      discount: 5,
      max: null,
    },
  },
  {
    id: 9,
    name: 'Инструкция по пошиву Комбинезон 0717',
    image: '/static/test/popular-gods-2.png',
    bestseller: 'Инструкция',
    like: false,
    type: 0,
    price: {
      min: 500,
      discount: null,
      max: 1000,
    },
  },
  {
    id: 10,
    name: 'Мастер-класс по пошиву Жакета 0305',
    image: '/static/test/popular-gods-3.png',
    bestseller: false,
    like: true,
    type: 0,
    price: {
      min: 500,
      discount: 3,
      max: 1000,
    },
  },
  {
    id: 11,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    like: true,
    type: 4,
    createdDate: '2021-02-19T11:33:22.332Z',
  },
  {
    id: 12,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    like: false,
    type: 4,
    createdDate: '2021-08-25T06:20:10.332Z',
  },
  {
    id: 13,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    like: false,
    type: 4,
    createdDate: '2021-04-15T11:33:05.332Z',
  },
  {
    id: 14,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    like: false,
    type: 4,
    createdDate: '2021-04-19T11:33:22.332Z',
  },
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
    id: 2,
    tid: 'ARTICLE_CREATE_FORM.RECOMENDATIONS.FILTER_OPTIONS.HIT',
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
  const { onSetRecomendation } = props;
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
        listItems={[].concat(masterClasses, patterns, sewingGoods, articles)}
        onSetRecomendation={onSetRecomendation}
      />
    );
  } else {
    return <LoaderPrimary />;
  }
}
