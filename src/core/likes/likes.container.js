import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  likeSewingProductUploadData,
  likeMasterClassUploadData,
  likePatternProductUploadData,
  likePostUploadData,
} from './likes.action';
import { ALL_LIKES_STORE_NAME } from './likes.constant';
import { PatternsComponent } from './likes.component';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { addToBasket } from '../basket';
import { LIKE_STORE_NAME } from '../block-like';

export function LikesContainer() {
  const dispatch = useDispatch();
  const { likes, pageLoading, currentLang, user, isAuth, updated } =
    useSelector((state) => ({
      likes: state[ALL_LIKES_STORE_NAME].likes,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
      updated: state[LIKE_STORE_NAME].like.success,
    }));

  const [activeTab, setActiveTab] = useState(3);

  useEffect(() => {
    if (activeTab === 3) {
      dispatch(likeSewingProductUploadData(currentLang));
    } else if (activeTab === 2) {
      dispatch(likeMasterClassUploadData(currentLang));
    } else if (activeTab === 1) {
      dispatch(likePatternProductUploadData(currentLang));
    } else if (activeTab === 0) dispatch(likePostUploadData(currentLang));
  }, [activeTab, updated]);

  return (
    <PatternsComponent
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabItems={tabs}
      listItems={getRequestData(likes, null)}
      pageLoading={pageLoading}
      isPending={isRequestPending(likes)}
    />
  );
}

export const tabs = [
  { name: 'ALL_LIKES.TABS.SEWING_PRODUCT', type: 3 },
  { name: 'ALL_LIKES.TABS.MASTER_CLASS', type: 2 },
  { name: 'ALL_LIKES.TABS.PATTERN_PRODUCT', type: 1 },
  { name: 'ALL_LIKES.TABS.POST', type: 0 },
];
