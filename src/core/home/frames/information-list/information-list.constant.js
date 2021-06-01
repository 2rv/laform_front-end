import { ReactComponent as SizeIcon } from '../../../../asset/svg/size.svg';
import { ReactComponent as DownloadIcon } from '../../../../asset/svg/arrow-down.svg';
import { ReactComponent as PaperIcon } from '../../../../asset/svg/paper.svg';

import { INFO_ROUTE_PATH } from '../../../info';

export const INFORMATION_LIST_VIEW_ALL_PATH = INFO_ROUTE_PATH;

export const INFORMATION_LIST_ITEMS = [
  {
    icon: SizeIcon,
    tid: 'HOME.INFORMATION_LIST.ITEMS.SIZING_INFO',
    path: INFO_ROUTE_PATH,
  },
  {
    icon: DownloadIcon,
    tid: 'HOME.INFORMATION_LIST.ITEMS.DOWNLOAD_AND_PRINT_PATTERN_INFO',
    path: INFO_ROUTE_PATH,
  },
  {
    icon: PaperIcon,
    tid: 'HOME.INFORMATION_LIST.ITEMS.GLUE_PATTERN_INFO',
    path: INFO_ROUTE_PATH,
  },
];
