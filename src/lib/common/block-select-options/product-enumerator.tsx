import styled from 'styled-components';
import { spacing } from '../../theme';
import { TextSecondary } from '../../element/text';
import {
  ProductEnumeratorCountFieldProps,
  ProductEnumeratorLengthFieldProps,
} from './type';
import { EnumeratorCount, EnumeratorLength } from 'src/lib/element/enumerator';

export function ProductEnumeratorCount(
  props: ProductEnumeratorCountFieldProps,
) {
  const { titleTid, maxNumber, minNumber, count, onChange } = props;
  return (
    <Container>
      <TextSecondary tid={titleTid} />
      <EnumeratorCount
        maxNumber={maxNumber}
        minNumber={minNumber}
        count={count}
        onChange={onChange}
      />
    </Container>
  );
}

export function ProductEnumeratorLength(
  props: ProductEnumeratorLengthFieldProps,
) {
  const { titleTid, maxLength, minLength, length, onChange } = props;
  return (
    <Container>
      <TextSecondary tid={titleTid} />
      <EnumeratorLength
        maxLength={maxLength}
        minLength={minLength}
        length={length}
        onChange={onChange}
      />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
  align-items: center;
  grid-template-columns: 150px 1fr;
  width: 100%;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: ${spacing(2)};
  }
`;
