import styled, { keyframes } from 'styled-components';
import { spacing, THEME_COLOR } from 'src/lib/theme';
import { ModalFullProps } from './modal.type';
import { useEffect } from 'react';

export function ModalFull(props: ModalFullProps) {
  const { onOpen = false, children } = props;
  useEffect(() => {
    if (onOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [onOpen]);
  if (!onOpen) return null;

  return (
    <Container open={onOpen}>
      <Content>{children}</Content>
    </Container>
  );
}

const animation = keyframes`
  0% {
	opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Container = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background-color: ${THEME_COLOR.WHITE};
  z-index: 10;
  animation: ${animation} 0.2s;
  display: ${(p) => (p.open ? 'flex' : 'none')};
  padding: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    padding: ${spacing(5)};
  }
  @media screen and (max-width: 720px) {
    padding: ${spacing(1)};
  }
  overflow-y: auto;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
`;
