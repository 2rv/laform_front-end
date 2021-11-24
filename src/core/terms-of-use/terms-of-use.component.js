import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { THEME_SIZE } from '../../lib/theme';
import { USER_ROLE } from '../../lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';

export function TermsOfUseComponent(props) {
  const {
    saveIsPending,
    saveIsSuccess,
    saveIsError,
    saveErrorMessage,

    termsOfUseUploadDataHandler,
    termsOfUse,
    handleChangeEditorValue,
    user,
    isAuth,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="OTHER.TERMS_OF_USE" />
      {isAuth && user.role === USER_ROLE.ADMIN ? (
        <>
          <ReactEditorBlock
            handleChange={handleChangeEditorValue}
            data={termsOfUse}
          />
          <ButtonSecondary
            tid="OTHER.SAVE"
            onClick={termsOfUseUploadDataHandler}
          />
        </>
      ) : (
        <ReactEditorBlock data={termsOfUse} enableReInitialize readOnly />
      )}

      {saveIsPending && <LoaderPrimary />}
      {saveIsError && <ErrorAlert tid={saveErrorMessage} />}
      {saveIsSuccess && <SuccessAlert tid="Успешно обновлено" />}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
