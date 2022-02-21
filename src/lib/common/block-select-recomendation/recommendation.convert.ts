import {
  BasicProductLinkType,
  BasicRecommendationType,
} from 'src/lib/basic-types';
import { CardProductLinkType } from 'src/lib/element/card';
import {
  masterClassItemConverter,
  convertPatternItemConverter,
  convertSewingGoodItemConverter,
  convertArticleItemConverter,
} from '../product-converters/convert.basic';
import { RecommendationType } from './recomendation.type';

export function convertProductsLink(data: BasicProductLinkType[]) {
  return data.reduce<CardProductLinkType[]>((acc, item) => {
    if (item.masterClassId) {
      acc.push({
        id: item.id,
        masterClassId: masterClassItemConverter(item.masterClassId),
      });
    }
    if (item.patternProductId) {
      acc.push({
        id: item.id,
        patternProductId: convertPatternItemConverter(item.patternProductId),
      });
    }
    if (item.sewingProductId) {
      acc.push({
        id: item.id,
        sewingProductId: convertSewingGoodItemConverter(item.sewingProductId),
      });
    }
    if (item.postId) {
      acc.push({
        id: item.id,
        postId: convertArticleItemConverter(item.postId),
      });
    }
    return acc;
  }, []);
}

export function convertRecommendations(
  data: BasicRecommendationType,
): RecommendationType {
  return {
    id: data?.id,
    recommendationProducts: convertProductsLink(
      data?.recommendationProducts || [],
    ),
  };
}
