import { BasicCommentProps } from 'src/lib/basic-types';
import { CommentsProps } from 'src/lib/common/block-comments';
import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { POST_PAGE_ROUTE_PATH } from '../post-page';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';

export const convertCommentsData = (comments: BasicCommentProps[]) => {
  return comments.reduce<CommentsProps[]>((acc, comment) => {
    if (comment.masterClassId) {
      acc.push({
        id: comment.id,
        name: comment.masterClassId.titleRu,
        image: comment.masterClassId.images[0]?.fileUrl,
        text: comment.text,
        createDate: comment.createDate,
        path: MASTER_CLASS_PRODUCT_ROUTE_PATH,
        pathConfig: { params: { id: comment.masterClassId.id } },
      });
    }
    if (comment.patternProductId) {
      acc.push({
        id: comment.id,
        name: comment.patternProductId.titleRu,
        image: comment.patternProductId.images[0].fileUrl,
        text: comment.text,
        createDate: comment.createDate,
        path: PATTERNS_PRODUCT_ROUTE_PATH,
        pathConfig: { params: { id: comment.patternProductId.id } },
      });
    }
    if (comment.sewingProductId) {
      acc.push({
        id: comment.id,
        name: comment.sewingProductId.titleRu,
        image: comment.sewingProductId.images[0].fileUrl,
        text: comment.text,
        createDate: comment.createDate,
        path: SEWING_GOODS_PRODUCT_ROUTE_PATH,
        pathConfig: { params: { id: comment.sewingProductId.id } },
      });
    }
    if (comment.postId) {
      acc.push({
        id: comment.id,
        name: comment.postId.titleRu,
        image: comment.postId.image.fileUrl,
        text: comment.text,
        createDate: comment.createDate,
        path: POST_PAGE_ROUTE_PATH,
        pathConfig: { params: { id: comment.postId.id } },
      });
    }
    return acc;
  }, []);
};
