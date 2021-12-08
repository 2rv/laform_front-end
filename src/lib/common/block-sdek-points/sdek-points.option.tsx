import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { text } from '../text';

export function SdekPointOption(props: any) {
  const { data, onSelect } = props;
  return (
    <Container onClick={() => onSelect(data)}>
      {data.office_image_list?.[0] ? (
        <Image src={data.office_image_list[0].url} />
      ) : (
        <Image src="/static/image/sdek-logo.jpg" />
      )}
      <SectionLayout type="TEXT">
        <Title tid={data.location.address_full} />
        <TextSecondary
          tid="SDEK_POINTS.OPTION.CASH_ACCEPT"
          tvalue={{
            have_cash: data.have_cash
              ? text('SDEK_POINTS.OPTION.STATUS.YES')
              : text('SDEK_POINTS.OPTION.STATUS.NO'),
          }}
        />
        <TextSecondary
          tid="SDEK_POINTS.OPTION.CARD_ACCEPT"
          tvalue={{
            have_cashless: data.have_cashless
              ? text('SDEK_POINTS.OPTION.STATUS.YES')
              : text('SDEK_POINTS.OPTION.STATUS.NO'),
          }}
        />
        <TextSecondary
          tid="SDEK_POINTS.OPTION.WORK_TIME"
          tvalue={{
            work_time: data.work_time
              ? data.work_time
              : text('SDEK_POINTS.OPTION.STATUS.NO_INFO'),
          }}
        />
        <Text
          tid="SDEK_POINTS.OPTION.NOTE"
          tvalue={{
            note: data.note
              ? data.note
              : text('SDEK_POINTS.OPTION.STATUS.NO_INFO'),
          }}
        />
      </SectionLayout>
    </Container>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Text = styled(TextSecondary)`
  line-height: 1.5;
`;
const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  &:hover {
    box-shadow: inset 0 0 0 5px #ff005a;
    padding: 4px;
  }
  transition-duration: 0.2s;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
