import { CardMultiType, CardProductLinkType } from '../card';

export type BasicCardListTypeProps = {
  items: CardMultiType[];
  onSelect?: (id: string, type: 0 | 1 | 2 | 3 | 4, status: boolean) => boolean;
  onDelete?: (id: string, deleted: boolean) => void;
  onRemove?: (id: string) => void;
  admin?: boolean;
  emptyText?: string;
  emptyTvalue?: object;
  isCreateList?: boolean;
  isLoading?: boolean;
  isPagination?: boolean;
  paginateCount?: number;
};
export interface CardListTypeProps extends BasicCardListTypeProps {
  path?: string;
  title?: string;
  isSliced?: boolean;
}
export type CardProductLinkProps = {
  products: CardProductLinkType[];
  onRemove?: (id: string) => void;
  admin?: boolean;
};
