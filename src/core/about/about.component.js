import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { USER_ROLE } from '../../lib/common/auth';
import { ReactEditor } from '../block-react-editor';
import { aboutUsLoadData, aboutUsUploadData } from './about.action';

export function AboutComponent({ aboutUsText, user }) {
  const dispatch = useDispatch();
  const [editorData, setEditorData] = useState(aboutUsText);
  console.log('aboutUsText: ', aboutUsText);
  console.log('editorData: ', editorData);

  const aboutUsUploadDataHandler = () => {
    dispatch(aboutUsUploadData({ about: editorData }));
  };

  return (
    <SectionLayout>
      <TitlePrimary tid="HEADER.MENU_ITEMS.ABOUT_US" />
      {user.role === USER_ROLE.ADMIN ? (
        <>
          <ReactEditor
            handleChange={(value) => setEditorData(value)}
            values={editorData}
            data={aboutUsText}
          />
          <ButtonSecondary tid="OTHER.SAVE" onClick={aboutUsUploadDataHandler} />
        </>
      ) : (
        <ReactEditor data={aboutUsText} enableReInitialize readOnly />
      )}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
