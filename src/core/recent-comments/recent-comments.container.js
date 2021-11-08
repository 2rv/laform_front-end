import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { LoaderPrimary } from 'src/lib/element/loader';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { getRequestData } from '../../main/store/store.service';
import { fetchRecentComments } from './recent-comments.action';
import { RECENT_COMMENTS_STORE_NAME } from './recent-comments.constant';
import { RECENT_COMMENTS_ACTION_TYPE } from './recent-comments.type';
import { RecentCommentsComponent } from './recent-comments.component';

export function RecentCommentsContainer() {
  const dispatch = useDispatch();
  const { commentsState, pageLoading, currentLang } = useSelector((state) => ({
    commentsState: state[RECENT_COMMENTS_STORE_NAME].comments,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    dispatch({ type: RECENT_COMMENTS_ACTION_TYPE.RESET_COMMENTS_STATE });
    dispatch(fetchRecentComments());
  }, []);

  if (pageLoading) {
    return <LoaderPrimary />;
  }

  return (
    <RecentCommentsComponent
      comments={getRequestData(commentsState, {}).comments}
      fetchData={() => dispatch(fetchRecentComments(commentsState?.data.currentPage))}
      hasMore={Number(commentsState?.data.comments.length) < Number(commentsState?.data.totalRecords)}
    />
  );
}
