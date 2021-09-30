import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { spacing, THEME_SIZE } from '../../../lib/theme';
import {
  ButtonSecondary,
  ButtonPrimary,
  IconButton,
} from '../../../lib/element/button';
import { ReactComponent as QuestionIcon } from '../../../asset/svg/question-mark.svg';
import { Divider } from 'src/lib/element/divider';
import { TextSecondary } from 'src/lib/element/text';
import { ModalPopup } from 'src/lib/element/modal';
import { patternProductSendPdfToMail } from '../patterns-page.action';

export function FilePdfActions(props) {
  const { title, filePdf, isPdfPending, isPdfSuccess } = props;
  const dispatch = useDispatch();
  const [modalVisibilty, setModalVisibility] = useState(false);
  const isPdfSending = isPdfPending === true && isPdfSuccess === false;
  const isPdfSended = isPdfPending === false && isPdfSuccess === true;

  useEffect(() => {
    if (isPdfSended) {
      setModalVisibility(true);
    }
  }, [isPdfPending, isPdfSuccess]);

  const sendPdfToMail = () => {
    dispatch(
      patternProductSendPdfToMail({
        productName: title,
        productPdfUrl: filePdf,
      }),
    );
  };

  const redirectToPdfLink = () => {
    window.open(filePdf, '_blank');
  };

  return (
    <>
      <Divider />
      <Container>
        <ButtonSecondary tid="PATTERNS.SEND_TO_EMAIL" disabled={isPdfSending} onClick={sendPdfToMail} />
        <ButtonPrimary tid="PATTERNS.DOWNLOAD" onClick={redirectToPdfLink} />
        <Button>
          <QuestionIcon />
        </Button>
      </Container>
      <ModalPopup
        modalVisibilty={modalVisibilty}
        onClose={() => setModalVisibility(false)}
      >
        <TextSecondary tid="PATTERNS.FILE_HAS_ALREADY_BEN_SENT" />
      </ModalPopup>
    </>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const Button = styled(IconButton)`
  padding: 0;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  height: 25px;
  width: 25px;
`;
