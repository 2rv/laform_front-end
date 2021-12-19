import React, { useState, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { WarningAlert } from 'src/lib/element/alert';
import { SdekTariffListComponentProps } from './sdek-tarifflist.type';
import { Divider } from 'src/lib/element/divider';
import { ModalFull } from 'src/lib/element/modal';
import { spacing } from 'src/lib/theme';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { SdekTariffListOption } from './sdek-tarifflist.option';
import { SdekTariffItem } from './sdek-tarifflist.item';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';

export function SdekTariffListComponent(props: SdekTariffListComponentProps) {
  const { state, value, onChange, onClear, isDisabled, error } = props;
  const [open, onClose] = useState(false);
  const [filter, setFilter] = useState('');
  const onFilter = (e: SyntheticEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };
  const SdekTariffList = (state.sdekTariffList || [])
    .filter((i) =>
      Boolean(filter) ? i.label.toLocaleLowerCase().includes(filter) : true,
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
    ));

  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <ButtonSecondary
          tid="SDEK_TARIFFLIST.PLACEHOLDER"
          onClick={() => onClose(true)}
          disabled={isDisabled}
        />
      </FieldLayout>

      {value?.label && (
        <ItemCase>
          <SdekTariffItem value={value} />
          <Button onClick={onClear}>
            <RemoveIcon />
          </Button>
        </ItemCase>
      )}
      <ModalFull onOpen={open}>
        <Content>
          <HeaderCase>
            <InputCase>
              <BasicField
                placeholderTid="Найти тариф"
                value={filter}
                onChange={onFilter}
              />
              {filter && (
                <ButtonIcon onClick={() => setFilter('')}>
                  <RemoveIcon />
                </ButtonIcon>
              )}
            </InputCase>
            <Button onClick={() => onClose(false)}>
              <RemoveIcon />
            </Button>
          </HeaderCase>
          {SdekTariffList}
        </Content>
      </ModalFull>
      {error && <WarningAlert tid={error} />}
    </SectionLayout>
  );
}

const InputCase = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  > * {
    grid-area: 1/-1;
  }
`;
const Button = styled(IconButton)`
  padding: 0;
`;
const ButtonIcon = styled(Button)`
  height: fit-content;
  width: fit-content;
  justify-self: end;
  background-color: transparent;
  z-index: 1;
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
