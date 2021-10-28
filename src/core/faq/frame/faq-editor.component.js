import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonSecondary } from 'src/lib/element/button';
import { USER_ROLE } from 'src/lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';
import { faqUploadData } from '../faq.action';

export function FaqEditorComponent({ faq, user, isAuth }) {
  const dispatch = useDispatch();
  const [editorData, setEditorData] = useState('');

  const faqUsUploadDataHandler = () => {
    dispatch(faqUploadData({ faq: editorData }));
  };

  return isAuth && user.role === USER_ROLE.ADMIN ? (
    <>
      <ReactEditorBlock
        handleChange={(value) => setEditorData(value)}
        values={editorData}
        data={faq}
      />
      <ButtonSecondary tid="OTHER.SAVE" onClick={faqUsUploadDataHandler} />
    </>
  ) : (
    <ReactEditorBlock data={faq} enableReInitialize readOnly />
  );
}
