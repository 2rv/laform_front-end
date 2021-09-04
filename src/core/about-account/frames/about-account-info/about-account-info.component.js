import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../../../asset/svg/user.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary as Title } from '../../../../lib/element/title';
import { SectionLayout } from '../../../../lib/element/layout';

export function AboutAccountInfoComponent() {
  return (
    <SectionLayout>
      <LineCase>
        <UserIcon />
        <UserTitle tid="Илья Зинченко" />
      </LineCase>
      <SectionLayout type="SMALL">
        <TitlePrimary tid="Об аккаунте" />
        <LineSection>
          <SectionLayout type="TEXT">
            <InfoTitle tid="Дата регистрации" />
            <InfoText tid="Январь 25, 2021" />
          </SectionLayout>
          <SectionLayout type="TEXT">
            <InfoTitle tid="Город" />
            <InfoText tid="Москва" />
          </SectionLayout>
          <SectionLayout type="TEXT">
            <InfoTitle tid="Статус" />
            <StatusInfo status={true} tid="Верефицирован" />
          </SectionLayout>
        </LineSection>
      </SectionLayout>
      <SectionLayout type="SMALL">
        <TitlePrimary tid="Доставка и оплата" />
        <LineSection>
          <SectionLayout type="TEXT">
            <InfoTitle tid="Адрес доставки" />
            <InfoText tid="Москва, Ул. Ленина 205А" />
          </SectionLayout>
          <SectionLayout type="TEXT">
            <InfoTitle tid="Способ оплаты" />
            <InfoText tid="Наличными при получении" />
          </SectionLayout>
        </LineSection>
      </SectionLayout>
    </SectionLayout>
  );
}

const LineSection = styled.div`
  gap: ${spacing(6)};
  display: flex;
`;
const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
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
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const InfoText = styled(Title)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.DEFAULT};
`;
const StatusInfo = styled(InfoText)`
  color: ${(p) =>
    p.status ? THEME_COLOR.TEXT.SUCCESS : THEME_COLOR.TEXT.DANGER};
`;
