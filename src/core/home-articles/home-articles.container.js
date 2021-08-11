import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
  getRequestData,
} from '../../main/store/store.service';
import { HOME_ARTICLE_STORE_NAME } from './home-articles.constant';
import { HomeArticlesComponent } from './home-articles.component';
import { homeArticleLoad } from './home-articles.action';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

export function HomeArticlesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[HOME_ARTICLE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const articles = getRequestData(state);

  // useEffect(() => {
  //   dispatch(homeArticleLoad());
  // }, []);

  return (
    <HomeArticlesComponent
      isPending={isRequestPending(state.homeArticleList)}
      isSuccess={isRequestSuccess(state.homeArticleList)}
      isError={isRequestError(state.homeArticleList)}
      errorMessage={getRequestErrorMessage(state.homeArticleList)}
      pageLoading={pageLoading}
      articles={HOME_ARTICLES}
    />
  );
}

export const HOME_ARTICLES = [
  {
    ID: 1,
    TITLE: 'Мастер-класс по пошиву мужских брюк 1003',
    LIKED: true,
    IMAGE: 'https://dummyimage.com/400x300/000/ffffff&text=+',
    DATE: '1 неделю назад',
  },
  {
    ID: 2,
    TITLE: 'Мастер-класс по пошиву мужских брюк 1004',
    LIKED: false,
    IMAGE: 'https://dummyimage.com/400x300/4f4f4f/ffffff&text=+',
    DATE: 'вчера',
  },
  {
    ID: 3,
    TITLE: 'Мастер-класс по пошиву мужских брюк 1005',
    LIKED: true,
    IMAGE: 'https://dummyimage.com/400x300/000545/ffffff&text=+',
    DATE: 'сегодня',
  },
];
