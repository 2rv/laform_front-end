import { PageWrapper } from '../../lib/common/page-wrapper';
import { BasketContainer } from './basket.container';

export function BasketPage({ token }) {
  return (
    <PageWrapper>
      <BasketContainer token={token} />
    </PageWrapper>
  );
}
