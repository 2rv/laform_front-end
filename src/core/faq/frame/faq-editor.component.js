import { ButtonSecondary } from 'src/lib/element/button';
import { USER_ROLE } from 'src/lib/common/auth';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';

export function FaqEditorComponent(props) {
  const {
    faqUsUploadDataHandler,
    faq,
    handleChangeEditorValue,
    user,
    isAuth,
  } = props;

  return isAuth && user.role === USER_ROLE.ADMIN ? (
    <>
      <ReactEditorBlock
        handleChange={handleChangeEditorValue}
        data={faq}
      />
      <ButtonSecondary tid="OTHER.SAVE" onClick={faqUsUploadDataHandler} />
    </>
  ) : (
    <ReactEditorBlock data={faq} enableReInitialize readOnly />
  );
}
