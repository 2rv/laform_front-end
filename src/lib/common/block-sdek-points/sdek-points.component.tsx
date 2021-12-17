import React, { useState, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { Divider } from 'src/lib/element/divider';
import { ModalFull } from 'src/lib/element/modal';
import { spacing } from 'src/lib/theme';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { SdekPointsComponentProps } from './sdek-points.type';
import { SdekPointOption } from './sdek-points.option';
import { SdekPointItem } from './sdek-points.item';
import { WarningAlert } from 'src/lib/element/alert';

export function SdekPointsComponent(props: SdekPointsComponentProps) {
  const { store, value, onChange, isDisabled, error } = props;
  const [open, onClose] = useState(false);
  const [filter, setFilter] = useState('');

  function onFilter(e: SyntheticEvent<HTMLInputElement>) {
    setFilter(e.currentTarget.value);
  }

  return (
    <>
      <ButtonSecondary
        tid="SDEK_POINTS.PLACEHOLDER"
        onClick={() => onClose(true)}
        disabled={isDisabled}
      />
      {value.label && (
        <ItemCase>
          <SdekPointItem value={value} />
          <ButtonIcon onClick={() => onChange({})}>
            <RemoveIcon />
          </ButtonIcon>
        </ItemCase>
      )}
      <ModalFull onOpen={open}>
        <Content>
          <HeaderCase>
            <InputBox>
              <BasicField
                placeholderTid="Найти пункт выдачи заказа"
                value={filter}
                onChange={onFilter}
              />
              {filter && (
                <IconBox>
                  <ButtonIcon onClick={() => setFilter('')}>
                    <RemoveIcon />
                  </ButtonIcon>
                </IconBox>
              )}
            </InputBox>
            <ButtonIcon onClick={() => onClose(false)}>
              <RemoveIcon />
            </ButtonIcon>
          </HeaderCase>
          {store.sdekPoints
            .filter((i) =>
              Boolean(filter)
                ? i.label.includes(filter.toLowerCase().trim())
                : true,
            )
            .map((item, k) => (
              <React.Fragment key={k}>
                <SdekPointOption
                  onClose={onClose}
                  data={item}
                  onSelect={onChange}
                />
                <Divider />
              </React.Fragment>
            ))}
        </Content>
      </ModalFull>
      {error && <WarningAlert tid={error} />}
    </>
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
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};
`;
const ItemCase = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing(3)};
  justify-content: center;
`;
