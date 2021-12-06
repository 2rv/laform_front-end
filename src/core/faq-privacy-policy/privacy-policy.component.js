import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { THEME_SIZE } from '../../lib/theme';
import { USER_ROLE } from '../../lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';

export function PrivacyPolicyComponent(props) {
  const {
    saveIsPending,
    saveIsSuccess,
    saveIsError,
    saveErrorMessage,

    privacyPolicyUploadDataHandler,
    privacyPolicy,
    handleChangeEditorValue,
    user,
    isAuth,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="OTHER.PRIVACY_POLICY" />
      {isAuth && user.role === USER_ROLE.ADMIN ? (
        <>
          <ReactEditorBlock
            handleChange={handleChangeEditorValue}
            data={privacyPolicy}
          />
          <ButtonSecondary
            tid="OTHER.SAVE"
            onClick={privacyPolicyUploadDataHandler}
          />
        </>
      ) : (
        <ReactEditorBlock data={privacyPolicy} enableReInitialize readOnly />
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
