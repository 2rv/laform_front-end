import { useEffect, useReducer, useState } from 'react';
import { SearchBlockFilterValues } from '../block-search';
import {
  getProductsByType,
  paginateProductsByType,
} from './recomendation.action';
import { RecommendationComponent } from './recomendation.component';
import {
  RecomendationContainerProps,
  RECOMENDATION_ACTION_TYPE,
  RecommendationActionType,
  RecommendationStateType,
} from './recomendation.type';

const initialState = {
  getPending: false,
  getError: '',

  paginatePending: false,
  paginateError: '',

  categories: [],
  products: [],

  total: 0,
  page: 1,
};

function RecommendationReducer(
  state: RecommendationStateType,
  action: RecommendationActionType,
) {
  switch (action.type) {
    case RECOMENDATION_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case RECOMENDATION_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
        categories: action.categories || [],
        total: action.total || 0,
      };
    case RECOMENDATION_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case RECOMENDATION_ACTION_TYPE.PAGINATE_PENDING:
      return {
        ...state,
        paginatePending: true,
      };
    case RECOMENDATION_ACTION_TYPE.PAGINATE_SUCCESS:
      return {
        ...state,
        paginatePending: false,
        products: (action.products || []).concat(state.products),
        page: state.page + 1,
      };
    case RECOMENDATION_ACTION_TYPE.PAGINATE_ERROR:
      return {
        ...state,
        paginatePending: false,
        paginateError: action.error,
      };

    case RECOMENDATION_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function RecomendationContainer(props: RecomendationContainerProps) {
  const { values, name, setFieldValue } = props;
  const [state, setState] = useReducer(RecommendationReducer, initialState);

  const typeHandler = useState(0);
  const [type] = typeHandler;
  const [query, setQuery] = useState<SearchBlockFilterValues>();

  useEffect(() => {
    getProductsByType({ type, ...query })(setState);
  }, [type, query]);

  const onFilter = (props: SearchBlockFilterValues) => {
    const { where, sort, by, category } = props;
    const copy = { ...query };
    copy.where = where;
    copy.sort = sort;
    copy.by = by;
    copy.category = category;
    setQuery(copy);
  };

  const onPagination = () => {
    paginateProductsByType(state.page, { type, ...query })(setState);
  };

  const handleChange = (
    id: string,
    type: 0 | 1 | 2 | 3 | 4,
    status: boolean,
  ) => {
    if (values.recommendationProducts.length >= 3 && status) {
      alert('Максимум 3 рекомендации');
      return false;
    }
    if (status) {
      if (type === 0) {
        values.recommendationProducts.push({ type, masterClassId: { id } });
      }
      if (type === 1) {
        values.recommendationProducts.push({ type, patternProductId: { id } });
      }
      if (type === 2) {
        values.recommendationProducts.push({ type, patternProductId: { id } });
      }
      if (type === 3) {
        values.recommendationProducts.push({ type, patternProductId: { id } });
      }
      if (type === 4) {
        values.recommendationProducts.push({ type, sewingProductId: { id } });
      }
      setFieldValue(name, values);
    } else {
      const result = values.recommendationProducts.filter((item) => {
        if (item.masterClassId) return item.masterClassId.id !== id;
        if (item.patternProductId) return item.patternProductId.id !== id;
        if (item.sewingProductId) return item.sewingProductId.id !== id;
        if (item.postId) return item.postId.id !== id;
      });
      values.recommendationProducts = result;
      setFieldValue(name, values);
    }
    return true;
  };
  const selectedProducts = state.products.filter((item) => {
    if (!item) return false;
    if (item.type === 0) {
      return !!values.recommendationProducts.find(
        (i: any) => i.masterClassId?.id === item.id,
      );
    }
    if (item.type === 1) {
      return !!values.recommendationProducts.find(
        (i: any) => i.patternProductId?.id === item.id,
      );
    }
    if (item.type === 2) {
      return !!values.recommendationProducts.find(
        (i: any) => i.patternProductId?.id === item.id,
      );
    }
    if (item.type === 3) {
      return !!values.recommendationProducts.find(
        (i: any) => i.sewingProductId?.id === item.id,
      );
    }
    if (item.type === 4) {
      return !!values.recommendationProducts.find(
        (i: any) => i.postId?.id === item.id,
      );
    }
  });

  return (
    <RecommendationComponent
      state={state}
      selectedProducts={selectedProducts}
      handleChange={handleChange}
      onFilter={onFilter}
      onPagination={onPagination}
      filterOptions={filterOptions}
      typeHandler={typeHandler}
    />
  );
}
export const filterOptions = [
  {
    id: 0,
    tid: 'OTHER.CATEGORY_FILTER.ALL',
  },
  {
    id: 1,
    tid: 'OTHER.CATEGORY_FILTER.FROM_A_TO_Z',
    sort: 'title',
    by: 'ASC',
  },
  {
    id: 2,
    tid: 'OTHER.CATEGORY_FILTER.FROM_Z_TO_A',
    sort: 'title',
    by: 'DESC',
  },
  {
    id: 3,
    tid: 'По популярности',
    sort: 'clicks',
    by: 'DESC',
  },
];
