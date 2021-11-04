import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { THEME_SIZE } from '../../lib/theme';
import { USER_ROLE } from '../../lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';

export function AboutComponent(props) {
  const {
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
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
