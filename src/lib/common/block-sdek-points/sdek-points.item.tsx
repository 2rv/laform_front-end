import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { text } from '../text';
import { basicSdekPoints } from './sdek-points.type';

interface SdekPointItemProps {
  value: basicSdekPoints;
}

export function SdekPointItem(props: SdekPointItemProps) {
  const { value } = props;
  return (
    <Container>
      {value.office_image_list?.[0] ? (
        <Image src={value.office_image_list[0].url} />
      ) : (
        <Image src="/static/image/sdek-logo.jpg" />
      )}
      <SectionLayout type="TEXT">
        <Title tid={value.location.address_full} />
        <TextSecondary
          tid="SDEK_POINTS.OPTION.CASH_ACCEPT"
          tvalue={{
            have_cash: value.have_cash
              ? text('SDEK_POINTS.OPTION.STATUS.YES')
              : text('SDEK_POINTS.OPTION.STATUS.NO'),
          }}
        />
        <TextSecondary
          tid="SDEK_POINTS.OPTION.CARD_ACCEPT"
          tvalue={{
            have_cashless: value.have_cashless
              ? text('SDEK_POINTS.OPTION.STATUS.YES')
              : text('SDEK_POINTS.OPTION.STATUS.NO'),
          }}
        />
        <TextSecondary
          tid="SDEK_POINTS.OPTION.WORK_TIME"
          tvalue={{
            work_time: value.work_time
              ? value.work_time
              : text('SDEK_POINTS.OPTION.STATUS.NO_INFO'),
          }}
        />
        <TextSecondary
          tid="SDEK_POINTS.OPTION.NOTE"
          tvalue={{
            note: value.note
              ? value.note
              : text('SDEK_POINTS.OPTION.STATUS.NO_INFO'),
          }}
        />
      </SectionLayout>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  line-height: 1.5;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
