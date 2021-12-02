import React from 'react';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { components, OptionProps } from 'react-select';
import { basicSdekPoints } from './sdek-points.type';
import styled from 'styled-components';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { Divider } from 'src/lib/element/divider';

const { Option } = components;

export function SdekPointsItem(props: OptionProps<basicSdekPoints>) {
  const { data } = props;

  return (
    <Option {...props}>
      <Container>
        {data.office_image_list?.[0] && (
          <Image src={data.office_image_list[0].url} />
        )}
        <SectionLayout type="TEXT">
          <Title tid={data.location.address_full} />
          {data.have_cash && <TextSecondary tid="Оплата наличными" />}
          {data.have_cashless && <TextSecondary tid="Оплата картой" />}
          {data.work_time && (
            <TextSecondary tid={`График работы ${data.work_time}`} />
          )}
          {data.note && <TextSecondary tid={`Примечание ${data.note}`} />}
        </SectionLayout>
      </Container>
      <DividerEl />
    </Option>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const DividerEl = styled(Divider)`
  margin: ${spacing(3)} 0;
`;
const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
