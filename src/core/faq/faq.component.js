import { SectionLayout } from '../../lib/element/layout';
import { HelpInfoBlock } from '../block-help-info';
import { ButtonSecondary } from 'src/lib/element/button';
import { USER_ROLE } from 'src/lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';

export function FaqComponent(props) {
  const {
    saveIsPending,
    saveIsSuccess,
    saveIsError,
    saveErrorMessage,
    faqUsUploadDataHandler,
    faq,
    handleChangeEditorValue,
    user,
    isAuth,
  } = props;

  return (
    <SectionLayout>
      <HelpInfoBlock />
      {isAuth && user.role === USER_ROLE.ADMIN ? (
        <>
          <ReactEditorBlock handleChange={handleChangeEditorValue} data={faq} />
          <ButtonSecondary tid="OTHER.SAVE" onClick={faqUsUploadDataHandler} />
        </>
      ) : (
        <ReactEditorBlock data={faq} enableReInitialize readOnly />
      )}

      {saveIsPending && <LoaderPrimary />}
      {saveIsError && <ErrorAlert tid={saveErrorMessage} />}
      {saveIsSuccess && <SuccessAlert tid="Успешно обновлено" />}
    </SectionLayout>
  );
}
