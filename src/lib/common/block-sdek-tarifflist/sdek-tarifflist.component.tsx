import React, { useState, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { WarningAlert } from 'src/lib/element/alert';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { SdekTariffListComponentProps } from './sdek-tarifflist.type';
import { Divider } from 'src/lib/element/divider';
import { ModalFull } from 'src/lib/element/modal';
import { spacing } from 'src/lib/theme';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { ReactComponent as CloseIcon } from 'src/asset/svg/delete-cancel-icon.svg';
import { SdekTariffListOption } from './sdek-tarifflist.option';
import { SdekTariffItem } from './sdek-tarifflist.item';

export function SdekTariffListComponent(props: SdekTariffListComponentProps) {
  const { store, value, onChange, onClear, isDisabled, error } = props;

  const [open, onClose] = useState(false);
  const [filter, setFilter] = useState('');

  function onFilter(e: SyntheticEvent<HTMLInputElement>) {
    setFilter(e.currentTarget.value);
  }

  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <ButtonSecondary
          tid="SDEK_POINTS.PLACEHOLDER"
          onClick={() => onClose(true)}
          disabled={isDisabled}
        />
      </FieldLayout>

      {value.label && (
        <ItemCase>
          <SdekTariffItem value={value} />
          <ButtonIcon onClick={onClear}>
            <CloseIcon />
          </ButtonIcon>
        </ItemCase>
      )}
      <ModalFull onOpen={open}>
        <Content>
          <HeaderCase>
            <InputBox>
              <BasicField
                placeholderTid="Найти тариф"
                value={filter}
                onChange={onFilter}
              />
              <IconBox>
                <ButtonIcon>
                  <CloseIcon />
                </ButtonIcon>
              </IconBox>
            </InputBox>
            <ButtonIcon onClick={() => onClose(false)}>
              <CloseIcon />
            </ButtonIcon>
          </HeaderCase>
          {store.sdekTariffList
            .filter((i) =>
              Boolean(filter)
                ? i.label.toLocaleLowerCase().includes(filter)
                : true,
            )
            .map((item, k) => (
              <React.Fragment key={k}>
                <SdekTariffListOption
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
