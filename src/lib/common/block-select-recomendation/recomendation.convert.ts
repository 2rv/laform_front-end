import { BasicRecommendationType } from 'src/lib/basic-types';
import { RecommendationType } from './recomendation.type';

export function convertRecommendations(
  data: BasicRecommendationType,
): RecommendationType {
  return {
    id: data?.id,
    recommendationProducts: (data?.recommendationProducts || []).map((item) => {
      return {
        id: item.id,
        masterClassId: item.masterClassId,
        patternProductId: item.patternProductId,
        postId: item.postId,
        sewingProductId: item.sewingProductId,
      };
    }),
  };
}
