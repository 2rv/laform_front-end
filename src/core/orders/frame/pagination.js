import { useState } from 'react';
import styled from 'styled-components';
import { ButtonBasic } from 'src/lib/element/button';
import { THEME_COLOR } from 'src/lib/theme';

export function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <Container>
      {totalPages === 1 ? <></> : (
        Array(totalPages).fill().map((_, i) => (
          <Button
            key={i + 1}
            tid={i + 1}
            active={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)}
          />
        ))
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Button = styled(ButtonBasic)`
  width: 55px;
  border-radius: 12px;
  ${(props) => props.active && `
    background: ${THEME_COLOR.SECONDARY_DARK};
    color: ${THEME_COLOR.WHITE};
  `};
`;
