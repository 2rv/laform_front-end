import { ERROR_PAGE_CONFIG } from './error.constant';
import { ErrorComponent } from './error.component';

export function ErrorContainer(props) {
  const { errorStatus } = props;
  const config = ERROR_PAGE_CONFIG[errorStatus];

  return <ErrorComponent {...config} />;
}
