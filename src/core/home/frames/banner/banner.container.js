import { BANNER_LIST_ITEMS } from './banner.constant';
import { BannerComponent } from './banner.component';

export function BannerContainer(props) {
  return <BannerComponent items={BANNER_LIST_ITEMS} {...props} />;
}
