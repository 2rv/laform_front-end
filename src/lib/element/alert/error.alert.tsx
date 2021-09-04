import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../theme';
import { ReactComponent as AlertIcon } from '../../../asset/svg/error-alert.svg';
import { text } from '../../common/text';
import { AlertPropsType } from './type.alert';

export function ErrorAlert(props: AlertPropsType) {
  const { tid, className, tvalue } = props;
  const alertTid = `ERROR.${tid}`;
  return (
    <Alert className={className}>
      <Icon />
      <Message>{text(alertTid, tvalue)}</Message>
    </Alert>
  );
}

const Icon = styled(AlertIcon)`
  fill: ${THEME_COLOR.TEXT.DANGER};
  flex-shrink: 0;
`;

const Message = styled.span`
  color: ${THEME_COLOR.TEXT.DANGER};
  font-size: ${THEME_SIZE.FONT.SMALL};
  /* text-overflow: ellipsis;
  overflow: hidden; */
  word-break: break-all;
`;

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${THEME_COLOR.BACKGROUND.DANGER};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(3)};
  line-height: 1.5;
  min-width: 0;
  gap: ${spacing(2)};
`;
