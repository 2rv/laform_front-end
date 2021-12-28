import { CardMultiType } from '../card';

export interface BasicCardListTypeProps {
  items: CardMultiType[];
  onSelect?: Function;
  onDelete?: Function;
  onRemove?: Function;
  admin?: boolean;
  emptyText?: string;
  emptyTvalue?: object;
  isCreateList?: boolean;
  isLoading?: boolean;
  isPagination?: boolean;
  paginateCount?: number;
}
export interface CardListTypeProps extends BasicCardListTypeProps {
  path?: string;
  title?: string;
  isSliced?: boolean;
}
export interface CardListSkeletonProps {
  quantity?: any;
}
