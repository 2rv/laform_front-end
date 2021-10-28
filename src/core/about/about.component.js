import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { USER_ROLE } from '../../lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';
import { aboutUsLoadData, aboutUsUploadData } from './about.action';

export function AboutComponent({ about, user, isAuth }) {
  const dispatch = useDispatch();
  const [editorData, setEditorData] = useState(about);

  const aboutUsUploadDataHandler = () => {
    dispatch(aboutUsUploadData({ about: editorData }));
  };

  return (
    <SectionLayout>
      <TitlePrimary tid="HEADER.MENU_ITEMS.ABOUT_US" />
      {isAuth && user.role === USER_ROLE.ADMIN ? (
        <>
          <ReactEditorBlock
            handleChange={(value) => setEditorData(value)}
            values={editorData}
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
