import styled from 'styled-components';

import { spacing } from '../../../lib/theme';
import { TextPrimary, TextSecondary } from '../text';

import { ErrorFieldPropsType } from './error.type';

export function ErrorField(props: ErrorFieldPropsType) {
  const { errorTid, errorTvalue, helperTid, helperTvalue } = props;

  return (
    <TextContainer>
      <TextPrimary tid={errorTid} tvalue={errorTvalue} />
      {helperTid && <TextSecondary tid={helperTid} tvalue={helperTvalue} />}
    </TextContainer>
  );
}

const TextContainer = styled.div`
  display: flex;
  gap: ${spacing(1)};
  line-height: 1.5em;
`;
