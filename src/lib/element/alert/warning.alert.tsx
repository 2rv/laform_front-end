import styled from 'styled-components';
import { ReactComponent as AlertIcon } from 'src/asset/svg/alert-info.svg';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../theme';
import { text } from '../../common/text';
import { AlertPropsType } from './type.alert';

export function WarningAlert(props: AlertPropsType) {
  const { tid, className, tvalue } = props;
  return (
    <Alert className={className}>
      <Icon />
      <Message>{text(tid, tvalue)}</Message>
    </Alert>
  );
}

const Icon = styled(AlertIcon)`
  fill: ${THEME_COLOR.TEXT.WARNING};
  flex-shrink: 0;
`;

const Message = styled.span`
  color: ${THEME_COLOR.TEXT.WARNING};
  font-size: ${THEME_SIZE.FONT.SMALL};
  margin-left: ${spacing(2)};
`;

const Alert = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${THEME_COLOR.BACKGROUND.WARNING};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: 0 ${spacing(3)};
  line-height: 1.5;
`;
