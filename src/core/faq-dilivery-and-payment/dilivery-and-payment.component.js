import { SectionLayout } from 'src/lib/element/layout';
import { ButtonSecondary } from 'src/lib/element/button';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { CenteredSpinner } from 'src/lib/element/spinner';

export function DeliveryPaymentComponent(props) {
  const {
    pending,
    success,
    error,
    errorMessage,
    data,
    handleSave,
    handleChange,
    isAdmin,
    pageLoading,
  } = props;

  return (
    <SectionLayout>
      <ReactEditorBlock
        titleTid="Доставка и оплата"
        data={data}
        enableIsEdit
        readOnly={!isAdmin}
        handleChange={handleChange}
      />
      {isAdmin && <ButtonSecondary tid="OTHER.SAVE" onClick={handleSave} />}
      {pending && <CenteredSpinner />}
      {error && <ErrorAlert tid={errorMessage} />}
      {success && <SuccessAlert tid="Успешно обновлено" />}
      {pageLoading && <LoaderPrimary />}
    </SectionLayout>
  );
}
