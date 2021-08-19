import styled, { css } from 'styled-components';
import { spacing } from '../../theme';
import { GridLayoutPropsType } from './layout.type';

export function FieldLayout(props: GridLayoutPropsType) {
  const { type, children, adaptive } = props;
  return (
    <Layout adaptive={adaptive} type={type}>
      {children}
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  gap: ${spacing(3)};
  ${(p: GridLayoutPropsType) => {
    return (
      p.type === 'double' &&
      css`
        grid-template-columns: 1fr 1fr;
      `
    );
  }}
  ${(p: GridLayoutPropsType) => {
    return (
      p.adaptive &&
      css`
        @media screen and (max-width: 875px) {
          grid-template-columns: 1fr;
        }
      `
    );
  }}
`;
