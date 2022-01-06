import styled, { css } from 'styled-components';
import { spacing } from '../../theme';
import { FieldLayoutPropsType } from './layout.type';

export function FieldLayout(props: FieldLayoutPropsType) {
  const { type, children, adaptive, className } = props;
  return (
    <Layout adaptive={adaptive} type={type} className={className}>
      {children}
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  gap: ${spacing(3)};
  ${(p: FieldLayoutPropsType) => {
    return (
      p.type === 'double' &&
      css`
        grid-template-columns: 1fr 1fr;
      `
    );
  }}
  ${(p: FieldLayoutPropsType) => {
    return (
      p.adaptive &&
      css`
        @media screen and (max-width: 720px) {
          grid-template-columns: 1fr;
        }
      `
    );
  }}
`;
