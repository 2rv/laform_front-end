import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import {
  CreateProductImageComponent,
  CreateProductFormContainer,
} from './frames';

export function CreateProductComponent(props) {
  const {
    initialValues,
    onSubmitForm,
    validation,
    //--------
    setImage,
    removeImage,
    changeImage,
    //--------
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    //--------
    initialData,
    selectOptionsData,
  } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Создание товара" />
      <CreateProductImageComponent
        setImage={setImage}
        removeImage={removeImage}
        changeImage={changeImage}
      />
      <CreateProductFormContainer
        validation={validation}
        initialValues={initialValues}
        onSubmitForm={onSubmitForm}
        //--------
        initialData={initialData}
        selectOptionsData={selectOptionsData}
        //--------
        pageLoading={pageLoading}
        isPending={isPending}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage={errorMessage}
      />
    </SectionLayout>
  );
}
