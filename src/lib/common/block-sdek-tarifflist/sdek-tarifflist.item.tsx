import React from 'react';
import { SectionLayout } from 'src/lib/element/layout';
import { components, OptionProps } from 'react-select';
import { basicTariffType } from './sdek-tarifflist.type';
import { TextCurrency, TextPrimary, TextSecondary } from 'src/lib/element/text';
import { Divider } from 'src/lib/element/divider';
import { THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';

const { Option } = components;

export function SdekTariffItem(props: OptionProps<basicTariffType>) {
  const { data } = props;

  return (
    <Option {...props}>
      <SectionLayout type="TEXT_SMALL">
        <TextPrimary tid="Название" />
        <SmallText tid={data.tariff_name} />
        <TextPrimary tid="Описание" />
        <Text tid={data.tariff_description} />
        <TextPrimary tid="Примерное время доставки" />
        <SmallText tid={`${data.period_min} - ${data.period_max} дней`} />
        <TextPrimary tid={`Стоимость доставки`} />
        <Price price={data.delivery_sum} />
        <Divider />
      </SectionLayout>
    </Option>
  );
}
const Price = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Text = styled(TextSecondary)`
  line-height: 1.5;
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const SmallText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
