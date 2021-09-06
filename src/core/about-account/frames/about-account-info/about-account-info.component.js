import styled from 'styled-components';
import moment from 'moment';
import { ReactComponent as UserIcon } from '../../../../asset/svg/user.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary as Title } from '../../../../lib/element/title';
import { SectionLayout } from '../../../../lib/element/layout';
import { Spinner } from '../../../../lib/element/spinner';

export function AboutAccountInfoComponent({ isUserPending, user }) {
  return (
    isUserPending ? <Spinner /> :
    <SectionLayout>
      {user.userInfo?.fullName && (
        <LineCase>
          <UserIcon />
          <UserTitle tid={user.userInfo?.fullName} />
        </LineCase>
      )}
      <SectionLayout type="SMALL">
        <TitlePrimary tid="Об аккаунте" />
        <LineSection>
          <SectionLayout type="TEXT">
            <InfoTitle tid="Дата регистрации" />
            <InfoText tid={moment(user.createdDate).format('MMMM DD, YYYY')} />
          </SectionLayout>
          <SectionLayout type="TEXT">
            <InfoTitle tid="Статус" />
            <StatusInfo
              status={user.emailConfirmed}
              tid={user.emailConfirmed ? 'Верефицирован' : 'Не верефицирован'}
            />
          </SectionLayout>
        </LineSection>
      </SectionLayout>
      <SectionLayout type="SMALL">
        <TitlePrimary tid="Доставка и оплата" />
        <LineSection>
          {user.userInfo?.location && (
            <SectionLayout type="TEXT">
              <InfoTitle tid="Адрес доставки" />
              <InfoText tid={user.userInfo?.location} />
            </SectionLayout>
          )}
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
