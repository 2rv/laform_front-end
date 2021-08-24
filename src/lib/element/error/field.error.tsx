import styled from 'styled-components';
import { THEME_COLOR } from '../../../lib/theme';
import { TextSecondary } from '../text';
import { ErrorFieldPropsType } from './error.type';

export function ErrorField(props: ErrorFieldPropsType) {
  const { errorTid, errorTvalue } = props;

  return <ErrorText tid={errorTid} tvalue={errorTvalue} />;
}

const ErrorText = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.DANGER};
`;
