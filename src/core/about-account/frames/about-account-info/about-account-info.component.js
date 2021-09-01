import styled from 'styled-components';
import moment from 'moment';
import { ReactComponent as UserIcon } from '../../../../asset/svg/user-icon.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary as Title } from '../../../../lib/element/title';
import { SectionLayout } from '../../../../lib/element/layout';
import { Spinner } from '../../../../lib/element/spinner';

export function AboutAccountInfoComponent(props) {
  const {
    isUserPending,
    user,
    isUserDeliveryInfoPending,
    userDeliveryInfo,
  } = props;

  return (
    isUserDeliveryInfoPending ? (
      <Spinner />
    ) : (
      <SectionLayout>
        <LineCase>
          <UserIcon />
          {isUserDeliveryInfoPending ? <></> : <UserTitle tid={userDeliveryInfo.fullname ?? ''} />}
        </LineCase>
        <SectionLayout type="SMALL">
          <TitlePrimary tid="Об аккаунте" />
          <LineSection>
            <SectionLayout type="TEXT">
              <InfoTitle tid="Дата регистрации" />
              {isUserPending ? <></> : (
                <InfoText tid={moment(user.createdDate).format('MMMM DD, YYYY')} />
              )}
            </SectionLayout>
            <SectionLayout type="TEXT">
              <InfoTitle tid="Город" />
              <InfoText tid="Москва" />
            </SectionLayout>
            <SectionLayout type="TEXT">
              <InfoTitle tid="Статус" />
              {isUserPending ? <></> : (
                <StatusInfo
                  status={user.emailConfirmed}
                  tid={user.emailConfirmed ? 'Верефицирован' : 'Не верефицирован'}
                />
              )}
            </SectionLayout>
          </LineSection>
        </SectionLayout>
        <SectionLayout type="SMALL">
          <TitlePrimary tid="Доставка и оплата" />
          <LineSection>
            <SectionLayout type="TEXT">
              <InfoTitle tid="Адрес доставки" />
              {isUserDeliveryInfoPending ? <></> : <InfoText tid={userDeliveryInfo.location ?? ''} />}
            </SectionLayout>
            <SectionLayout type="TEXT">
              <InfoTitle tid="Способ оплаты" />
              <InfoText tid="Наличными при получении" />
            </SectionLayout>
          </LineSection>
        </SectionLayout>
      </SectionLayout>
    )
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
