import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { isRequestPending, isRequestSuccess } from '../../main/store/store.service';
import { LoaderPrimary } from 'src/lib/element/loader';
import { sendFeedback } from './feedback.action';
import { FEEDBACK_STORE_NAME } from './feedback.constant';
import { SEWING_GOODS_FIELD_NAME } from './feedback.type';
import { formValidation } from './feedback.validation';
import { FeedbackComponent } from './feedback.component';

export function FeedbackContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[FEEDBACK_STORE_NAME].feedback,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const onSubmit = (values) => {
    dispatch(sendFeedback(values));
  };

  const initialValues = () => ({
    [SEWING_GOODS_FIELD_NAME.DESCRIPTION]: '',
  });

  if (pageLoading) {
    return <LoaderPrimary />;
  }

  return (
    <FeedbackComponent
      isPending={isRequestPending(state)}
      isSuccess={isRequestSuccess(state)}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validation={formValidation}
    />
  );
}
