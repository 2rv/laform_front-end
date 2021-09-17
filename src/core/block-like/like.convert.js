import { BLOCK_LIKE_DATA_KEY, BLOCK_LIKE_DATA_NAME } from './like.constant';

export const likeConvertType = (id, type) => {
  if (type === 0) return { masterClassId: id };
  if (type === 1) return { patternProductId: id };
  if (type === 2) return { patternProductId: id };
  if (type === 3) return { sewingProductId: id };
  if (type === 4) return { postId: id };
};

export const perform = (row) => ({
  [BLOCK_LIKE_DATA_KEY.ID]: row[BLOCK_LIKE_DATA_NAME.PRODUCT_ID],
});
