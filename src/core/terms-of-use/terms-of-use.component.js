import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { THEME_SIZE } from '../../lib/theme';
import { USER_ROLE } from '../../lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';

export function TermsOfUseComponent(props) {
  const {
    termsOfUseUploadDataHandler,
    termsOfUse,
    editorData,
    handleChangeEditorValue,
    user,
    isAuth,
  } = props

  return (
    <SectionLayout>
      <TitlePrimary tid="OTHER.TERMS_OF_USE" />
      {isAuth && user.role === USER_ROLE.ADMIN ? (
        <>
          <ReactEditorBlock
            handleChange={handleChangeEditorValue}
            values={editorData}
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
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
