import {
  CardArticleTypeProps,
  CardMasterClassTypeProps,
  CardPatternTypeProps,
  CardSewingGoodTypeProps,
} from '../card';

export interface BasicCardListTypeProps {
  items:
    | CardArticleTypeProps[]
    | CardSewingGoodTypeProps[]
    | CardPatternTypeProps[]
    | CardMasterClassTypeProps[];
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
