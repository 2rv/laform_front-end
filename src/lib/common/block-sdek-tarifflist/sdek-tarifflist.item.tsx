import React from 'react';
import { SectionLayout } from 'src/lib/element/layout';
import { components, OptionProps } from 'react-select';
import { basicTariffType } from './sdek-tarifflist.type';
import { TextPrimary } from 'src/lib/element/text';
import { Divider } from 'src/lib/element/divider';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';

const { Option } = components;

export function SdekTariffItem(props: OptionProps<basicTariffType>) {
  const { data } = props;

  return (
    <Option {...props}>
      <SectionLayout type="TEXT_SMALL">
        <div>
          <TextPrimary tid="SDEK_TARIFFLIST.OPTION.NAME" />
          &nbsp;
          <BoldText tid={data.tariff_name} />
        </div>
        <div>
          <Text tid="SDEK_TARIFFLIST.OPTION.DESCRIPTION" />
          &nbsp;
          <BoldText tid={data.tariff_description} />
        </div>
        <div>
          <TextPrimary tid="SDEK_TARIFFLIST.OPTION.DELIVERY_TIME" />
          &nbsp;
          <BoldText tid={String(data.period_min)} />
          &nbsp;
          <TextPrimary tid="OTHER.TO" />
          &nbsp;
          <BoldText tid={String(data.period_max)} />
          &nbsp;
          <TextPrimary tid="OTHER.DAYS" />
        </div>
        <div>
          <TextPrimary tid={'SDEK_TARIFFLIST.OPTION.DELIVERY_PRICE'} />
          &nbsp;
          <BoldText tid={String(data.delivery_sum)} />
          &nbsp;
          <TextPrimary tid={'OTHER.VALUTE'} />
        </div>
      </SectionLayout>
      <DividerEl />
    </Option>
  );
}

const DividerEl = styled(Divider)`
  margin: ${spacing(3)} 0 0 0;
`;
const Text = styled(TextPrimary)`
  line-height: 1.5;
`;
const BoldText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
`;
