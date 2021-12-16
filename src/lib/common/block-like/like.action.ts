import { httpRequest } from 'src/main/http';
import { LikeDispatch } from './like.type';

function convertData(id: string, type: 0 | 1 | 2 | 3 | 4) {
  if (type === 0) return { masterClassId: id };
  if (type === 1) return { patternProductId: id };
  if (type === 2) return { patternProductId: id };
  if (type === 3) return { sewingProductId: id };
  if (type === 4) return { postId: id };
}

export function likeAction(id: string, type: 0 | 1 | 2 | 3 | 4) {
  return async (setState: LikeDispatch) => {
    setState({
      type: 'pending',
    });
    try {
      await httpRequest({
        url: '/like/create',
        method: 'POST',
        data: convertData(id, type),
      });
      setState({
        type: 'success',
      });
    } catch (err: any) {
      if (err.response) {
        setState({
          type: 'success',
        });
      } else console.log(err);
    }
  };
}

export function unlikeAction(
  id: string,
  type: 0 | 1 | 2 | 3 | 4,
  updateLikesPage: (id: string) => void,
) {
  return async (setState: LikeDispatch) => {
    setState({
      type: 'pending',
    });
    try {
      await httpRequest({
        url: '/like/delete',
        method: 'DELETE',
        data: convertData(id, type),
      });
      setState({
        type: 'success',
      });
      updateLikesPage(id);
    } catch (err: any) {
      if (err.response) {
        setState({
          type: 'success',
        });
      } else console.log(err);
    }
  };
}
