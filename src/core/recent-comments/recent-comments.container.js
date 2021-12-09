import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { getRequestData } from '../../main/store/store.service';
import { fetchRecentComments } from './recent-comments.action';
import { RECENT_COMMENTS_STORE_NAME } from './recent-comments.constant';
import { RECENT_COMMENTS_ACTION_TYPE } from './recent-comments.type';
import { RecentCommentsComponent } from './recent-comments.component';

export function RecentCommentsContainer() {
  const dispatch = useDispatch();
  const { commentsState, page, total, pageLoading, currentLang } = useSelector(
    (state) => ({
      commentsState: state[RECENT_COMMENTS_STORE_NAME].comments,
      page: state[RECENT_COMMENTS_STORE_NAME].page,
      total: state[RECENT_COMMENTS_STORE_NAME].total,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    }),
  );
  useEffect(() => {
    dispatch({ type: RECENT_COMMENTS_ACTION_TYPE.RESET_COMMENTS_STATE });
    dispatch(fetchRecentComments());
  }, []);
  function onPagination() {
    dispatch(fetchRecentComments(page));
  }
  const comments = getRequestData(commentsState, []);
  return (
    <RecentCommentsComponent
      comments={comments}
      onPagination={onPagination}
      hasMore={comments.length < total}
    />
  );
}
