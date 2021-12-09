import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonSecondary, ButtonPrimary } from 'src/lib/element/button';
import { Divider } from 'src/lib/element/divider';
import { TextSecondary } from 'src/lib/element/text';
import { ModalPopup } from 'src/lib/element/modal';
import { patternProductSendPdfToMail } from '../patterns-page.action';
import { Popup } from 'src/lib/element/popup';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';

export function FilePdfActions(props) {
  const { title, filesPdf = [], isPdfPending, isPdfSuccess } = props;
  if (!Boolean(filesPdf.length)) {
    return null;
  }
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
      <FieldLayout type="double" adaptive>
        <ButtonSecondary
          tid="PATTERNS.SEND_TO_EMAIL"
          disabled={isPdfSending}
          onClick={sendPdfToMail}
        />

        <Popup
          content={
            <SectionLayout type="SMALL">
              {filesPdf.map(({ id, fileUrl }) => {
                const file = fileUrl
                  .split('.com/')[1]
                  .replaceAll('%20', ' ')
                  .replaceAll('%2C', ',')
                  .replaceAll('%28', '(')
                  .replaceAll('%29', ')');
                return (
                  <PdfLink
                    key={id}
                    onClick={() => window.open(fileUrl, '_blank')}
                  >
                    {file}
                  </PdfLink>
                );
              })}
            </SectionLayout>
          }
        >
          <ButtonPrimary tid="PATTERNS.DOWNLOAD" />
        </Popup>
      </FieldLayout>
      <ModalPopup
        modalVisibilty={modalVisibilty}
        onClose={() => setModalVisibility(false)}
      >
        <TextSecondary tid="PATTERNS.FILE_HAS_ALREADY_BEN_SENT" />
      </ModalPopup>
    </>
  );
}
const PdfLink = styled(TextSecondary)`
  line-height: 22px;
  &:hover {
    color: #2d9cdb;
    text-decoration: underline;
    cursor: pointer;
  }
`;
