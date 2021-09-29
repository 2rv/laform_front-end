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

export function FilePdfActions(props) {
  const { title, filePdf } = props;

  if (!title || !filePdf) return null;

  const dispatch = useDispatch();

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
        <ButtonSecondary tid="PATTERNS.SEND_TO_EMAIL" onClick={sendPdfToMail} />
        <ButtonPrimary tid="PATTERNS.DOWNLOAD" onClick={redirectToPdfLink} />
        <Button>
          <QuestionIcon />
        </Button>
      </Container>
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