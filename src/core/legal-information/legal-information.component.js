import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { THEME_SIZE } from '../../lib/theme';
import { USER_ROLE } from '../../lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';

export function LegalInformationComponent(props) {
  const {
    legalInformationUploadDataHandler,
    legalInformation,
    editorData,
    handleChangeEditorValue,
    user,
    isAuth,
  } = props

  return (
    <SectionLayout>
      <TitlePrimary tid="OTHER.LEGAL_INFORMATION" />
      {isAuth && user.role === USER_ROLE.ADMIN ? (
        <>
          <ReactEditorBlock
            handleChange={handleChangeEditorValue}
            values={editorData}
            data={legalInformation}
          />
          <ButtonSecondary
            tid="OTHER.SAVE"
            onClick={legalInformationUploadDataHandler}
          />
        </>
      ) : (
        <ReactEditorBlock data={legalInformation} enableReInitialize readOnly />
      )}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
