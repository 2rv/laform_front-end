import React from 'react';
import styled from 'styled-components';
import {
  components,
  OptionProps,
  MenuProps,
  MenuListProps,
} from 'react-select';
import { Divider } from 'src/lib/element/divider';

const { Menu, MenuList } = components;

export function SdekMenu(props: MenuProps<OptionProps>) {
  return (
    <Menu {...props}>
      <MenuContainer>{props.children}</MenuContainer>
    </Menu>
  );
}

export function SdekMenuList(props: MenuListProps<OptionProps>) {
  return (
    <MenuList {...props}>
      <MenuListContainer>
        {props.children}
        <Divider />
      </MenuListContainer>
    </MenuList>
  );
}
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  background-color: sandybrown;
`;
const MenuListContainer = styled.div`
  height: 800px;
  background-color: sandybrown;
`;

import React from 'react';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { components, OptionProps } from 'react-select';
import { basicSdekPoints } from './sdek-points.type';
import styled from 'styled-components';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { Divider } from 'src/lib/element/divider';
import { text } from '../text';

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
      <DividerEl />
    </Option>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Text = styled(TextSecondary)`
  line-height: 1.5;
`;
const DividerEl = styled(Divider)`
  margin: ${spacing(3)} 0 0 0;
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
// import { ReactSelectField } from 'src/lib/element/field';
// import { SdekPointsItem } from './sdek-points.item';
// import { text } from '../text';
// import { ErrorAlert } from 'src/lib/element/alert';
// <ReactSelectField
//     value={value?.label ? value : ''}
//     onChange={onChange}
//     options={store.sdekPoints}
//     titleTid="SDEK_POINTS.TITLE"
//     placeholderTid="SDEK_POINTS.PLACEHOLDER"
//     noResults={() => text('SDEK_POINTS.NO_RESULTS')}
//     isDisabled={isDisabled || store.pending}
//     isLoading={store.pending}
//     error={store.errorMessage}
//     components={{
//       Option: SdekPointsItem,
//     }}
//   />
//   {error && <ErrorAlert tid={error} />}
