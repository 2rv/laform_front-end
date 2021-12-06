import { ErrorAlert } from 'src/lib/element/alert';
import { ReactSelectField } from 'src/lib/element/field';
import { SectionLayout } from 'src/lib/element/layout';
import { text } from '../text';
import { SdekTariffItem } from './sdek-tarifflist.item';
import { SdekTariffListComponentProps } from './sdek-tarifflist.type';

export function SdekTariffListComponent(props: SdekTariffListComponentProps) {
  const { store, value, onChange, isDisabled, error } = props;
  return (
    <SectionLayout type="SMALL">
      <ReactSelectField
        value={value?.label ? value : ''}
        onChange={onChange}
        options={store.sdekTariffList}
        titleTid="SDEK_TARIFFLIST.TITLE"
        placeholderTid="SDEK_TARIFFLIST.PLACEHOLDER"
        noResults={() => text('SDEK_TARIFFLIST.NO_RESULTS')}
        isDisabled={isDisabled || store.pending}
        error={store.errorMessage}
        components={{ Option: SdekTariffItem }}
        isLoading={store.pending}
      />
      {error && <ErrorAlert tid={error} />}
    </SectionLayout>
  );
}
