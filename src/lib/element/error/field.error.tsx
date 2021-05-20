import styled from 'styled-components';

import { ReactComponent as ErrorIcon } from '../../../asset/svg/error.svg';
import { spacing } from '../../../lib/theme';
import { TextPrimary, TextSecondary } from '../text';

import { ErrorFieldPropsType } from './error.type';

export function ErrorField(props: ErrorFieldPropsType) {
  const { errorTid, errorTvalue, helperTid, helperTvalue } = props;

  return (
    <Container>
      <Icon />
      <TextContainer>
        <TextPrimary tid={errorTid} tvalue={errorTvalue} />
        {helperTid && <TextSecondary tid={helperTid} tvalue={helperTvalue} />}
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(ErrorIcon)`
  margin-right: ${spacing(2)};
`;

const TextContainer = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;
