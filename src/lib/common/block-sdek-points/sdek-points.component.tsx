import React, { useState } from 'react';
import styled from 'styled-components';
import { Divider } from 'src/lib/element/divider';
import { SectionLayout } from 'src/lib/element/layout';
import { ModalFull } from 'src/lib/element/modal';
import { spacing } from 'src/lib/theme';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { ReactComponent as CloseIcon } from 'src/asset/svg/delete-cancel-icon.svg';
import { SdekPointsComponentProps } from './sdek-points.type';

import { SdekPointOption } from './sdek-points.option';

export function SdekPointsComponent(props: SdekPointsComponentProps) {
  const { store, value, onChange, isDisabled, error } = props;
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleSelect = (data: any) => {
    console.log(data);
  };

  return (
    <SectionLayout type="SMALL">
      <ButtonSecondary
        tid="SDEK_POINTS.PLACEHOLDER"
        onClick={() => setModalVisibility(true)}
      />
      <ModalFull onOpen={modalVisibility}>
        <SectionLayout type="SMALL">
          <HeaderCase>
            <InputBox>
              <BasicField
                placeholderTid="OTHER.SEARCH_PRODUCT"
                value={''}
                onChange={(e: any) => {}}
              />
              <IconBox>
                <ButtonIcon>
                  <CloseIcon />
                </ButtonIcon>
              </IconBox>
            </InputBox>
            <ButtonIcon onClick={() => setModalVisibility(false)}>
              <CloseIcon />
            </ButtonIcon>
          </HeaderCase>
          {store.sdekPoints.map((item, key: number) => {
            return (
              <React.Fragment key={key}>
                <SdekPointOption data={item} onSelect={handleSelect} />
                <Divider />
              </React.Fragment>
            );
          })}
        </SectionLayout>
      </ModalFull>
    </SectionLayout>
  );
}
const InputBox = styled.div`
  position: relative;
  width: 100%;
`;
const IconBox = styled.div`
  position: absolute;
  right: 1px;
  top: 1px;
`;
const ButtonIcon = styled(IconButton)`
  padding: 0;
  height: 44px;
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};
`;
