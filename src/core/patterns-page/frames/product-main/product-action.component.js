import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import {
  ButtonSecondary,
  ButtonPrimary,
  IconButton,
} from '../../../../lib/element/button';
import { ReactComponent as QuestionIcon } from '../../../../asset/svg/question-mark.svg';

export function ProductAction(props) {
  const { sendPdfToMail, redirectToPdfLink } = props;

  return (
    <Container>
      <ButtonSecondary tid="PATTERNS.SEND_TO_EMAIL" onClick={sendPdfToMail} />
      <ButtonPrimary tid="PATTERNS.DOWNLOAD" onClick={redirectToPdfLink} />
      <Button>
        <QuestionIcon />
      </Button>
    </Container>
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
