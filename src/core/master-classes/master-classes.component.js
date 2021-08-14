import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { BasicCardList } from '../../lib/element/card-list';
import { MasterClassesFormFilter } from './frames';

export function MasterClassesComponent(props) {
  const { items, isPending } = props;

  const masterClassesFormFilterGetInitialValue = () => {
    const rawData = false; //getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [MASTER_CLASSES_FILTER_FIELD_NAME.CATEGORY]:
          MASTER_CLASSES_FILTER_CATEGORY_OPTIONS[0].id,
        [MASTER_CLASSES_FILTER_FIELD_NAME.TAGS]:
          MASTER_CLASSES_FILTER_TAGS_OPTIONS[0].id,
      };
    }
  };

  return (
    <Container>
      <Content>
        <IndentLayout>
          <Title tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
          <MasterClassesFormFilterContainer
            categoryOptions={MASTER_CLASSES_FILTER_CATEGORY_OPTIONS}
            tagsOptions={MASTER_CLASSES_FILTER_TAGS_OPTIONS}
            initialValue={masterClassesFormFilterGetInitialValue()}
            fieldName={MASTER_CLASSES_FORM_FILTER_FIELD_NAME}
          />
          <BasicCardList
            isPending={isPending}
            items={items}
            actions={['OTHER.PURCHASED', 'OTHER.BUY']}
          />
        </IndentLayout>
      </Content>
    </Container>
  );
}
