import React from 'react';
import { SectionLayout } from 'src/lib/element/layout';
import { SdekPointsComponentProps } from './sdek-points.type';
import { ReactSelectField } from 'src/lib/element/field';
import { SdekPointsItem } from './sdek-points.item';
import { text } from '../text';

export function SdekPointsComponent(props: SdekPointsComponentProps) {
  const { store, value, onChange, isDisabled } = props;
  return (
    <SectionLayout type="SMALL">
      <ReactSelectField
        value={value}
        onChange={onChange}
        options={store.sdekPoints}
        titleTid="SDEK_POINTS.TITLE"
        placeholderTid="SDEK_POINTS.PLACEHOLDER"
        noResults={() => text('SDEK_POINTS.NO_RESULTS')}
        isDisabled={isDisabled || store.pending}
        isLoading={store.pending}
        error={store.errorMessage}
        components={{ Option: SdekPointsItem }}
      />
    </SectionLayout>
  );
}
