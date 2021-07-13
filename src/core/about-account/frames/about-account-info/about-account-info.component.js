import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../../../asset/svg/user-icon.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary as Title } from '../../../../lib/element/title';
import { IndentLayout } from '../../../../lib/element/layout';

export function AboutAccountInfoComponent() {
  return (
    <IndentLayout>
      <UserNameContainer>
        <UserIcon />
        <UserTitle tid="Илья Зинченко" />
      </UserNameContainer>
      <InfoContainer>
        <TitlePrimary tid="Об аккаунте" />
        <SectionContent>
          <Pair>
            <InfoTitle tid="Дата регистрации" />
            <InfoText tid="Январь 25, 2021" />
          </Pair>
          <Pair>
            <InfoTitle tid="Город" />
            <InfoText tid="Москва" />
          </Pair>
          <Pair>
            <InfoTitle tid="Статус" />
            <StatusInfo status={false} tid="Верефицирован" />
          </Pair>
        </SectionContent>
      </InfoContainer>
      <InfoContainer>
        <TitlePrimary tid="Доставка и оплата" />
        <SectionContent>
          <Pair>
            <InfoTitle tid="Адрес доставки" />
            <InfoText tid="Москва, Ул. Ленина 205А" />
          </Pair>
          <Pair>
            <InfoTitle tid="Способ оплаты" />
            <InfoText tid="Наличными при получении" />
          </Pair>
        </SectionContent>
      </InfoContainer>
    </IndentLayout>
  );
}
const Pair = styled.div`
  gap: ${spacing(2)};
  display: flex;
  flex-direction: column;
`;
const SectionContent = styled.div`
  gap: ${spacing(6)};
  display: flex;
`;
const UserTitle = styled(Title)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const TitlePrimary = styled(Title)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const InfoTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.DEFAULT};
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
`;
const InfoText = styled(Title)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.DEFAULT};
`;
const StatusInfo = styled(InfoText)`
  color: ${({ status }) =>
    status ? THEME_COLOR.TEXT.SUCCESS : THEME_COLOR.TEXT.DANGER};
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
