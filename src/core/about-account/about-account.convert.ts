import {
  BasicCommentProps,
  BasicRecommendationProducsType,
  BasicUserInfoType,
} from 'src/lib/basic-types';
import { CommentsProps } from 'src/lib/common/block-comments';
import { ARTICLE_PAGE_ROUTE_PATH } from '../article-page';
import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { convertOrdersData } from '../orders/orders.convert';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';

interface LikesProps {
  id: string;
  name: string;
  image: string;
  category: string;
  path: Function;
  pathConfig: { params: { id: string } };
}

interface UserInfoProps {
  user: {
    address: string;
    fullName: string;
    purchaseCount: number;
    emailConfirmed: boolean;
    createDate: Date;
    email: string;
  };
  purchase: {};
  likes: (LikesProps | undefined)[];
  comments: (CommentsProps | undefined)[];
}

export const convertUserInfo = (data: BasicUserInfoType): UserInfoProps => {
  const { country, city, settlement, street, house, postal_code } =
    data.userSettingId.address;

  return {
    user: {
      address: `
		${Boolean(country) ? country + ', ' : ''}
		${Boolean(city) ? city + ', ' : ''}
		${Boolean(settlement) ? settlement + ', ' : ''}
		${Boolean(street) ? street + ', ' : ''}
		${Boolean(house) ? house + ', ' : ''}
		${Boolean(postal_code) ? postal_code : ''}
	`,
      fullName: data.userSettingId.fullName,
      purchaseCount: data.purchase.length,
      emailConfirmed: data.emailConfirmed,
      createDate: data.createDate,
      email: data.email,
    },
    purchase: data.purchase.map(convertOrdersData),
    likes: convertLikesData(data.like),
    comments: convertCommentsData(data.comment),
  };
};
const convertLikesData = (likes: BasicRecommendationProducsType[]) => {
  return likes.map((like) => {
    const product =
      like.masterClassId ||
      like.patternProductId ||
      like.sewingProductId ||
      like.postId;

    if (product.type === 0) {
      return {
        id: like.id,
        name: product.titleRu,
        image: product.images[0].fileUrl,
        category: 'PROFILE.CATEGORIES.MASTER_CLASS',
        path: MASTER_CLASS_PRODUCT_ROUTE_PATH,
        pathConfig: { params: { id: product.id } },
      };
    } else if (product.type === 1 || product.type === 2) {
      return {
        id: like.id,
        name: product.titleRu,
        image: product.images[0].fileUrl,
        category:
          product.type === 1
            ? 'PROFILE.CATEGORIES.ELECTRONIC_PATTERN'
            : 'PROFILE.CATEGORIES.PRINTED_PATTERN',
        path: PATTERNS_PRODUCT_ROUTE_PATH,
        pathConfig: { params: { id: product.id } },
      };
    } else if (product.type === 3) {
      return {
        id: like.id,
        name: product.titleRu,
        image: product.images[0].fileUrl,
        category: 'PROFILE.CATEGORIES.SEWING_GOODS',
        path: SEWING_GOODS_PRODUCT_ROUTE_PATH,
        pathConfig: { params: { id: product.id } },
      };
    } else if (product.type === 4) {
      return {
        id: like.id,
        name: product.titleRu,
        image: product.images[0].fileUrl,
        category: 'PROFILE.CATEGORIES.ARTICLE',
        path: ARTICLE_PAGE_ROUTE_PATH,
        pathConfig: { params: { id: product.id } },
      };
    }
    return;
  });
};
export const convertCommentsData = (comments: BasicCommentProps[]) => {
  return comments.map((comment) => {
    const product =
      comment.masterClassId ||
      comment.patternProductId ||
      comment.sewingProductId ||
      comment.postId;

    if (product.type === 0) {
      return {
        id: comment.id,
        name: product.titleRu,
        image: product.images[0].fileUrl,
        text: comment.text,
        createDate: comment.createDate,
        path: MASTER_CLASS_PRODUCT_ROUTE_PATH,
        pathConfig: { params: { id: product.id } },
      };
    } else if (product.type === 1 || product.type === 2) {
      return {
        id: comment.id,
        name: product.titleRu,
        image: product.images[0].fileUrl,
        text: comment.text,
        createDate: comment.createDate,
        path: PATTERNS_PRODUCT_ROUTE_PATH,
        pathConfig: { params: { id: product.id } },
      };
    } else if (product.type === 3) {
      return {
        id: comment.id,
        name: product.titleRu,
        image: product.images[0].fileUrl,
        text: comment.text,
        createDate: comment.createDate,
        path: SEWING_GOODS_PRODUCT_ROUTE_PATH,
        pathConfig: { params: { id: product.id } },
      };
    } else if (product.type === 4) {
      return {
        id: comment.id,
        name: product.titleRu,
        image: product.images[0].fileUrl,
        text: comment.text,
        createDate: comment.createDate,
        path: ARTICLE_PAGE_ROUTE_PATH,
        pathConfig: { params: { id: product.id } },
      };
    }
    return;
  });
};
