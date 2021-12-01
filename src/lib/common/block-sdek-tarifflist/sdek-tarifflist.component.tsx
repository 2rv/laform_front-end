import { ReactSelectField } from 'src/lib/element/field';
import { SectionLayout } from 'src/lib/element/layout';
import { SdekTariffItem } from './sdek-tarifflist.item';
import { SdekTariffListComponentProps } from './sdek-tarifflist.type';

export function SdekTariffListComponent(props: SdekTariffListComponentProps) {
  const { store, value, onChange } = props;
  return (
    <SectionLayout type="SMALL">
      <ReactSelectField
        value={value}
        onChange={onChange}
        options={store.sdekTariffList}
        titleTid="Пункт выдачи заказа СДЭК"
        placeholderTid="Выберите пункт ПВЗ СДЭК"
        noResults={() => 'Пункты ПВЗ СДЭК не найдены в вашем городе'}
        isDisabled={store.pending}
        error={store.errorMessage}
        components={{ Option: SdekTariffItem }}
        isLoading={store.pending}
      />
    </SectionLayout>
  );
}
