import { CommentDto } from 'src/lib/basic-types/create';
import { CommentValues } from './comment.type';

type CommentData = {
  text: string;
  sewingProductId?: string;
  patternProductId?: string;
  masterClassId?: string;
  postId?: string;
};

export function convertForCreate(values: CommentValues): CommentDto {
  const { id, type, value } = values;
  const data: CommentData = {
    text: value,
  };
  if (type === 0) data.masterClassId = id;
  if (type === 1) data.patternProductId = id;
  if (type === 2) data.patternProductId = id;
  if (type === 3) data.sewingProductId = id;
  if (type === 4) data.postId = id;
  return data;
}
