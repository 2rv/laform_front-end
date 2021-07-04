import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary as SecondaryText } from '../../../../lib/element/text';
import { ButtonBasic } from '../../../../lib/element/button';
import { TitlePrimary } from '../../../../lib/element/title';
export function OrdersListItemComponent(props) {
  const {
    id,
    backgroundImage,
    name,
    goodsDetails: { color, size, category, numberOfItems },
    diliveryData: { fullName, city, diliveryAdress, paymentMethod, phone },
    price,
    status,
  } = props;
  const { statusColor, statusTid } = StatusConvert(status);
  return (
    <>
      <NameColumn>
        <Image src={backgroundImage} />
        <PrimaryText tid={name} />
      </NameColumn>
      <DetailsColumn>
        {color && (
          <Line>
            <SecondaryText>Цвет:</SecondaryText>
            <PrimaryText tid={color} />
          </Line>
        )}
        {size && (
          <Line>
            <SecondaryText>Размер:</SecondaryText>
            <PrimaryText tid={size} />
          </Line>
        )}
        {category && (
          <Line>
            <SecondaryText>Категория:</SecondaryText>
            <PrimaryText tid={category} />
          </Line>
        )}
        {numberOfItems && (
          <Line>
            <SecondaryText>Количество:</SecondaryText>
            <PrimaryText tid={numberOfItems} />
          </Line>
        )}
      </DetailsColumn>
      <DeliveryColumn>
        {fullName && (
          <Line>
            <SecondaryText>фИО:</SecondaryText>
            <PrimaryText tid={fullName} />
          </Line>
        )}
        {city && (
          <Line>
            <SecondaryText>Город:</SecondaryText>
            <PrimaryText tid={city} />
          </Line>
        )}
        {diliveryAdress && (
          <Line>
            <SecondaryText>Адресс доставки:</SecondaryText>
            <PrimaryText tid={diliveryAdress} />
          </Line>
        )}
        {paymentMethod && (
          <Line>
            <SecondaryText>Способ оплаты:</SecondaryText>
            <PrimaryText tid={paymentMethod} />
          </Line>
        )}
        {phone && (
          <Line>
            <SecondaryText>Контактный телефон:</SecondaryText>
            <PrimaryText tid={phone} />
          </Line>
        )}
      </DeliveryColumn>
      <PriceColumn>
        <TitlePrimary tid={price} />
        <SecondaryText tid="руб." />
      </PriceColumn>
      <StatusColumn>
        <Status tid={statusTid} color={statusColor} />
      </StatusColumn>
    </>
  );
}

const StatusConvert = (statusId) => {
  switch (statusId) {
    case 1:
      return { statusColor: THEME_COLOR.TEXT.BLUE, statusTid: 'Оплачено' };
    case 2:
      return { statusColor: THEME_COLOR.TEXT.SUCCESS, statusTid: 'Доставлено' };
    default:
      return { statusColor: null, statusTid: 'Нет информации' };
  }
};

const Line = styled.div`
  display: flex;
  gap: ${spacing(1)};
  flex-wrap: wrap;
  align-items: baseline;
`;
const Status = styled(SecondaryText)`
  color: ${({ color }) => color && color};
  margin-left: auto;
`;
const Image = styled.img`
  height: 75px;
  width: 75px;
`;
const PrimaryText = styled(SecondaryText)`
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const NameColumn = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  grid-column: 1;
`;
const DetailsColumn = styled.div`
  display: grid;
  gap: ${spacing(1)};
  grid-column: 2;
`;
const DeliveryColumn = styled.div`
  display: grid;
  gap: ${spacing(1)};
  grid-column: 3;
`;
const PriceColumn = styled.div`
  display: flex;
  gap: ${spacing(1)};
  grid-column: 4;
  align-items: baseline;
`;
const StatusColumn = styled.div`
  grid-column: 5;
`;
