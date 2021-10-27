import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';
import { CREATE_PATTERN_FIELD_NAME } from './pattern-create.type';
import { SelectImageBlock } from 'src/lib/common/block-select-image';

export function CreatePatternComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialOption,
    initialValues,
    onSubmit,
    validation,
    isEdit,
    updateIsPending,
    updateIsError,
    updateIsSuccess,
    updateErrorMessage,
  } = props;
  return (
    <>
      {(pageLoading || isPending || updateIsPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Создание выкройки" />
        <Formik
          initialValues={initialValues}
          validate={validation}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formProps) => {
            return (
              <form onSubmit={formProps.handleSubmit}>
                <SectionLayout>
                  <SelectImageBlock
                    titleTid="PRODUCT_IMAGES.TITLE"
                    name={CREATE_PATTERN_FIELD_NAME.IMAGES}
                    {...formProps}
                  />
                  <FormComponent
                    {...formProps}
                    isEdit={isEdit}
                    initialOption={initialOption}
                  />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && (
          <SuccessAlert tid="PATTERNS.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
        )}
        {updateIsSuccess && <SuccessAlert tid="Успешно обновлено" />}
        {isError && <ErrorAlert tid={errorMessage} />}
        {updateIsError && <ErrorAlert tid={updateErrorMessage} />}
      </SectionLayout>
    </>
  );
}
