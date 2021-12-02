import { ReactSelectField } from 'src/lib/element/field';
import { SectionLayout } from 'src/lib/element/layout';
import { SdekTariffItem } from './sdek-tarifflist.item';
import { SdekTariffListComponentProps } from './sdek-tarifflist.type';

export function SdekTariffListComponent(props: SdekTariffListComponentProps) {
  const { store, value, onChange, isDisabled } = props;
  return (
    <SectionLayout type="SMALL">
      <ReactSelectField
        value={value}
        onChange={onChange}
        options={store.sdekTariffList}
        titleTid="Метод доставки"
        placeholderTid="Выберите метод доставки"
        noResults={() => 'Для этого офиса не найдены методы доставки'}
        isDisabled={isDisabled || store.pending}
        error={store.errorMessage}
        components={{ Option: SdekTariffItem }}
        isLoading={store.pending}
      />
    </SectionLayout>
  );
}
