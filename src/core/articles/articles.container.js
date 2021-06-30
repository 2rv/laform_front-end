import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

import { ArticlesComponent } from './articles.component';
import { TEST_ARTICLES_ITEMS } from './articles.constant';

export function ArticlesContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  return (
    <ArticlesComponent activePath={activePath} items={TEST_ARTICLES_ITEMS} />
  );
}
