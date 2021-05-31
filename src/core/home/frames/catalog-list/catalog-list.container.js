import { CATALOG_LIST_ITEMS } from './catalog-list.constant';
import { CatalogListComponent } from './catalog-list.component';

export function CatalogListContainer(props) {
  return <CatalogListComponent items={CATALOG_LIST_ITEMS} {...props} />;
}
