import { SectionLayout } from 'src/lib/element/layout';
import { ButtonSecondary } from 'src/lib/element/button';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SuccessAlert } from 'src/lib/element/alert';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { BlockHelpLinks } from '../block-help-links';

interface FaqArticleComponentProps {
  pending: boolean;
  success: boolean;
  successLoad: boolean;
  error: boolean;
  errorMessage: string;
  data: any;
  handleSave: () => void;
  handleChange: (data: any) => void;
  isAdmin: boolean;
  pageLoading: boolean;
  disabled: boolean;
  titleTid?: string;
}
export function FaqArticleComponent(props: FaqArticleComponentProps) {
  const {
    pending,
    success,
    successLoad,
    error,
    errorMessage,
    data,
    handleSave,
    handleChange,
    isAdmin,
    pageLoading,
    disabled,
    titleTid,
  } = props;
  return (
    <SectionLayout>
      {!titleTid && <BlockHelpLinks />}
      {pending && <CenteredSpinner />}
      {pageLoading && <LoaderPrimary />}
      {pageLoading && successLoad ? null : (
        <BlockReactEditor
          titleTid={titleTid}
          data={data}
          enableIsEdit={isAdmin}
          readOnly={!isAdmin}
          enableReInitialize={!isAdmin}
          handleChange={handleChange}
          error={error ? errorMessage : undefined}
        />
      )}

      {isAdmin && (
        <ButtonSecondary
          tid="OTHER.SAVE"
          disabled={disabled}
          onClick={handleSave}
        />
      )}
      {success && <SuccessAlert tid="Успешно обновлено" />}
    </SectionLayout>
  );
}
