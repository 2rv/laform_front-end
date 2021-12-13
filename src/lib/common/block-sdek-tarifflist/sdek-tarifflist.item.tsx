import React from 'react';
import { basicTariffType } from './sdek-tarifflist.type';
import { TextPrimary } from 'src/lib/element/text';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';

interface SdekTariffItemProps {
  value: basicTariffType;
}

export function SdekTariffItem(props: SdekTariffItemProps) {
  const { value } = props;

  return (
    <Container>
      <div>
        <TextPrimary tid="SDEK_TARIFFLIST.OPTION.NAME" />
        &nbsp;
        <BoldText tid={value.tariff_name} />
      </div>
      {value.tariff_description && (
        <div>
          <Text tid="SDEK_TARIFFLIST.OPTION.DESCRIPTION" />
          &nbsp;
          <BoldText tid={value.tariff_description} />
        </div>
      )}

      <div>
        <TextPrimary tid="SDEK_TARIFFLIST.OPTION.DELIVERY_TIME" />
        &nbsp;
        <BoldText tid={String(value.period_min)} />
        &nbsp;
        <TextPrimary tid="OTHER.TO" />
        &nbsp;
        <BoldText tid={String(value.period_max)} />
        &nbsp;
        <TextPrimary tid="OTHER.DAYS" />
      </div>
      <div>
        <TextPrimary tid={'SDEK_TARIFFLIST.OPTION.DELIVERY_PRICE'} />
        &nbsp;
        <BoldText tid={String(value.delivery_sum)} />
        &nbsp;
        <TextPrimary tid={'OTHER.VALUTE'} />
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
  padding: 5px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Text = styled(TextPrimary)`
  line-height: 1.5;
`;
const BoldText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
`;
