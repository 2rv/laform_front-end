import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  justify-content: ${(p) => p.horizontal || 'normal'};
  align-content: ${(p) => p.vertical || 'normal'};
`;
