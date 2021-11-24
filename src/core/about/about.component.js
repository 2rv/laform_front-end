import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { THEME_SIZE } from '../../lib/theme';
import { USER_ROLE } from '../../lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';

export function AboutComponent(props) {
  const {
    saveIsPending,
    saveIsSuccess,
    saveIsError,
    saveErrorMessage,

    aboutUsUploadDataHandler,
    about,
    handleChangeEditorValue,
    user,
    isAuth,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="HEADER.MENU_ITEMS.ABOUT_US" />
      {isAuth && user.role === USER_ROLE.ADMIN ? (
        <>
          <ReactEditorBlock
            handleChange={handleChangeEditorValue}
            data={about}
          />
          <ButtonSecondary
            tid="OTHER.SAVE"
            onClick={aboutUsUploadDataHandler}
          />
        </>
      ) : (
        <ReactEditorBlock data={about} enableReInitialize readOnly />
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
