import {
  CardArticleType,
  CardSewingGoodType,
  CardPatternType,
  CardMasterClassType,
} from '../card';

export interface BasicCardListTypeProps {
  items:
    | CardArticleType[]
    | CardSewingGoodType[]
    | CardPatternType[]
    | CardMasterClassType[];
  onSelect?: Function;
  onDelete?: Function;
  admin?: boolean;
  emptyText?: string;
  emptyTvalue?: object;
  isCreateList?: boolean;
  isAllProductsPage?: boolean;
}
export interface CardListTypeProps extends BasicCardListTypeProps {
  path: string;
  title: string;
}
