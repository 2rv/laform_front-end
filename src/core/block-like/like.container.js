import { useEffect, useState } from 'react';
import { createLike, deleteLike } from './like.action';
import { LIKE_STORE_NAME, BLOCK_LIKE_DATA_KEY } from './like.constant';
import { LikeComponent } from './like.component';
import { useDispatch, useSelector } from 'react-redux';
import { likeConvertType } from './like.convert';
import { getRequestData, isRequestPending } from 'src/main/store/store.service';

export function LikeContainer({ id, type, like }) {
  const dispatch = useDispatch();

  const { likeState } = useSelector((state) => ({
    likeState: state[LIKE_STORE_NAME].like,
  }));

  const [isLiked, setLike] = useState(false || like);
  useEffect(() => {
    setLike(like);
  }, [like]);

  const requestData = getRequestData(likeState);
  const productId = requestData[BLOCK_LIKE_DATA_KEY.ID];
  useEffect(() => {
    if (productId == id && likeState.success === true) {
      setLike(!isLiked);
    }
  }, [likeState.success]);

  const onLike = () => {
    const data = likeConvertType(id, type);
    console.log(JSON.stringify(data));
    console.log(isLiked);
    if (isLiked) dispatch(deleteLike(data));
    else dispatch(createLike(data));
  };
  return (
    <LikeComponent
      isPending={isRequestPending(likeState)}
      onLike={onLike}
      like={isLiked}
    />
  );
}
