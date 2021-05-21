import styled from 'styled-components';

export const PageLayout = styled.div`
  display: grid;
  justify-content: ${(p) => p.horizontal || 'normal'};
  align-content: ${(p) => p.vertical || 'normal'};
`;
