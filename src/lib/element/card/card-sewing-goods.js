import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { Price } from '../price';
import { ButtonPrimary, IconButton } from '../button';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { ReactComponent as LikeIcon } from '../../../asset/svg/favorite-icon.svg';
import { useState } from 'react';

export function CardSewingGoods(props) {
  const {
    id,
    image = null,
    name = null,
    select = false,
    like = false,
    bestseller = false,
    price = { min: null, discount: null, max: null },
  } = props.data;

  const [isLiked, setLike] = useState(like);
  const [isSelected, setSelect] = useState(select);

  const onLike = () => {
    setLike(!isLiked);
  };

  const onSelect = () => {
    setSelect(!isSelected);
  };

  return (
    <Container>
      <CardImage
        image={image}
        bestseller={bestseller}
        action={price?.discount}
      />
      <Content>
        <CardName tid={name} />
        <Price
          min={price?.min}
          max={price?.max}
          discount={price?.discount}
          valute="OTHER.VALUTE"
        />
      </Content>
      <LineCase>
        <Button
          width={165}
          onClick={onSelect}
          select={isSelected}
          tid={isSelected ? 'OTHER.SELECTED' : 'OTHER.SELECT'}
        />
        <LikeButton onClick={onLike} like={isLiked}>
          <LikeIcon />
        </LikeButton>
      </LineCase>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 360px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const Button = styled(ButtonPrimary)`
  ${(p) => p.select && `background-color: ${THEME_COLOR.DARK_GRAY}`}
`;
const LikeButton = styled(IconButton)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${(p) =>
    p.like ? THEME_COLOR.DARK_GRAY : THEME_COLOR.GRAY};
`;
const CardName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
