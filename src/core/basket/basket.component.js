import styled from 'styled-components';
import {
  SeewingGoodsListComponent,
  MasterClassesListComponent,
  PatternsListComponent,
  FormalizationOrderingContainer,
} from './frames';
import {
  BASKET_SEEWING_GOODS_LIST,
  BASKET_MASTER_CLASSES_LIST,
  BASKET_PATTERS_LIST,
} from './basket.constant';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { spacing, THEME_SIZE } from 'src/lib/theme';

export function BasketComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    isUserInfoLoadPending,
    pageLoading,
    initialValue,
    validation,
    onSubmitForm,
    fieldName,
  } = props;
  return (
    <SectionLayout>
      <Title tid="BASKET.TITLE" />
      <SeewingGoodsListComponent seewingGoodsList={BASKET_SEEWING_GOODS_LIST} />
      <MasterClassesListComponent
        masterClassesList={BASKET_MASTER_CLASSES_LIST}
      />
      <PatternsListComponent patternsList={BASKET_PATTERS_LIST} />
      <FormalizationOrderingContainer
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        isUserInfoLoadPending={isUserInfoLoadPending}
        pageLoading={pageLoading}
        initialValue={initialValue}
        validation={validation}
        onSubmitForm={onSubmitForm}
        fieldName={fieldName}
      />
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: 28px;
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
