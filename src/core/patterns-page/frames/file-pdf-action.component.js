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
import { Popup } from 'src/lib/element/popup';

export function FilePdfActions(props) {
  const { title, filesPdf, isPdfPending, isPdfSuccess } = props;
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
        filesPdf,
      }),
    );
  };

  return (
    <>
      <Divider />
      <Container>
        <ButtonSecondary tid="PATTERNS.SEND_TO_EMAIL" disabled={isPdfSending} onClick={sendPdfToMail} />
        <Popup
          content={
            <DownloadContainer>
              {filesPdf.map(({ id, fileUrl }) => {
                const file = fileUrl
                  .split('.com/')[1]
                  .replaceAll('%20', ' ')
                  .replaceAll('%2C', ',')
                  .replaceAll('%28', '(')
                  .replaceAll('%29', ')')
                return (
                  <PdfText
                    key={id}
                    onClick={() => window.open(fileUrl, '_blank')}
                  >
                    {file}
                  </PdfText>
                )
              })}
            </DownloadContainer>
          }
        >
          <DownloadButtonCase>
            <ButtonPrimary tid="PATTERNS.DOWNLOAD" />
            <Button>
              <QuestionIcon />
            </Button>
          </DownloadButtonCase>
        </Popup>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(3)};
`;
const DownloadContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  width: 628px;
`;
const DownloadButtonCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const Button = styled(IconButton)`
  padding: 0;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  height: 25px;
  width: 25px;
`;
const PdfText = styled(TextSecondary)`
  line-height: 22px;
  &:hover {
    color: #2D9CDB;
    text-decoration: underline;
    cursor: pointer;
  }
`;
