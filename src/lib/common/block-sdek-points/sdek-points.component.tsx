import React from 'react';
import { SectionLayout } from 'src/lib/element/layout';
import { SdekPointsComponentProps } from './sdek-points.type';
import { ReactSelectField } from 'src/lib/element/field';
import { SdekPointsItem } from './sdek-points.item';

export function SdekPointsComponent(props: SdekPointsComponentProps) {
  const { store, value, onChange } = props;
  return (
    <SectionLayout type="SMALL">
      <ReactSelectField
        value={value}
        onChange={onChange}
        options={store.sdekPoints}
        titleTid="Пункт выдачи заказа СДЭК"
        placeholderTid="Выберите пункт ПВЗ СДЭК"
        noResults={() => 'Пункты ПВЗ СДЭК не найдены в вашем городе'}
        isDisabled={store.pending}
        error={store.errorMessage}
        components={{ Option: SdekPointsItem }}
      />
    </SectionLayout>
  );
}
