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
  onCart?: Function;
  onSelect?: Function;
  onDelete?: Function;
  admin?: boolean;
  emptyText?: string;
  emptyTvalue?: object;
}
export interface CardListTypeProps extends BasicCardListTypeProps {
  path: string;
  title: string;
}
