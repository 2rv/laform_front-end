import { useEffect, useState } from 'react';
import { createLike, deleteLike } from './like.action';
import { LIKE_STORE_NAME } from './like.constant';
import { LikeComponent } from './like.component';
import { useDispatch, useSelector } from 'react-redux';
import { likeConvertType } from './like.convert';
import { getRequestData } from 'src/main/store/store.service';

export function LikeContainer({ id, type, like }) {
  const dispatch = useDispatch();

  const { likeState } = useSelector((state) => ({
    likeState: state[LIKE_STORE_NAME].like,
  }));

  const [isLiked, setLike] = useState(false);
  useEffect(() => setLike(like), [like]);

  const currentId = getRequestData(likeState);
  useEffect(() => {
    if (typeof currentId !== 'object') {
      if (toString(currentId) === toString(id)) {
        console.log(id);
        setLike(!isLiked);
      }
    }
  }, [currentId]);

  const onLike = () => {
    const data = likeConvertType(id, type);
    if (isLiked) dispatch(deleteLike(data, id));
    else dispatch(createLike(data, id));
  };
  return <LikeComponent onLike={onLike} like={isLiked} />;
}
