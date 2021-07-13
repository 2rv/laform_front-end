import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary as SecondaryText } from '../../../../lib/element/text';
import { ButtonBasic } from '../../../../lib/element/button';
import { TitlePrimary } from '../../../../lib/element/title';
export function AboutAccountActivityItemComponent(props) {
  const {
    id,
    name,
    backgroundImage,
    color,
    size,
    category,
    numberOfItems,
    price,
    status,
    commentText,
  } = props;
  const { statusColor, statusTid } = StatusConvert(status);
  return (
    <>
      <GridContainer>
        <Image src={backgroundImage} />
        <PrimaryText tid={name} />
        <TextContainer>
          {commentText ? (
            <>
              <SecondaryText tid={commentText} />
              <ReadFull tid="Читать полностью" />
            </>
          ) : (
            <>
              {color && (
                <>
                  <SecondaryText>Цвет:</SecondaryText>
                  <PrimaryText>{color},</PrimaryText>
                </>
              )}
              {size && (
                <>
                  <SecondaryText>Размер:</SecondaryText>
                  <PrimaryText>{size},</PrimaryText>
                </>
              )}
              {category && (
                <>
                  <SecondaryText>Категория:</SecondaryText>
                  <PrimaryText>{category},</PrimaryText>
                </>
              )}
              {numberOfItems && (
                <>
                  <SecondaryText>Количество:</SecondaryText>
                  <PrimaryText>{numberOfItems}</PrimaryText>
                </>
              )}
            </>
          )}
        </TextContainer>
        {price && (
          <PriceContainer>
            <TitlePrimary tid={price} />
            <SecondaryText tid="руб." />
          </PriceContainer>
        )}
        {status && <Status tid={statusTid} color={statusColor} />}
      </GridContainer>
      <Divider />
    </>
  );
}
const StatusConvert = (statusId) => {
  switch (statusId) {
    case 1:
      return { statusColor: THEME_COLOR.TEXT.SUCCESS, statusTid: 'Оплачено' };
    case 2:
      return { statusColor: THEME_COLOR.TEXT.BLUE, statusTid: 'Доставлено' };
    default:
      return { statusColor: null, statusTid: 'Нет информации' };
  }
};

const Status = styled(SecondaryText)`
  color: ${({ color }) => color && color};
  margin-left: auto;
`;
const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;
const TextContainer = styled.div`
  display: flex;
  gap: ${spacing(1)};
  flex-wrap: wrap;
  align-items: baseline;
`;
const PriceContainer = styled(TextContainer)`
  justify-content: center;
`;
const Image = styled.img`
  height: 75px;
  width: 75px;
`;
const PrimaryText = styled(SecondaryText)`
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const ReadFull = styled(PrimaryText)`
  text-decoration: underline;
`;
const GridContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  align-items: center;
  grid-template-columns: 75px 175px 530px 1fr auto;
  grid-template-rows: 75px;
`;
