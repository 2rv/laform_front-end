import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../../asset/svg/user.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { TitlePrimary as Title } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { ConvertDate } from 'src/lib/common/time-convert';
// import { ButtonBasic } from 'src/lib/element/button';

export function AboutAccountInfoComponent({ user }) {
  return (
    <SectionLayout>
      {user?.userSettingId?.fullName && (
        <LineCase>
          <UserIcon />
          <UserTitle tid={user?.userSettingId?.fullName} />
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
            <InfoTitle tid="PROFILE.EMAIL" />
            <InfoText>{user.email}</InfoText>
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
          <SectionLayout type="TEXT">
            <InfoTitle tid="PROFILE.PURHCASES_QUANTITY" />
            <InfoText tid={user?.purchase?.length} />
          </SectionLayout>
        </LineSection>
      </SectionLayout>
      <SectionLayout type="SMALL">
        <TitlePrimary tid="PROFILE.SHIPPING_AND_PAYMENT" />
        <LineSection>
          {user?.userSettingId?.location && (
            <SectionLayout type="TEXT">
              <InfoTitle tid="PROFILE.DELIVERY_ADDRESS" />
              <InfoText tid={user?.userSettingId?.location} />
            </SectionLayout>
          )}
          <SectionLayout type="TEXT">
            <InfoTitle tid="PROFILE.PAYMENT_METHOD" />
            <InfoText
              tid={
                user?.userSettingId?.paymentType === 1
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
  flex-wrap: wrap;
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