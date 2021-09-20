import styled from 'styled-components';
import moment from 'moment';
import { ReactComponent as UserIcon } from '../../../../asset/svg/user.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary as Title } from '../../../../lib/element/title';
import { SectionLayout } from '../../../../lib/element/layout';
import { Spinner } from '../../../../lib/element/spinner';
import { ConvertDate } from 'src/lib/common/time-convert';

export function AboutAccountInfoComponent({ isUserPending, user }) {
  return isUserPending ? (
    <Spinner />
  ) : (
    <SectionLayout>
      {user?.userInfo?.fullName && (
        <LineCase>
          <UserIcon />
          <UserTitle tid={user?.userInfo?.fullName} />
        </LineCase>
      )}
      <SectionLayout type="SMALL">
        <TitlePrimary tid="PROFILE.ABOUT_ACCOUNT" />
        <LineSection>
          <SectionLayout type="TEXT">
            <InfoTitle tid="PROFILE.DATE_OF_REGISTRATION" />
            <InfoText>{ConvertDate(user.createDate, 'MMMM DD, YYYY')}</InfoText>
          </SectionLayout>
          <SectionLayout type="TEXT">
            <InfoTitle tid="PROFILE.STATUS" />
            <StatusInfo
              status={user.emailConfirmed}
              tid={
                user.emailConfirmed
                  ? 'PROFILE.VERIFIED'
                  : 'PROFILE.NOT_VERIFIED'
              }
            />
          </SectionLayout>
        </LineSection>
      </SectionLayout>
      <SectionLayout type="SMALL">
        <TitlePrimary tid="PROFILE.SHIPPING_AND_PAYMENT" />
        <LineSection>
          {user?.userInfo?.location && (
            <SectionLayout type="TEXT">
              <InfoTitle tid="PROFILE.DELIVERY_ADDRESS" />
              <InfoText tid={user?.userInfo?.location} />
            </SectionLayout>
          )}
          <SectionLayout type="TEXT">
            <InfoTitle tid="PROFILE.PAYMENT_METHOD" />
            <InfoText
              tid={
                user?.userInfo?.paymentType === 1
                  ? 'PROFILE.ONLINE'
                  : 'PROFILE.OTHER'
              }
            />
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
const InfoText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.DEFAULT};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const StatusInfo = styled(InfoText)`
  color: ${(p) =>
    p.status ? THEME_COLOR.TEXT.SUCCESS : THEME_COLOR.TEXT.DANGER};
`;
