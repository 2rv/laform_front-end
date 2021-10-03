import styled, { css } from 'styled-components';
import { useState } from 'react';
import { THEME_SIZE, THEME_COLOR, spacing } from '../../theme';
import { CardActionTypeProps, CardPriceTypeProps } from './card.type';
import { ButtonPrimary, ButtonSecondary, IconButton } from '../button';
import { LikeButton as LikeAction } from 'src/core/block-like';
import { ReactComponent as DeleteIcon } from '../../../asset/svg/delete-cancel-icon.svg';
import { TextCurrency, TextSecondary } from '../text';
import { Popup } from '../popup';
import { FieldLayout } from '../layout';

export function LikeButton(props: CardActionTypeProps) {
  const { id, type, like = null } = props;
  if (like === null) return null;

  return <LikeAction id={id} type={type} like={like} />;
}
export function SelectButton(props: CardActionTypeProps) {
  const { id, type, onSelect } = props;

  if (!onSelect) return null;

  const [isSelected, setSelect] = useState(false);

  const onSelectCard = () => {
    const result = onSelect(id, type, !isSelected);
    if (result) setSelect(!isSelected);
  };

  return (
    <Button
      onClick={onSelectCard}
      active={isSelected}
      tid={isSelected ? 'OTHER.SELECTED' : 'OTHER.SELECT'}
    />
  );
}
export function DeleteButton(props: CardActionTypeProps) {
  const { id, admin, onDelete } = props;
  if (!admin || !onDelete) return null;

  return (
    <Popup
      mobileRight
      disableRelative
      top={0}
      content={(setVisible: Function) => (
        <Content>
          <TextSecondary tid="OTHER.ARE_YOU_SURE_TO_DELETE_PRODUCT" />
          <FieldLayout>
            <ButtonSecondary
              tid="OTHER.YES"
              onClick={() => {
                onDelete(id, { deleted: true });
                setVisible(false);
              }}
            />
            <ButtonPrimary
              tid="OTHER.CANCEL"
              onClick={() => setVisible(false)}
            />
          </FieldLayout>
        </Content>
      )}
      children={
        <ButtonIcon>
          <DeleteIcon />
        </ButtonIcon>
      }
    />
  );
}
const Button = styled(ButtonPrimary)<{ active?: boolean }>`
  ${(p) =>
    p.active &&
    css`
      background-color: ${THEME_COLOR.DARK_GRAY};
    `}
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: ${spacing(2)};
  line-height: 1.5;
`;
const ButtonIcon = styled(IconButton)`
  padding: 0;
`;

export function ComplexityDots(props: { complexity?: number }) {
  const { complexity = 0 } = props;

  return (
    <ComplexityCase>
      {[1, 2, 3, 4, 5].map((rate, index) => (
        <ComplexityDot key={index} active={rate <= complexity} />
      ))}
    </ComplexityCase>
  );
}
const ComplexityCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const ComplexityDot = styled.div<{ active: boolean }>`
  width: 16px;
  min-width: 16px;
  height: 16px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${(p) =>
    p.active ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
`;

export const CardName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`;

export function CardPrice(props: CardPriceTypeProps) {
  const { price = 0, discount = 0 } = props;
  return (
    <div>
      {Boolean(discount) ? (
        <>
          <Text price={price - (price / 100) * discount} />
          &nbsp;
          <ThroughText price={price} />
        </>
      ) : (
        <Text price={price} />
      )}
      &nbsp;
      <LightText tid="OTHER.VALUTE" />
    </div>
  );
}
const LightText = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Text = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const ThroughText = styled(TextCurrency)`
  text-decoration: line-through;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
