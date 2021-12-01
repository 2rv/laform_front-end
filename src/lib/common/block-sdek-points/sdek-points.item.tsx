import React from 'react';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { components, OptionProps } from 'react-select';
import { sdekDataProps } from './sdek-points.type';
import styled from 'styled-components';
import { TextSecondary } from 'src/lib/element/text';
import { spacing } from 'src/lib/theme';

const { Option } = components;

export function SdekPointsItem(props: OptionProps<sdekDataProps>) {
  const { data } = props;

  return (
    <Option {...props}>
      <SectionLayout type="TEXT">
        <TitlePrimary tid={data.location.address_full} />
        <Container>
          {data.office_image_list?.[0] && (
            <Image src={data.office_image_list[0].url} />
          )}
          <SectionLayout type="TEXT">
            {data.have_cash && <TextSecondary tid="Оплата наличными" />}
            {data.have_cashless && <TextSecondary tid="Оплата картой" />}
            {data.work_time && (
              <TextSecondary tid={`График работы ${data.work_time}`} />
            )}
            {data.note && <TextSecondary tid={`Примечание ${data.note}`} />}
          </SectionLayout>
        </Container>
      </SectionLayout>
    </Option>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;
