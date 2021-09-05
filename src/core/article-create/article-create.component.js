import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ARTICLE_FIELD_NAME } from './article-create.type';
import { FormComponent } from './frames';
import { ProductImages } from '../block-product-components';

export function CreateArticleComponent(props) {
  const {
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,

    initialValues,
    onSubmit,
    validation,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Создание статьи" />
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
                  <ProductImages
                    {...formProps}
                    maxImages={1}
                    imagesArrayName={ARTICLE_FIELD_NAME.IMAGES}
                    imageFieldName={ARTICLE_FIELD_NAME.IMAGE}
                    title="Фотография статьи"
                  />
                  <FormComponent {...formProps} />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && <SuccessAlert tid="Статья успешно создана" />}
        {isError && <ErrorAlert tid={errorMessage} />}
      </SectionLayout>
    </>
  );
}
