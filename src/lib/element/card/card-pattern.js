import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { Price } from '../price';
import { ButtonPrimary, ButtonBasic } from '../button';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { ReactComponent as LikeIcon } from '../../../asset/svg/favorite-icon.svg';
import { useState } from 'react';

export function CardPattern(props) {
  const {
    id,
    image = null,
    name = null,
    complexity = false,
    select = false,
    like = false,
    bestseller = false,
    patternType = null,
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
        <LineCase>
          <Price
            min={price?.min}
            max={price?.max}
            discount={price?.discount}
            valute="OTHER.VALUTE"
          />
          <ItemCase>
            {[1, 2, 3, 4, 5].map((rate, index) => (
              <ComplexityDot key={index} act={rate <= complexity ? 1 : 0} />
            ))}
          </ItemCase>
        </LineCase>
      </Content>
      <LineCase>
        <Button
          onClick={onSelect}
          select={isSelected}
          tid={isSelected ? 'OTHER.SELECTED' : 'OTHER.SELECT'}
        />
        <LikeButton onClick={onLike} like={isLiked} icon={LikeIcon} />
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
const ItemCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;

const ComplexityDot = styled.div`
  width: 16px;
  min-width: 16px;
  height: 16px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${(p) =>
    p.act ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
`;

const Button = styled(ButtonPrimary)`
  width: 165px;
  padding: ${spacing(3)};
  ${(p) => p.select && `background-color: ${THEME_COLOR.DARK_GRAY}`}
`;
const LikeButton = styled(ButtonBasic)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${(p) =>
    p.like ? THEME_COLOR.DARK_GRAY : THEME_COLOR.GRAY};
`;

const CardName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
